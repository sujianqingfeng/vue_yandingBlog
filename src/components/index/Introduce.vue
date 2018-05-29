<template lang='pug'>
    v-app
        v-content
            v-container.blog-container
                v-card
                    v-layout.blog-header-height.blog-header-bg.display-1(d-flex,align-end,px-3,py-3)
                        span.introduce-title 项目介绍
                    v-layout(px-3,py-3) 本着没事干，练手的原因，加之写到中途，又舍不得放弃，这个项目就应运而生了。
                    v-layout(px-3,py-3) 然后...
                    v-layout(px-3,py-3) 然后...
                    v-layout(px-3,py-3) 不知道怎么写了
        v-footer(height="180px") 
            Footer

</template>
<script>

import Footer from './IntroduceFooter'
export default {
  name: 'introduce',
  data: () => ({

  }),
  components: {
    Footer
  }
}
</script>

<style scoped lang='stylus'>
.introduce-title
    color: white;

</style>
