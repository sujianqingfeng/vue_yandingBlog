<template lang="pug">
    v-container 
        v-tabs(slider-color="black")
            v-tab(ripple) 回复    
            v-tab(ripple) 预览
            v-tab-item
                v-text-field(textarea,label='评论内容',color='grey',v-model='reply',rows=5)
            v-tab-item
                v-container.display.markdown-body(v-html='reply?$md2html(reply):"没有评论内容"')
        v-layout
            v-flex(d-flex,align-center)
                span.caption 支持markdown语法
            v-btn(color='info',@click='submit') 发表
</template>

<script>

export default {
  name: 'review-reply',
  props: {

  },
  data: () => ({
    reply: '',
    md2htmlstr: ''
  }),
  methods: {
    submit () {
      this.$emit('reply', this.reply)
    }
  }
}
</script>



<style lang="stylus" scoped>
.display 
    height 200px
    overflow-y auto

</style>



