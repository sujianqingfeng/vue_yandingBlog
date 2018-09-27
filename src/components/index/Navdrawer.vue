<template lang='pug'>
  v-navigation-drawer(absolute temporary v-model="drawer" @input="drawerInput")
    div.m-author
      img(src='@/assets/imgs/author.png')
    div.m-name 
      p my master
    div.m-share
      p
        a(href="https://twitter.com/5wHHx3QAsNNxhYd?lang=zh-tw" target="_blank")
          i.fa.fa-twitter 
        a(href="https://github.com/LingHanChuJian" target="_blank")
          i.fa.fa-github
        a(href="mailto:linghanchujian@gmail.com" target="_blank")
          i.fa.fa-envelope
        a(href="tencent://message/?uin=2739069093&Site=凌寒初见&Menu=yes" target="_blank")
          i.fa.fa-qq
    div.m-search
      v-text-field(label="search..." append-icon="search" v-model="searchValue" @keyup.enter="search")
    div.m-mune
      v-list.pt-0
        v-list-tile(@click="")
          v-list-tile-action
            v-icon home
          v-list-tile-content
            v-list-tile-title 首页
        v-list-tile(@click="")
          v-list-tile-action
            v-icon loyalty
          v-list-tile-content
            v-list-tile-title 归档
        v-list-tile(@click="")
          v-list-tile-action
            v-icon link
          v-list-tile-content
            v-list-tile-title 友人帐
        v-list-tile(@click="")
          v-list-tile-action
            v-icon restaurant
          v-list-tile-content
            v-list-tile-title 投食
        v-list-tile(@click="")
          v-list-tile-action
            v-icon near_me
          v-list-tile-content
            v-list-tile-title 关于
    p.m-footer &copy; 2018 · yandingblog
</template>
<script>
export default {
  name: 'navDrawer',
  data: () => ({
    searchValue: ''
  }),
  methods: {
    drawerInput (update) {
      this.$store.dispatch('setDrawer', update)
    },
    search () {
      // 跳转到搜索vue 并且传参
      console.log(`search: ${this.searchValue}`)
    }
  },
  computed: {
    drawer: {
      get () {
        return this.$store.state.miscellaneous.drawer
      },
      set () {}
    }
  }
}
</script>

<style scoped lang='stylus'>
.m-author
  width: 100%
  height: auto
  text-align: center
  padding: 30px 0 20px 0
 
.m-author img
  width: 120px
  height: 120px
  min-width: 120px
  border-radius: 100% 

.m-name
  width: 100%
  text-align: center

.m-name p
  font-family: 'Ubuntu', sans-serif
  font-weight: bold
  letter-spacing: 1.5px 

.m-share
  margin-top: 24px

.m-share p
  padding-left: 20px
  text-align: center
  letter-spacing: 20px

.m-share p a:nth-child(1)
  color: #00aced

.m-share p a:nth-child(2)
  color: #000

.m-share p a:nth-child(3)
  color: #ffbf00

.m-share p a:nth-child(4)
  color: #3A99CE

.m-search
  width: 100%
  height: auto
  padding: 10px 30px 

.list__tile
  padding: 0 32px !important

.m-footer
  font-size: 14px
  color: #b9b9b9
  text-align: center
</style>


