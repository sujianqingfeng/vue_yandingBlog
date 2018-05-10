<template>

  <v-app>
    <v-toolbar absolute color="transparent" flat scroll-off-screen>
     <v-btn icon @click.native="$router.go(-1)">
        <v-icon>arrow_back</v-icon>
      </v-btn>

    </v-toolbar>


    <v-container fluid fill-height>
      <v-card class="blog-container">
        <v-container fluid grid-list-md px-1 py-1>

          <v-layout column>

            <v-flex d-flex align-end  class="blog-edit-header-bg blog-header-bg">

              <v-layout column>

                <v-flex lg8>
                </v-flex>

                <v-flex pl-5 pr-5 style="width:350px">

                  <v-text-field dark color="white" clearable label="标题" id="title" :value='blog_params.title'></v-text-field>
              
                </v-flex>

              </v-layout>

            </v-flex>

            <v-flex>
              <v-layout align-center>
                <v-flex>
                  <v-layout align-center mx-1 my-1>
                    <v-avatar :size="50">
                      <img :src="avatar" alt="avatar">
                    </v-avatar>
                    <v-layout column mx-1 my-1>
                      <p class="info-footer-text">{{user.username}}</p>
                      <p class="info-footer-text">252525</p>
                    </v-layout>
                  </v-layout>
                </v-flex>

                <v-btn icon>
                  <v-icon>check</v-icon>
                </v-btn>

              </v-layout>
            </v-flex>

            <v-divider/>

            <v-flex px-0 py-0 style="height:900px">
              <mavon-editor ref=md v-model="blog_params.content" :toolbars="toolbars" @imgAdd="$imgAdd" @imgDel="$imgDel" defaultOpen="edit" style="height: 100%" />
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
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import { mapActions, mapGetters } from 'vuex'
import moment from 'moment'
export default {
  name: 'editBlog',
  data: () => ({

    img_file: {},
    createTime: '',
    blog_params: {
      title: '',
      category: '',
      content: ''
    },
    toolbars: {
      bold: true, // 粗体
      italic: true, // 斜体
      header: true, // 标题
      underline: true, // 下划线
      strikethrough: true, // 中划线
      mark: true, // 标记
      superscript: true, // 上角标
      subscript: true, // 下角标
      quote: true, // 引用
      ol: false, // 有序列表
      ul: false, // 无序列表
      link: true, // 链接
      imagelink: true, // 图片链接
      code: true, // code
      table: true, // 表格
      fullscreen: true, // 全屏编辑
      readmodel: true, // 沉浸式阅读
      htmlcode: false, // 展示html源码
      help: true, // 帮助
      /* 1.3.5 */
      undo: false, // 上一步
      redo: false, // 下一步
      trash: false, // 清空
      save: false, // 保存（触发events中的save事件）
      /* 1.4.2 */
      navigation: true, // 导航目录
      /* 2.1.8 */
      alignleft: true, // 左对齐
      aligncenter: true, // 居中
      alignright: true, // 右对齐
      /* 2.2.1 */
      subfield: false, // 单双栏模式
      preview: true // 预览
    }
  }),
  methods: {
    ...mapActions(['uploadImg', 'save', 'update', 'getBlog']),

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
        ? this.createTime
        : moment(new Date()).format('YYYY-MM-DD')
    }
  },
  created () {
    const params = this.$route.params
    params &&
      params.id &&
      this.getBlog(params.id).then(res => {
        this.createTime = res.data.add_time
        this.blog_params.category = res.data.category.id
        this.blog_params.content = res.data.content
        this.blog_params.title = res.data.title
      })
  },

  computed: {
    ...mapGetters(['user', 'categorys'])
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
  z-index: 0;
}
</style>

