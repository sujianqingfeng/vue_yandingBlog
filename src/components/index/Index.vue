<template>
  <div class="yd-blog">
    <md-toolbar class="md-transparent">
        <md-button class="md-icon-button menu-color" @click="toggleLeftSidenav">
            <md-icon>menu</md-icon>
        </md-button>

    <h2 class="md-title menu-color">My Blog</h2>
    </md-toolbar>

    <Navbar ref="nav"/>


    <div class="content">

        <md-list class="zero">
           
            <md-list-item class="zero">
              
              
              
              <blog-item title="wo shi biaoti" time="1 day ago" content="condfjdjaf"/>
            
            </md-list-item>
           
          </md-list>

         <!-- <md-layout md-column  md-gutter>
          <md-layout md-column @click="goDetail" >
            <blog-item title="wo shi biaoti" time="1 day ago" content="condfjdjaf"/>
          </md-layout>

          <md-layout md-column class="blog-item"  >
            <blog-item title="wo shi biaoti" time="1 day ago" content="condfjdjaf"/>

          </md-layout>

          <md-layout md-column class="blog-item" >
            <blog-item title="wo shi biaoti" time="1 day ago" content="condfjdjaf"/>

          </md-layout>
        </md-layout>      -->
    </div>
  
  </div>
</template>

<script>
import Navbar from 'components/index/Navbar'
import BlogItem from 'components/index/BlogItem'
export default {
  name: 'index',
  data () {
    return {}
  },
  methods: {
    toggleLeftSidenav () {
      this.$refs.nav.toggle()
    },
    goDetail () {
      this.$route.push('/detail/36y8749')
    }
  },
  components: {
    Navbar,
    BlogItem
  }
}
</script>


<style scoped>


.blog-item{
  display: block;
}

.blog-list{

}

.menu-color{
  color: white
}
</style>
