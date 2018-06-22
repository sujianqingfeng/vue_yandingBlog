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
      <navbar :categorys='categorys' :user='user'/>
     </v-navigation-drawer>

    <v-content class="blog-container">
      <v-container fluid>
        <v-layout column>
          <v-flex v-show="showHeader">
            <v-layout>

              <v-flex xs12 md8 mr-3>
                <user-info :info='user'/>
              </v-flex>
              <v-flex xs12 md4>
                <user-oper :info='user'/>
              </v-flex>
            </v-layout>

          </v-flex>

          <v-flex>
            <blog-item v-for="item in list" :key="item.id" :blog='item'/>
          </v-flex>

          <v-flex mt-3>
            <blog-pagination :page='page' :preShow='hasPre' :nextShow='hasNext' @nextPerform='nextPerform' @prePerform='prePerform'/>
          </v-flex>

        </v-layout>

      </v-container>
    </v-content>

    <v-footer height="180px">
      <blog-footer :info='info'/>
    </v-footer>

  </v-app>
</template>



<script>
import UserInfo from './UserInfo'
import UserOper from './UserOper'
import BlogItem from './BlogItem'
import BlogPagination from './BlogPagination'
import BlogFooter from './BlogFooter'
import Navbar from './Navbar'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'index',
  props: {
    user: Object
  },
  data () {
    return {
      drawerConfig: {
        show: false
      },
      page: 1
    }
  },
  computed: {
    ...mapGetters([
      'list',
      'info',
      'categorys',
      'hasNext',
      'hasPre',
      'showHeader'
    ])
  },
  methods: {
    ...mapActions(['getBlogsByName', 'getCategorysByName']),
    homeClick: () => {
      this.menuVisible = !this.menuVisible
    },
    nextPerform () {
      const id = this.$route.params.id
      const page = this.page + 1
      this.page = page
      this.getBlogList({ id, page })
    },
    prePerform () {
      const id = this.$route.params.id
      const page = this.page - 1
      this.page = page
      this.getBlogList({ id, page })
    }
  },
  created () {
    const name = this.$route.params.name

    this.getBlogsByName({ name: name, page: this.page })
    this.getCategorysByName(name)
  },
  components: {
    UserInfo,
    UserOper,
    BlogItem,
    BlogPagination,
    BlogFooter,
    Navbar
  }
}
</script>

<style >

.blog-header {
  width: 100%;
  height: 200px;
}
.menu {
  margin: 16px;
}

.drawer-header {
  height: 200px;
  /* background-image: url("test.png"); */
}


.blog-content {
  width: 100%;
}

.blog-item-content {
  max-width: 900px;
  margin-top: 25px;
}

.blog-pagination {
  margin-top: 70px;
  max-width: 900px;
}

.blog-footer {
  margin-top: 100px;
  width: 100%;
  background-color: white;
}
</style>

