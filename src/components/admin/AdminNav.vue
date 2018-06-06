<template>

  <v-container px-0 py-0>

    <v-layout column>

      <v-flex align-center justify-center class="blog-header-bg" py-4>

        <v-avatar :size="100">
          <img  :src="user.icon" alt="avatar">
        </v-avatar>
      </v-flex>

      <v-flex>

        <v-list>
    
          <v-list-tile @click="$router.push('/admin/')">
            <v-list-tile-action>
              <v-icon >sentiment_very_satisfied</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>首页</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>


          <v-list-tile @click="$router.push({name:'adminUser'})">
            <v-list-tile-action>
              <v-icon >settings_input_svideo</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>信息管理</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>



          <v-list-tile   @click="$router.push({name:'adminBlog'})">
            <v-list-tile-action>
              <v-icon>ac_unit</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>博客管理</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>


          <v-list-tile  @click="$router.push({name:'adminCategory'})">
            <v-list-tile-action>
              <v-icon >spa</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>类别管理</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>



          <v-list-tile  @click="$router.push({name:'adminLink'})">
            <v-list-tile-action>
              <v-icon>opacity</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>友链管理</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>

           <v-list-tile  @click="$router.push({name:'adminAbout'})">
            <v-list-tile-action>
              <v-icon>create</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>关于管理</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>

        </v-list>
      </v-flex>

    </v-layout>

  </v-container>

</template>

<script>
export default {
  name: 'Navbar',
  props: {
    user: Object
  },
  data () {
    return {

      expandNews: []

    }
  },
  computed: {
    showNavigation: {
      get: function () {
        return this.show
      },
      set: function (v) {
        this.$emit('update:show', v)
      }
    }
  },
  methods: {}
}
</script>


<style scoped>
.avatar {
  display: block;
  margin: 20px auto 15px;
}

.avatar-style {
  height: 120px;
  width: 120px;
  border-radius: 60px;
}
</style>
