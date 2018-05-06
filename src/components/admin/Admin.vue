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
      <navbar :categorys='categorys' :user='user' :info='info'/>
     </v-navigation-drawer>
</v-app>
  
</template>

<script>
export default {
  name: 'admin',
  data: () => ({
    drawerConfig: {
      show: false
    }
  })
}
</script>

