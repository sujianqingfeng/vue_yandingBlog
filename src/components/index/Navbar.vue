<template>
  <md-drawer :md-active.sync="showNavigation">

    <div class="drawer-header md-layout md-alignment-center">
      <md-button to='editUser' class="md-fab">
        <md-avatar class="md-large">
          <img :src="avatar" alt="Avatar">
        </md-avatar>
      </md-button>

    </div>

    <md-list>

      <md-list-item to="/yanding">
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

      <md-list-item :to="'about/'+info.id">
        <md-icon>account_circle</md-icon>
        <span class="md-list-item-text">关于我</span>
      </md-list-item>

      <md-list-item to="friend">
        <md-icon class="fa fa-link"></md-icon>
        <span class="md-list-item-text">友情链接</span>
      </md-list-item>

      <md-list-item to="edit">
        <md-icon class="fa fa-link"></md-icon>
        <span class="md-list-item-text">编辑</span>
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
    info: Object
  },
  data () {
    return {
      avatar: require('./avatar.jpg'),
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
</style>
