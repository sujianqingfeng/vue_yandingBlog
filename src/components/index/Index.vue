<template>
  <div class="blog-containert">

    <div class="blog-head-warpper">

      <md-button @click="menuVisible=true" class="md-icon-button blog-head-icon">
        <md-icon class="menu">menu</md-icon>
      </md-button>

    </div>

    <navbar :show.sync='menuVisible' :info='info' :user='user' :categorys='categorys' />

    <div class="blog-content-warpper">
      <div class="blog-content md-layout md-gutter" v-show="showHeader">
        <div class="md-layout-item  md-size-65 md-smail-size-100 md-xsmall-size-100">
          <user-info :info='info' />
        </div>
        <div class="md-layout-item md-size-35 md-smail-size-100 md-xsmall-size-100">
          <user-oper :info='info' />
        </div>
      </div>

      <div class="blog-item-content md-layout md-gutter">

        <div class="md-layout-item ">

          <blog-item v-for="item in list" :key='item.id' :info='info' :item='item' />

        </div>
      </div>

      <div class="blog-pagination md-layout md-gutter">
        <div class="md-layout-item">
          <blog-pagination :page='page' :preShow='hasPre' :nextShow='hasNext' @nextPerform='nextPerform' @prePerform='prePerform'/>
        </div>
      </div>

    </div>

    <div class="blog-footer md-padding md-alignment-center-center">
      <div class="md-layout-item ">
        <blog-footer/>
      </div>
    </div>

  </div>
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
      this.getBlogList({id, page})
    },
    prePerform () {
      const id = this.$route.params.id
      const page = this.page - 1
      this.page = page
      this.getBlogList({id, page})
    }
  },
  created () {
    const id = this.$route.params.id
    this.getBlogList({id: id, page: this.page})
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
  max-width: 900px;
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

