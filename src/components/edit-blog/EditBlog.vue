<template>
  <div class="edit-containert">

    <div class="blog-header">
      <md-button @click="menuVisible=true" class="md-icon-button">
        <md-icon class="menu">menu</md-icon>
      </md-button>
    </div>

    <edit-nav :show.sync='menuVisible' />

    <div class="edit-warpper">
      <md-card class="blog-edit-header">
        <md-card-header class="blog-edit-header-bg  md-padding md-layout md-alignment-bottom-left" :style="editUserHeader">

          <div class="title-warpper">

            <md-field>
              <md-input class="text-title" v-model="blog_params.title" placeholder="这里是标题"></md-input>
            </md-field>

            <md-field>
              <transition name="slide-fade">
                <md-input v-if="!showCategory" v-model="blog_params.category" placeholder="这里是分类"></md-input>
              </transition>
              <transition name="slide-fade">
                <md-select v-if="showCategory" v-model="blog_params.category" name="movie" id="movie" placeholder="这里是分类">
                  <md-option v-for="item in categorys" :key="item.id" :value="item.id">{{item.name}}</md-option>

                </md-select>
              </transition>

            </md-field>

          </div>
          <md-button @click="categoryToggle" class="category-toggle md-icon-button">
            <md-icon class="menu">cached</md-icon>
          </md-button>

        </md-card-header>

        <div class="md-padding md-layout  blog-detail-info md-alignment-center-left">

          <div class="md-layout-item md-size-70 md-layout md-alignment-center-left">

            <div class="blog-detail-avatar">
              <md-avatar>
                <img :src="user.icon?user.icon:avatar" alt="Avatar">
              </md-avatar>
            </div>

            <div class="blog-detail-text-warpper">
              <p class="blog-edit-info-text">{{user.username}}</p>
              <span class="blog-edit-info-text">{{createTimeF()}}</span>
            </div>

          </div>

          <div class="md-layout-item md-size-30 md-layout md-alignment-center-right">

            <md-button class="md-icon-button" @click="saveBlog">
              <md-icon>check</md-icon>
            </md-button>

          </div>
        </div>

        <div class="md-layout blog-edit-content">

          <div class="editor">
            <mavon-editor ref=md v-model="blog_params.content" :toolbars="toolbars" @imgAdd="$imgAdd" @imgDel="$imgDel" defaultOpen="edit" style="height: 100%" />
          </div>
        </div>

      </md-card>

    </div>

    <div class="md-layout md-gutter">
      <div class="md-layout-item md-size-15">

      </div>
      <div class="md-layout-item  md-size-85">

      </div>
    </div>

    <md-snackbar md-position="left" :md-duration="4000" :md-active.sync="showSnackbar">
      <span>{{snackbarText}}</span>

    </md-snackbar>

  </div>

</template>


<script>
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import { mapActions, mapGetters } from 'vuex'
import EditNav from './EditNav'
import moment from 'moment'
export default {
  name: 'editBlog',
  data: () => ({
    showSnackbar: false,
    snackbarText: '',
    avatar: require('../index/avatar.jpg'),
    menuVisible: false,
    editUserHeader: {
      backgroundImage:
        'url(' + require('../../assets/imgs/blog_header_bg.jpg') + ')'
    },
    showCategory: true,
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
    categoryToggle () {
      this.showCategory = !this.showCategory
    },
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
    mavonEditor,
    EditNav
  }
}
</script>

<style scope>
.blog-header {
  height: 200px;
}
.editor {
  width: 100%;
  height: 1200px;
}
.edit-warpper {
  max-width: 900px;
  margin: 0 auto;
  padding-bottom: 100px;
}
.blog-edit-header {
}
.blog-edit-header-bg {
  height: 300px;
  color: white;
  background-repeat: no-repeat;
  background-position: right bottom;
}

.title-warpper {
  width: 45%;
}

.category-toggle {
  margin-bottom: 15px !important;
}

.category-toggle div div i {
  color: white !important;
}

.blog-edit-info-text {
  margin-left: 12px;
  padding: 4px;
}

/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.slide-fade-enter-active {
  transition: all 3.5s ease;
}
.slide-fade-leave-active {
  transition: all 0s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateY(50px);
  opacity: 0;
}

input::-webkit-input-placeholder,
textarea::-webkit-input-placeholder {
  color: white !important;
}
input:-moz-placeholder,
textarea:-moz-placeholder {
  color: white !important;
}
input::-moz-placeholder,
textarea::-moz-placeholder {
  color: white !important;
}
input:-ms-input-placeholder,
textarea:-ms-input-placeholder {
  color: white !important;
}

.text-title::-webkit-input-placeholder,
.text-title::-webkit-input-placeholder {
  color: white !important;
  font-size: 25px !important;
}
.text-title:-moz-placeholder,
.text-title:-moz-placeholder {
  color: white !important;
  font-size: 25px !important;
}
.text-title::-moz-placeholder,
.text-title::-moz-placeholder {
  color: white !important;
  font-size: 25px !important;
}
.text-title:-ms-input-placeholder,
.text-title:-ms-input-placeholder {
  color: white !important;
  font-size: 25px !important;
}

.md-icon-font svg {
  color: white !important;
  fill: white !important;
}

.text-title {
  font-size: 30px !important;
}

.md-field input {
  color: white !important;

  text-shadow: 0px 0px 0px white;
  -webkit-text-fill-color: white !important;
}

:root {
  --md-theme-default-primary: white !important;
  --md-teheme-default-accent: white !important;
}

.md-field.md-theme-default:after {
  background-color: white !important;
}


.md-snackbar.md-theme-default{
  background-color:#E9EBEC
}

.md-snackbar.md-theme-default span{
 color: gray;
}
</style>

