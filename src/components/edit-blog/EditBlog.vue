<template>

  <v-app>

    <v-container fluid fill-height>
      <v-card class="blog-container">
        <v-container fluid grid-list-md px-1 py-1>

          <v-layout column>

            <v-flex d-flex align-end  class="blog-header-height blog-header-bg">

              <v-layout column>

                <v-flex lg8>
                </v-flex>

                <v-flex pl-5 pr-5 style="width:350px">
                  <v-text-field dark color="white" clearable label="标题" id="title" v-model='blog_params.title'></v-text-field>
                  <v-select dark color="white" single-line autocomplete :items="categorys" item-text="name" item-value="id" v-model="blog_params.category" label="类别"></v-select>
                </v-flex>

              </v-layout>

            </v-flex>

            <v-flex>
              <v-layout align-center>
                <v-flex>
                  <v-layout align-center mx-1 my-1>
                    <v-avatar :size="50">
                      <img :src="user.icon" alt="avatar">
                    </v-avatar>
                    <v-layout column mx-3 my-1>
                      <p class="info-footer-text">{{user.username}}</p>
                      <p class="info-footer-text">{{createTimeF()}}</p>
                    </v-layout>
                  </v-layout>
                </v-flex>

                <v-btn @click="saveBlog" icon>
                  <v-icon>check</v-icon>
                </v-btn>

              </v-layout>
            </v-flex>

            <v-flex px-0 py-0 style="height:900px">
              <mavon-editor ref=md v-model="blog_params.content" :boxShadow='false' :toolbars="toolbars" @imgAdd="$imgAdd" @imgDel="$imgDel" defaultOpen="edit" style="height: 100%" />
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-container>

    <!-- <v-snackbar right :timeout="snackbarConfig.time" :color="snackbarConfig.color" v-model="snackbarConfig.show">
      {{ snackbarConfig.text }}
    </v-snackbar> -->

  </v-app>

</template>


<script>
import 'mavon-editor/dist/css/index.css'
import { mapActions, mapGetters } from 'vuex'
import {markdownConfig} from './../../config'
import moment from 'moment'
export default {
  name: 'editBlog',
  props: {
    user: Object
  },
  data: () => ({
    drawerConfig: {
      show: false
    },
    img_file: {},
    createTime: '',
    categorys: [],
    blog_params: {
      title: '',
      category: '',
      content: ''
    },
    toolbars: markdownConfig
  }),
  methods: {
    ...mapActions(['uploadImg', 'save', 'update', 'getBlogDetail', 'getCategoryByAdmin']),
    $imgAdd (pos, $file) {
      // 缓存图片信息
      this.img_file[pos] = $file
    },
    $imgDel (pos) {
      delete this.img_file[pos]
    },
    uploadimg ($e) {
      let formdata = new FormData()

      for (let _img in this.img_file) {
        formdata.append('imgs', this.img_file[_img])
      }

      this.uploadImg(formdata).then(res => {
        const imgs = res.blog_imgs
        for (const i in imgs) {
          this.$refs.md.$img2Url('./' + i, imgs[i])
        }

        let params = this.$route.params
        if (params.id) {
          this.updateTheBlog(params.id)
          return
        }

        this.saveTheBlog()
      })
    },
    saveBlog () {
      let params = this.$route.params
      if (params.id) {
        if (this.img_file.lenght > 0) {
          this.uploadimg()
        } else {
          this.updateTheBlog(params.id)
        }
        return
      }

      if (this.img_file.lenght > 0) {
        this.uploadimg()
      } else {
        this.saveTheBlog()
      }
    },
    saveTheBlog () {
      this.save(this.blog_params)
        .then(res => {
          this.$router.push('/detail/' + res.data.id)
        })
        .catch(error => {
          this.snackbarText = '保存失败' + error.data
          this.showSnackbar = true
        })
    },
    updateTheBlog (id) {
      this.update({ id: id, params: this.blog_params })
        .then(res => this.$router.push('/detail/' + res.data.id))
        .catch(error => {
          this.snackbarText = '修改失败' + error.data
          this.showSnackbar = true
        })
    },
    createTimeF () {
      return this.createTime
        ? moment(this.createTime).format('YYYY-MM-DD')
        : moment(new Date()).format('YYYY-MM-DD')
    }
  },
  created () {
    const params = this.$route.params
    params &&
      params.id &&
      this.getBlogDetail(params.id)
    this.getCategoryByAdmin().then(res => { this.categorys = res })
  },

  computed: {
    ...mapGetters(['blogDetail'])
  },
  watch: {
    blogDetail: function (detail) {
      this.createTime = detail.add_time
      this.blog_params.category = detail.category.id
      this.blog_params.content = detail.content
      this.blog_params.title = detail.title
    }
  }
}
</script>

<style scoped>
.blog-header {
  height: 200px;
}
.editor {
  width: 100%;
  height: 1200px;
}


.form-warpper {
  width: 300px;
}

#title {
  font-size: 30px !important;
}

.v-note-wrapper{
  z-index: 0;
}
</style>

