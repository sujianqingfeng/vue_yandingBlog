<template lang="pug">
    div.header-carousel(ref='container')
      div.header-background(v-lazy:background-image="background" :key="background" :style='backgroundStyle')
        div.header-container
          div.header-slogan
            h1 Hi,Wanderer!
          div.header-info
            p 
              i.fa.fa-quote-left
              span &nbsp; If the heart does not have a place to rest, wherever it goes, it will be wandering. &nbsp;
              i.fa.fa-quote-right
            div.share-list
              li(@click="upper")
                i.fa.fa-chevron-left.fa-lg
              li
                a(href="https://github.com/LingHanChuJian" target="_blank")
                  i.fa.fa-github.fa-lg
              li
                a(href="https://twitter.com/5wHHx3QAsNNxhYd?lang=zh-tw" target="_blank")
                  i.fa.fa-twitter.fa-lg
              li
                i.fa.fa-wechat.fa-lg
                div.wechat-inner
                  img(src="./../../assets/imgs/wenchat.png")
              li
                a(href="tencent://message/?uin=2739069093&Site=凌寒初见&Menu=yes" target="_blank") 
                  i.fa.fa-qq.fa-lg
              li
                a(href="https://music.163.com/#/user/home?id=105202297" target="_blank")
                  img(src="./../../assets/imgs/yunmusic.png")
              li
                a(href="mailto:linghanchujian@gmail.com" target="_blank")
                  i.fa.fa-envelope.fa-lg
              li(@click="lower")
                i.fa.fa-chevron-right.fa-lg
      
</template>

<script>
import {getWindowHeight, getScrollHeight, getRandomInteger} from '@/utils/TextUtils'

export default {
  name: 'header-background',
  mounted () {
    document.styleSheets[0].addRule('.header-carousel:after', `bottom:${getScrollHeight() - getWindowHeight()}px`)
  },
  data: () => ({
    background: require('./../../assets/imgs/comic/001.png'),
    backgroundStyle: {
      height: `${getWindowHeight()}px`
    }
  }),
  methods: {
    getbackground () {
      // 生成图片
      let random = getRandomInteger(10)
      if (random < 10) {
        random = `00${random}.png`
      } else if (random > 10 && random < 100) {
        random = `0${random}.png`
      } else {
        random = `${random}.png`
      }
      return require(`./../../assets/imgs/comic/${random}`)
    },
    upper () {
      this.background = this.getbackground()
    },
    lower () {
      this.background = this.getbackground()
    }
  },
  components: {
  }
}
</script>

<style lang="stylus" scoped>
.header-carousel:after
  content: ''
  position: absolute
  top:0
  left: 0
  right: 0
  z-index: 0
  background-attachment: fixed
  background-image: url(./../../assets/imgs/dot.gif)

.header-background
  background-attachment: fixed
  justify-content: center
  align-items: center
  display: flex

.header-container
  max-width: 800px
  z-index: 1
  
.header-slogan h1 
  margin: 0 auto
  text-transform: uppercase
  text-align: center
  font-family: Consolas, Monaco, monospace
  font-size: 80px
  width: 56ch
  max-width: 520px
  color: #FFFFFF 
  white-space: nowrap
  overflow: hidden
  cursor: default
  text-shadow: 1px 1px 0 #ff3f1a, -1px -1px 0 #00a7e0
  animation: typing 12s steps(56) 

.header-info
  max-width: 800px
  width: auto 
  height: auto
  padding: 20px 10px 10px 10px 
  border-radius: 15px 
  background-color: rgba(0,0,0,.5)

.header-info:before
  content: ''
  position: absolute
  margin-top: -50px
  margin-left: 100px
  border-width: 15px
  border-style: solid
  border-color: transparent transparent rgba(0,0,0,.5) transparent

.header-info p 
  color: #FFFFFF
  font-weight: 700

.header-info p span
  font-weight: 700 

.share-list
  margin-top: 15px
  text-align: center

.share-list li
  margin-left: 45px
  display: inline-block

.share-list li:nth-child(1)
  margin-left: 0px

.share-list li:nth-child(1) i,.share-list li:nth-child(8) i
  color: #1296DB
  cursor: pointer

.share-list li:nth-child(2) i
  color: #000000

.share-list li:nth-child(3) i
  color: #1AB2E8

.share-list li:nth-child(4) i
  color: #02BB0E

.share-list li:nth-child(5) i 
  color: #3A99CE

.share-list li:nth-child(6) a img 
  width: 25px
  height: 25px
  display: inline-block
  vertical-align: middle

.share-list li:nth-child(7) i 
  color: #ffbf00

.share-list li:nth-child(4):hover .wechat-inner
  opacity: 1
  transform: translate3d(0,0,0)

.wechat-inner
  margin-top: 27px
  margin-left: -50px 
  width: 131px
  height: 131px
  padding: 8px
  opacity: 0
  position: absolute
  background-color: rgba(0,0,0,.5)
  border-radius: 8px
  transform: translate3d(0,50px,0)
  -webkit-transform: translate3d(0,50px,0)  
  animation: transform,opacity .7 ease 
  -webkit-animation: transform,opacity .7 ease 
  -moz-animation: transform,opacity .7 ease 
  -o-animation: transform,opacity .7 ease 
  -ms-animation: transform,opacity .7 ease 

.wechat-inner:before 
  content: ''
  position: absolute
  margin-top: -38px
  margin-left: 40px
  border-width: 15px
  border-style: solid
  border-color: transparent transparent rgba(0,0,0,.5) transparent


.wechat-inner img 
  width: 115px
  height: auto

@keyframes typing 
  from 
    width: 0

@media screen and (max-width:960px)
  .header-container
    display: none
</style>
