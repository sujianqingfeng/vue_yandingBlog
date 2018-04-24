<template>
  <div class="blog-container">

     <div class="blog-head-warpper">
      <md-button @click='$router.go(-1)' class="md-icon-button blog-head-icon">
        <md-icon class="">arrow_back</md-icon>
      </md-button>

      <blog-index :navigations='navigations'/>

    </div>


    <div class="blog-detail">

      <md-card class="blog-detail-header">
        <md-card-header class="blog-detail-header-bg  md-padding md-layout md-alignment-bottom-left" :style="detailHeader">
          <span class="md-title">{{blogInfo.title}}</span>
        </md-card-header>

        <div class="md-padding md-layout  blog-detail-info md-alignment-center-left">

          <div class="md-layout-item md-size-70 md-layout md-alignment-center-left">

            <div class="blog-detail-avatar">
               <md-avatar>
              <img :src="avatar" alt="Avatar">
            </md-avatar>
            </div>
           
            <div class="blog-detail-text-warpper">

              <p class="blog-detail-info-text">{{blogInfo.user?blogInfo.user.username:''}}</p>
              <span class="blog-detail-info-text">{{blogInfo.add_time}}</span>
              <span class="blog-detail-info-text">{{blogInfo.num}} view</span>
            </div>

          </div>

          <div class="md-layout-item md-size-30 md-layout md-alignment-center-right">

          

            <md-button class="md-icon-button">
              <md-icon>send</md-icon>
            </md-button>

          </div>
        </div>

        <div class="md-layout  blog-detail-content">
         <!-- {{blogInfo.content}} -->
            <mavon-editor  ref=md v-model="blogInfo.content" :navigation='false' :subfield='false' :toolbarsFlag='false' :toolbars="toolbars" defaultOpen="preview" class="blog-detail-content"  />
        </div>

      </md-card>

    </div>
    <div class="blog-footer md-padding md-alignment-center-center">
      <div class="md-layout-item ">
        <blog-footer/>
      </div>
    </div>

    <div class="go-top">
      <go-top/>

    </div>

  </div>

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
      detailHeader: {
        backgroundImage:
        'url(' + require('../../assets/imgs/blog_header_bg.jpg') + ')'
      },
      avatar: require('../index/avatar.jpg'),
      blogInfo: {},
      toolbars: {

      },
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
.blog-detail {
  max-width: 900px;
  margin: 0 auto;
}

.blog-detail-header {

}

.blog-detail-header-bg {
  height: 250px;
  /* background-image: url("timg22.jpg"); */
  color: white;
}

.blog-detail-info {
  /* border-bottom-color:  #c4c1bf; */
  /* border-bottom-width: 1px;
  border-style: solid; */
}

.blog-detail-text-warpper {

}

.blog-detail-info-text {
  margin-left: 12px;
  padding: 4px;
}

.blog-detail-content {
  width: 100%;
  min-height: 1000px;
}

.blog-footer {
  margin-top: 100px;
  width: 100%;
  background-color: white;
}




</style>
