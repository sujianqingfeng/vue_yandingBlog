<template>
  <md-layout md-column class="yd-blog">
    <md-toolbar class="md-transparent">
        <md-button class="md-icon-button menu-color" @click="toggleLeftSidenav">
            <md-icon>menu</md-icon>
        </md-button>

    <h2 class="md-title menu-color">My Blog</h2>
    </md-toolbar>

    <Navbar ref="nav"/>


    <md-layout md-column class="content">

        <md-list class="md-transparent " >
            
            <md-list-item md-ink-ripple="#03A9F4" class="md-clickable">

             
            <blog-item title="wo shi biaoti" time="1 day ago" content="content"/>
            
              
              
            
            </md-list-item >

             <md-list-item class="blog-item">
              
              <blog-item title="wo shi biaoti" time="1 day ago" content="content"/>
            
            </md-list-item>
           
        </md-list>

     
    </md-layout>
  
  </md-layout>
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

.menu-color {
  color: white;
}

.blog-item{
  margin-top: 20px
}
</style>
