<template>
  <md-drawer :md-active.sync="showNavigation">

    <div class="drawer-header md-layout md-alignment-center" :style="header">

      <router-link :to="user ? '/editUser' : '/login'">
        <img :src="info.icon?info.icon:avatar" alt="Avatar" class="avatar-style">
      
      </router-link>

    </div>

    <md-list>

      <md-list-item :to="'/home/'+info.id">
        <md-icon>home</md-icon>
        <span class="md-list-item-text">主页</span>
      </md-list-item>

      <md-list-item md-expand :md-expanded.sync="expandNews">
        <md-icon>library_books</md-icon>
        <span class="md-list-item-text">类别</span>

        <md-list slot="md-expand">
          <md-list-item class="md-inset">所有</md-list-item>
          <md-list-item v-for="item in categorys" :key='item.id' class="md-inset">{{item.name}}</md-list-item>
        </md-list>
      </md-list-item>

      <md-list-item :to="'about/'+info.id">
        <md-icon>account_circle</md-icon>
        <span class="md-list-item-text">关于我</span>
      </md-list-item>

      <md-list-item to="/friend">
        <md-icon class="fa fa-link"></md-icon>
        <span class="md-list-item-text">友情链接</span>
      </md-list-item>

      <md-list-item v-show="user.id === info.id" to="/editBlog">
        <md-icon >create</md-icon>
        <span class="md-list-item-text">写博客</span>
      </md-list-item>

    </md-list>
  </md-drawer>

</template>

<script>
export default {
  name: 'Navbar',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    info: Object,
    user: Object,
    categorys: Array
  },
  data () {
    return {
      avatar: require('./avatar.jpg'),
      expandNews: [],
      header: {
        backgroundImage:
          'url(' + require('../../assets/imgs/blog_header_bg.jpg') + ')'
      }
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
