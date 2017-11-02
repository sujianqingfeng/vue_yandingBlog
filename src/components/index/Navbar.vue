<template>
    <md-sidenav class="md-left" ref="leftSidenav" >

       

        <md-avatar class="md-avatar-icon md-large avatar">
            <md-icon>home</md-icon>
        </md-avatar>


        <p class="sing">
          Wo shi yi ge qian ming
        </p>


        <md-list>
            <md-list-item>Plain Text</md-list-item>
            <md-list-item target="_blank" href="https://google.com">Link</md-list-item>
            <md-list-item>
              <router-link to="/components/list">Router View</router-link>
            </md-list-item>
            <md-list-item>Category</md-list-item>
            <md-list-item>Serach</md-list-item>
            <md-list-item @click="goAboutMe">About me</md-list-item>
          </md-list>
    </md-sidenav>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {}
  },
  methods: {
    toggle () {
      this.$refs.leftSidenav.toggle()
    },
    goAboutMe () {
      this.$router.push({path: '/about'})
    }
  }
}
</script>


<style scoped>

  .avatar{
    display: block;
    margin: 20px auto 15px
  }

</style>
