<template>

  <v-app app>
    <v-toolbar app absolute color="transparent" flat scroll-off-screen>
      <v-btn icon @click.native="ll">
        <v-icon>menu</v-icon>
      </v-btn>

    </v-toolbar>
    <v-content class="blog-content-warpper">
      <v-container fluid>
        <v-layout class="blog-header" offset-md1>
          
          <v-flex xs12 md8 mr-3>
            <user-info/>
          </v-flex>
           <v-flex xs12 md4>
             <user-oper/>
           </v-flex>
        </v-layout>
      </v-container>
    </v-content>

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
  data () {
    return {
      menuVisible: false,
      avatar: require('./avatar.jpg'),
      expandNews: [],
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
      'showHeader',
      'user'
    ])
  },
  methods: {
    ...mapActions(['getBlogList', 'getUser', 'getCategory']),
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
    const id = this.$route.params.id
    this.getBlogList({ id: id, page: this.page })
    this.getUser(id)
    this.getCategory(id)
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
.blog-containert {
  width: 100%;
  height: 100%;
}

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

.blog-content-warpper {
  width: 900px;
  margin: 0 auto;
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

