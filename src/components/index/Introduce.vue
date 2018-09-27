<template lang='pug'>
    v-app
        Nav
        navDrawer
        goTop.container-right
        myheader
        v-container
            v-layout.lay-container
        v-footer
            Footer
</template>
<script>
import Nav from './Navbar'
import myheader from './header'
import Footer from './IntroduceFooter'
import goTop from './../go-top/GoTop'
import navDrawer from './Navdrawer'

export default {
  name: 'introduce',
  mounted () {
  },
  data: () => ({
  }),
  methods: {
  },
  components: {
    Nav,
    navDrawer,
    goTop,
    myheader,
    Footer
  }
}
</script>

<style scoped lang='stylus'>
.introduce-title
    color: white

.lay-container
    height: 1000px

.container-right
    position: fixed
    right: 25px
    height: 900px
    width: 70px
    z-index: 1

.footer
    background: none
    display: block
    height: auto !important
    min-height: auto 
</style>
