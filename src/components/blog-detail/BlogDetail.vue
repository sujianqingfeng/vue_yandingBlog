<template>

  <v-app>
    <v-toolbar color="transparent" flat scroll-off-screen>
      <v-btn icon @click.native="$router.go(-1)">
        <v-icon>arrow_back</v-icon>
      </v-btn>

    </v-toolbar>
    <v-container fluid fill-height mb-5>

      <v-layout column>
        <v-flex>
          <v-card class="blog-container">
            <v-container fluid grid-list-md px-1 py-1>

              <v-layout column>

                <v-flex px-3 py-3 d-flex align-end class="blog-header-height blog-header-bg">
                  <p class="display-1">{{blogDetail.title}}</p>

                </v-flex>

                <v-flex>
                  <v-layout align-center>
                    <v-flex>
                      <v-layout align-center mx-1 my-1>
                        <v-avatar :size="50">
                          <img :src="blogDetail.user.icon" alt="avatar">
                        </v-avatar>
                        <v-layout column mx-3 my-1>
                          <p class="info-footer-text">{{blogDetail.user.username}}</p>
                          <p class="info-footer-text">{{blogDetail.add_time | timeformat}}
                            <span class="view-text">{{blogDetail.num}} view</span>
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

                <v-flex px-3 py-4 class='markdown-body blog-content' v-html='$md2html(blogDetail.content)'>

                </v-flex>

              </v-layout>
            </v-container>
          </v-card>
        </v-flex>

        <v-flex>
          <v-card class="review-reply">
            <blog-review-reply @replay='replay'/>
          </v-card>
        </v-flex>

        
         <v-flex>
          <v-card class="review-reply">
            <blog-reivew-display></blog-reivew-display>
          </v-card>
        </v-flex>
      </v-layout>

    </v-container>

    <go-top class="go-top" />

    <v-snackbar right :timeout="snackbarConfig.time" :color="snackbarConfig.color" v-model="snackbarConfig.show">
      {{ snackbarConfig.text }}
    </v-snackbar>

    <v-footer height="180px">
      <blog-footer :info='blogInfo.user'/>
    </v-footer>
  </v-app>

</template>

<script>
import BlogFooter from '../index/BlogFooter'
import GoTop from 'components/go-top/GoTop'
import BlogIndex from './BlogIndex'
import BlogReviewReply from './BlogReviewReply'
import BlogReivewDisplay from './BlogReivewDisplay'
import { mapActions, mapGetters } from 'vuex'

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
      toolbars: {},
      navigations: []
    }
  },
  computed: {
    ...mapGetters(['blogDetail'])
  },
  methods: {
    ...mapActions(['getBlogDetail']),
    generateNavigation () {
      let navigations = []
      let childs = document.querySelector('.v-show-content').childNodes
      childs.forEach((element, index) => {
        if (element.localName === 'h1' || element.localName === 'h2') {
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
    },
    replay (str) {
      this.snackbarConfig.text = '暂未实现'
      this.snackbarConfig.show = true
    }
  },
  created () {
    this.getBlogDetail(this.$route.params.id).then(res => {
      // setTimeout(this.generateNavigation, 1000)
    })
  },

  components: {
    BlogFooter,
    GoTop,
    BlogIndex,
    BlogReviewReply,
    BlogReivewDisplay
  }
}
</script>

<style lang="stylus" scoped>
.view-text {
  color: gray;
  margin-left: 4px;
  padding: 4px;
}

.blog-content {
  min-height: 900px;
}

.review-reply
  max-width 900px
  margin: 0 auto;

.go-top
  position fixed
  bottom 130px
  right 50px
</style>



