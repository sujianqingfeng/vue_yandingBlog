<template>

  <v-container px-0 py-0>

    <v-layout column>

      <v-flex align-center justify-center class="blog-header-bg" py-4>

        <v-avatar :size="100">
          <img  src="~assets/imgs/avatar.jpg" alt="avatar">
        </v-avatar>

      </v-flex>

      <v-flex>

        <v-list>
          <v-list-tile>
            <v-list-tile-action>
              <v-icon>home</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>首页</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>

 

          <v-list-group prepend-icon="library_books" no-action>

            <v-list-tile slot="activator">
             
              <v-list-tile-content>
                <v-list-tile-title>类别</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>

            <v-list-tile v-for="item in categorys" :key="item.id">

              <v-list-tile-content>
                <v-list-tile-title>{{item.name}}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>

          </v-list-group>

  

          <v-list-tile @click="$router.push('/about/'+info.id)">
            <v-list-tile-action>
              <v-icon>account_circle</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>关于</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>

          

          <v-list-tile @click="$router.push('/friend/'+info.id)">
            <v-list-tile-action>
              <v-icon>link</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>友链</v-list-tile-title>
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
    info: Object,
    user: Object,
    categorys: Array
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
