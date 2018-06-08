<template lang='pug'>
    v-app
        v-content
            v-container.blog-container
                v-card
                    v-layout.blog-header-height.blog-header-bg.display-1(d-flex,align-end,px-3,py-3)
                        span.introduce-title 项目介绍
                    v-layout(px-3,py-3,column) 
                        p.title 本着没事干，练手的原因，加之写到中途，又舍不得放弃，这个项目就应运而生了。
                        p.title.mt-2 这个项目的定位就是做一个个人博客。
                        p.title.mt-2 项目包括两个方面，一是django 后端接口，二是前端展示页面。
                        p.title.mt-2 项目地址:
                        p.title.mt-2
                            a(href='https://github.com/sujianqingfeng/vue_yandingBlog') https://github.com/sujianqingfeng/vue_yandingBlog
                        p.title.mt-2
                            a(href='https://github.com/sujianqingfeng/django_yandingBlog') https://github.com/sujianqingfeng/django_yandingBlog
                        p.title.mt-2 项目使用者：
                        p.title.mt-2 
                            a(href='/home/1') 素笺



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
