<template>
  <div class="yd-blog">
    <md-toolbar class="md-transparent">
        <md-button class="md-icon-button" @click="toggleLeftSidenav">
            <md-icon>menu</md-icon>
        </md-button>

    <h2 class="md-title">My Blog</h2>
    </md-toolbar>

    <Navbar ref="nav"/>
  
  </div>
</template>

<script>
import Navbar from 'components/index/Navbar'
export default {
  name: 'index',
  data () {
    return {}
  },
  methods: {
    toggleLeftSidenav () {
      this.$refs.nav.toggle()
    }
  },
  components: {
    Navbar
  }
}
</script>


<style scoped>
.content {
  background-image: "bg_home.jpg";
}
</style>
