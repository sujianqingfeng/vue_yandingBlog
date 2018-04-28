<template>

  <v-app>
    <v-toolbar absolute color="transparent" flat scroll-off-screen>
      <v-btn icon @click.native="$router.go(-1)">
        <v-icon>arrow_back</v-icon>
      </v-btn>

    </v-toolbar>
    <v-container fluid fill-height mb-5>

      <v-card class="card-blog-detail">
        <v-container fluid grid-list-md px-1 py-1>

          <v-layout column>

            <v-flex px-3 py-3 d-flex align-end :style="detailHeaderStyle" class="blog-detail-header-bg">
              <p class="display-1">{{blogInfo.title}}</p>

            </v-flex>

            <v-flex>
              <v-layout align-center>
                <v-flex>
                  <v-layout align-center mx-1 my-1>
                    <v-avatar :size="50">
                      <img :src="blogInfo.user.icon?blogInfo.user.icon:avatar" alt="avatar">
                    </v-avatar>
                    <v-layout column mx-1 my-1>
                      <p class="info-footer-text">{{blogInfo.user.username}}</p>
                      <p class="info-footer-text">{{blogInfo.add_time}}
                        <span class="view-text">{{blogInfo.num}} view</span>
                      </p>
                    </v-layout>
                  </v-layout>
                </v-flex>

                <v-btn @click='share' icon>
                  <v-icon>share</v-icon>
                </v-btn>

              </v-layout>
            </v-flex>

            <v-divider/>

            <v-flex px-0 py-0 style="min-height:900px">
              <mavon-editor ref=md v-model="blogInfo.content" :navigation='false' :subfield='false' :toolbarsFlag='false' :toolbars="toolbars" defaultOpen="preview" style="min-height:900px;z-index:0" class="blog-detail-content" />
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-container>

    <go-top class="go-top" />

    <v-snackbar right :timeout="snackbarConfig.time" :color="snackbarConfig.color" v-model="snackbarConfig.show">
      {{ snackbarConfig.text }}
    </v-snackbar>

    <v-footer height="180px">
      <blog-footer/>
    </v-footer>
  </v-app>

</template>

<script>
import BlogFooter from '../index/BlogFooter'
import GoTop from 'components/go-top/GoTop'
import BlogIndex from './BlogIndex'
import { mapActions } from 'vuex'
import { mavonEditor } from 'mavon-editor'
export default {
  name: 'blog-detail',
  data () {
    return {
      snackbarConfig: {
        time: 4000,
        color: 'success',
        show: false,
        text: ''
      },
      detailHeaderStyle: {
        backgroundImage:
          'url(' + require('../../assets/imgs/blog_header_bg.jpg') + ')'
      },
      avatar: require('../index/avatar.jpg'),
      blogInfo: {},
      toolbars: {},
      navigations: []
    }
  },
  methods: {
    ...mapActions(['getBlog']),
    generateNavigation () {
      let navigations = []
      let childs = document.querySelector('.v-show-content').childNodes
      childs.forEach((element, index) => {
        if (element.localName === 'h1' || element.localName === 'h2') {
          console.log(element.outerText)
          element.id = 'n' + navigations.length
          navigations.push(element.outerText)
        }
      })
      this.navigations = navigations
    },
    share () {
      this.$copyText(window.location.href).then(e => {
        this.snackbarConfig.text = '复制到剪贴板'
        this.snackbarConfig.show = true
      })
    }
  },
  created () {
    this.getBlog(this.$route.params.id).then(res => {
      this.blogInfo = res.data
      setTimeout(this.generateNavigation, 1000)
    })
  },

  components: {
    BlogFooter,
    GoTop,
    BlogIndex,
    mavonEditor
  }
}
</script>


<style>
.card-blog-detail {
  width: 900px;
  margin: 0 auto;
}

.blog-detail-header-bg {
  height: 250px;
  color: white;
}

.blog-detail-content {
  min-height: 900px;
}

.view-text {
  color: gray;
  margin-left: 12px;
  padding: 4px;
}

.v-note-wrapper {
  z-index: 0;
}
.blog-detail-content .v-note-panel {
  box-shadow: 0px 0px 0px #fff !important;
}
</style>
