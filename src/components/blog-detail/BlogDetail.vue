<template>
  <div class="blog-container">
    <div class="blog-detail">

      <md-card class="blog-detail-header">
        <md-card-header class="blog-detail-header-bg  md-padding md-layout md-alignment-bottom-left">
          <span class="md-title">花开堪折直须折，莫待无花空折枝</span>
        </md-card-header>

        <div class="md-padding md-layout  blog-detail-info md-alignment-center-left">

          <div class="md-layout-item md-size-70 md-layout md-alignment-center-left">

            <div class="blog-detail-avatar">
               <md-avatar>
              <img :src="avatar" alt="Avatar">
            </md-avatar>
            </div>
           
            <div class="blog-detail-text-warpper">

              <p class="blog-detail-info-text">素笺淡墨染流年</p>
              <span class="blog-detail-info-text">2018/3/17</span>
              <span class="blog-detail-info-text">666</span>
            </div>

          </div>

          <div class="md-layout-item md-size-30 md-layout md-alignment-center-right">

            <md-button class="md-icon-button">
              <md-icon>view_carousel</md-icon>
            </md-button>

            <md-button class="md-icon-button">
              <md-icon>view_carousel</md-icon>
            </md-button>

          </div>
        </div>

        <div class="md-layout md-padding blog-detail-content">
          春水初生，春林初盛，春风十里，不如你。

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
export default {
  name: 'blog-detail',
  data () {
    return {
      avatar: require('../index/avatar.jpg')
    }
  },
  components: {
    BlogFooter,
    GoTop
  }
}
</script>


<style>
.blog-detail {
  max-width: 900px;
  margin: 0 auto;
}

.blog-detail-header {
  margin-top: 200px;
}

.blog-detail-header-bg {
  height: 250px;
  background-image: url("timg22.jpg");
  color: white;
}

.blog-detail-info {
  border-bottom-color: grey;
  border-bottom-width: 1px;
  border-style: solid;
}

.blog-detail-text-warpper {

}

.blog-detail-info-text {
  margin-left: 12px;
  padding: 4px;
}

.blog-detail-content {
  height: 2000px;
}

.blog-footer {
  margin-top: 100px;
  width: 100%;
  background-color: white;
}


</style>
