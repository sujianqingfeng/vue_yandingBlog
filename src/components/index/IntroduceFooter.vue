<template lang='pug'>
    v-container(py-0)
        v-layout(align-center)
            v-flex(xl12,xm12,md3)
                v-btn(icon)
                    v-icon mdi-github-circle
                v-btn(icon)
                    v-icon mdi-email-outline
                v-btn(icon)
                    v-icon mdi-qqchat
                v-btn(icon)
                    v-icon mdi-link-variant
            v-flex(d-flex,justify-center,xl12,xm12,md6) Copyright  2018 YanDing's Blog
            v-flex(xl12,xm12,md3) 
                v-layout(column,align-end)
                    v-flex Powered by Sujian
                    v-flex(d-flex,align-center)
                        span 托管于
                        img.youpaiyun(src='~assets/imgs/youpaiyun.svg')
                        
                        
</template>

<script>
export default {
  name: 'introduce-footer',
  data: () => ({

  })
}
</script>

<style scoped lang='stylus'>
    .youpaiyun
        width 60px
        height 40px
 
</style>

