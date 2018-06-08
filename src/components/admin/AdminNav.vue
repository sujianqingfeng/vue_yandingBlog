


<template lang="pug">
v-container(px-0,py-0)
  v-layout(column)
    v-flex.blog-header-bg(align-center,justify-center,py-4)
      v-avatar(:size="100")
        img(:src="user.icon",alt="avatar")
 
    v-flex
      v-list
        v-list-tile(@click="$router.push('/admin/')")
          v-list-tile-action
            v-icon sentiment_very_satisfied
          v-list-tile-content
            v-list-tile-title 首页
        
        v-list-tile(@click="$router.push({name:'adminUser'})")
          v-list-tile-action
            v-icon settings_input_svideo
          v-list-tile-content
            v-list-tile-title 信息管理

        v-list-tile(@click="$router.push({name:'adminBlog'})")
          v-list-tile-action
            v-icon ac_unit
          v-list-tile-content
            v-list-tile-title 博客管理
        
        v-list-tile(@click="$router.push({name:'adminSummary'})")
          v-list-tile-action
            v-icon opacity
          v-list-tile-content
            v-list-tile-title 摘要图管理

        v-list-tile(@click="$router.push({name:'adminCategory'})")
          v-list-tile-action
            v-icon spa
          v-list-tile-content
            v-list-tile-title 类别管理

        v-list-tile(@click="$router.push({name:'adminLink'})")
          v-list-tile-action
            v-icon opacity
          v-list-tile-content
            v-list-tile-title 友链管理
        
        v-list-tile(@click="$router.push({name:'adminAbout'})")
          v-list-tile-action
            v-icon create
          v-list-tile-content
            v-list-tile-title 关于管理

        
       
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
