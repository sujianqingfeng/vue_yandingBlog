<template lang='pug'>

  v-app(app)
    v-toolbar(app,absolute,flat,scroll-off-screen,color="transparent")
      v-btn(icon,@click.native="drawerConfig.show=!drawerConfig.show")
        v-icon menu

    v-navigation-drawer(temporary,absolute,v-model="drawerConfig.show")
      admin-nav

    v-content
      transition(name='fade-transverse')
        router-view 

</template>


<script>
import AdminNav from './AdminNav'
export default {
  name: 'admin',
  data: () => ({
    drawerConfig: {
      show: false
    }
  }),
  components: {
    AdminNav
  }
}
</script>


<style scoped  lang='stylus'>
@import '~@/assets/css/vue_transition.styl';
</style>


