<template>

  <v-app app>
    <v-toolbar app absolute color="transparent" flat scroll-off-screen>
      <v-btn icon @click.native="drawerConfig.show=!drawerConfig.show">
        <v-icon>menu</v-icon>
      </v-btn>
    </v-toolbar>


     <v-navigation-drawer
      temporary
      v-model="drawerConfig.show"
      absolute>
      <admin-nav />
     </v-navigation-drawer>


      <v-content>
        <router-view/>
      </v-content>
 
</v-app>
  
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


<style scoped>

</style>


