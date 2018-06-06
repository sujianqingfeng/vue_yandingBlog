<template lang='pug'>

  v-app(app)
    v-toolbar(app,absolute,flat,scroll-off-screen,color="transparent")
      v-btn(icon,@click.native="drawerConfig.show=!drawerConfig.show")
        v-icon menu

    v-navigation-drawer(temporary,absolute,v-model="drawerConfig.show")
      admin-nav(:user='userInfo')

    v-content
      transition(name='fade-transverse')
        router-view(:user='userInfo')

</template>


<script>
import {mapActions} from 'vuex'
import AdminNav from './AdminNav'
export default {
  name: 'admin',
  data: () => ({
    drawerConfig: {
      show: false
    },
    userInfo: {
      icon: ''
    }
  }),
  components: {
    AdminNav
  },
  methods: {
    ...mapActions(['getMyInfo'])
  },
  created () {
    this.getMyInfo().then(res => {
      this.userInfo = res.data
    })
  }
}
</script>


<style scoped  lang='stylus'>
@import '~@/assets/css/vue_transition.styl';
</style>


