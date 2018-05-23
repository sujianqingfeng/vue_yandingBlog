<template>

  <v-app>


    <v-container fluid fill-height>
      <v-card class="blog-container">
        <v-container fluid grid-list-md px-1 py-1>

          <v-layout column>

            <v-flex d-flex align-end  class="blog-edit-header-bg blog-header-bg">

              <v-layout column>

                <v-flex lg8>
                </v-flex>

                <v-flex pl-5 pr-5 style="width:350px">

                   <p  class="display-1">About Me</p>
              
                </v-flex>

              </v-layout>

            </v-flex>

            <v-flex>
              <v-layout align-center>
                <v-flex>
                  <v-layout align-center mx-1 my-1>
                    <v-avatar :size="50">
                      <img :src="user.icon?user.icon:avatar" alt="avatar">
                    </v-avatar>
                    <v-layout column mx-1 my-1>
                      <p class="info-footer-text">{{user.username}}</p>
                      <p class="info-footer-text">{{createTimeF()}}</p>
                    </v-layout>
                  </v-layout>
                </v-flex>

                <v-btn @click="saveBtn" icon>
                  <v-icon>check</v-icon>
                </v-btn>

              </v-layout>
            </v-flex>

            <v-divider/>

            <v-flex px-0 py-0 style="height:900px">
              <mavon-editor ref=md v-model="aboutParams.content" :toolbars="toolbars" @imgAdd="$imgAdd" @imgDel="$imgDel" defaultOpen="edit" style="height: 100%" />
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-container>

    <v-snackbar right :timeout="snackbarConfig.time" :color="snackbarConfig.color" v-model="snackbarConfig.show">
      {{ snackbarConfig.text }}
    </v-snackbar>

  </v-app>

</template>


<script>
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import { mapActions, mapGetters } from 'vuex'
import moment from 'moment'
import {markdownConfig} from './../../config'
export default {
  name: 'editAbout',
  data: () => ({
    avatar: require('assets/imgs/avatar.jpg'),
    img_file: {},
    createTime: '',
    aboutParams: {
      content: ''
    },
    toolbars: markdownConfig,
    isSave: false,
    snackbarConfig: {
      time: 4000,
      color: 'success',
      show: false,
      text: ''
    }
  }),
  methods: {
    ...mapActions(['getAbout', 'createAbout', 'updateAbout']),

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

        this.beforeSave()
      })
    },
    saveBtn () {
      if (this.img_file.lenght > 0) {
        this.uploadimg()
      } else {
        this.beforeSave()
      }
    },
    beforeSave () {
      if (this.isSave) { this.startSaveAbout() } else this.startUpdateAbout()
    },
    startSaveAbout () {
      this.createAbout(this.aboutParams)
        .then(res => {
          this.$router.push('/about/' + this.user.id)
        })
        .catch(error => {
          this.snackbarConfig.color = 'error'
          this.snackbarConfig.text = '保存失败' + error.data
          this.snackbarConfig.show = true
        })
    },
    startUpdateAbout () {
      this.updateAbout({ id: this.user.id, params: this.aboutParams })
        .then(res => this.$router.push('/about/' + this.user.id))
        .catch(error => {
          this.snackbarConfig.color = 'error'
          this.snackbarConfig.text = '修改失败' + error.data
          this.snackbarConfig.show = true
        })
    },
    startGetAbout () {
      this.getAbout(this.user.id).then(res => {
        this.aboutParams.content = res.content
        this.createTime = res.add_time
        this.isSave = false
      }).catch(res => {
        this.isSave = true
      })
    },
    createTimeF () {
      return this.createTime
        ? moment(this.createTime).format('YYYY-MM-DD')
        : moment(new Date()).format('YYYY-MM-DD')
    }
  },
  created () {
    this.user && this.startGetAbout()
  },

  computed: {
    ...mapGetters(['user'])
  },

  components: {
    mavonEditor
  }
}
</script>

<style >
.blog-header {
  height: 200px;
}
.editor {
  width: 100%;
  height: 1200px;
}

.blog-edit-header-bg {
  height: 250px;
  color: white;
  background-repeat: no-repeat;
  background-position: right bottom;
}

.form-warpper {
  width: 300px;
}

.v-note-op{
      box-shadow: 0px 0.4px 0px grey !important; 
}

.v-note-panel{
      box-shadow: 0px 0px 0px #fff !important;
}


.v-note-wrapper{
  z-index: 0 !important
}

</style>

