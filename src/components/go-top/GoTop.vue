<template lang='pug'>
    v-layout.moile-goTop(v-scroll="onScroll")
      div.scroll-image(@click="setScrollTop")

</template>


<script>
import {getScrollHeight, getWindowHeight} from '@/utils/TextUtils'
import nprogress from 'nprogress'

export default {
  name: 'goTop',
  data: () => ({
    offsetTop: 0
  }),
  mounted () {
    this.$nextTick(() => {
      nprogress.configure({trickle: false, minimum: 0})
      this.listener = window.addEventListener('scroll', this.setScroll)
    })
  },
  methods: {
    onScroll (e) {
      this.offsetTop = window.pageYOffset || document.documentElement.scrollTop
    },
    setScroll () {
      this.$store.dispatch('setScroll', this.offsetTop)
      if (this.offsetTop > 50) { document.querySelector('.scroll-image').style.top = '-200px' } else { document.querySelector('.scroll-image').style.top = '-900px' }
      let result = this.offsetTop / (getScrollHeight() - getWindowHeight())
      if (result >= 1) { return }
      nprogress.set(result)
    },
    setScrollTop () {
      let scrollTopTime = setInterval(() => {
        document.body.scrollTop = document.body.scrollTop - 50
        if (document.body.scrollTop === 0) {
          nprogress.set(0)
          clearInterval(scrollTopTime)
        }
      }, 10)
    }
  },
  destroyed () {
    this.listener && window.removeEventListener(this.listener)
  }
}
</script>


<style scoped lang='stylus'>
.scroll-image
  position: fixed
  top : -900px
  right : 25px
  height : 900px
  width : 70px
  background : url('./../../assets/imgs/scroll.png') no-repeat center
  background-size: contain
  transition: all .5s ease-in-out
  animation: bounce 2s linear infinite

@keyframes bounce
  0% 
    transform: translateY(0)
  50% 
    transform: translateY(-6px)
  100% 
    transform: translateY(0)

@media screen and (max-width:960px)
  .moile-goTop
    display: none 
</style>
