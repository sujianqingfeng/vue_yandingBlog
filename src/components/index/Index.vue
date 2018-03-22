<template>
  <div class="page-container">

    <div class="blog-header md-layout ">
      <md-button @click="menuVisible=true" class="md-icon-button">
        <md-icon class="menu">menu</md-icon>
      </md-button>

    </div>

    <md-drawer :md-active.sync="menuVisible">

      <div class="drawer-header md-layout">

        <md-avatar>
          <img :src="avatar" alt="Avatar">
        </md-avatar>

      </div>

      <md-list>

        <md-list-item>
          <md-icon>home</md-icon>
          <span class="md-list-item-text">主页</span>
        </md-list-item>

        <md-list-item md-expand :md-expanded.sync="expandNews">
          <md-icon>library_books</md-icon>
          <span class="md-list-item-text">类别</span>

          <md-list slot="md-expand">
            <md-list-item class="md-inset">World</md-list-item>
            <md-list-item class="md-inset">Europe</md-list-item>
            <md-list-item class="md-inset">South America</md-list-item>
          </md-list>
        </md-list-item>

         <md-list-item>
          <md-icon>account_circle</md-icon>
          <span class="md-list-item-text">关于我</span>
        </md-list-item>

         <md-list-item  to="friend">
          <md-icon class="fa fa-link"></md-icon>
          <span class="md-list-item-text">友情链接</span>
        </md-list-item>

       

      </md-list>
    </md-drawer>

    <div class="blog-content  md-layout md-gutter">
      <div class="md-layout-item md-size-70">
        <user-info/>
      </div>
      <div class="md-layout-item md-size-30">
        <user-oper/>
      </div>
    </div>

    <div class="blog-item-content md-layout md-gutter">

      <div class="md-layout-item ">
        <blog-item/>
        <blog-item/>
        <blog-item/>
      </div>
    </div>

    <div class="blog-pagination md-layout md-gutter">
      <div class="md-layout-item">
        <blog-pagination/>
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
      expandNews: []
    }
  },
  computed: {
    ...mapGetters({
      list: 'list'
    })
  },
  methods: {
    ...mapActions([
      'getBlogList'
    ]),
    homeClick: () => {
      this.menuVisible = !this.menuVisible
    }
  },
  created () {
    this.getBlogList(11)
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
.page-container {
  display: flex;
  flex-direction: column;
  align-items: center;
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
  background-image: url("test.png");
}

.blog-content {
  width: 65%;
}

.blog-item-content {
  width: 65%;
  margin-top: 25px;
}

.blog-pagination {
  width: 65%;
}

.blog-footer {
  margin-top: 100px;
  width: 100%;
  background-color: white;
}
</style>

