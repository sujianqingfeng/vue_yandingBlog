<template>

    <div class="md-layout md-alignment-center-center blog-footer-warpper md-gutter">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        
        <div class="md-layout-item md-layout md-alignment-center-center md-size-10 md-medium-size-20  md-smail-size-100 md-xsmall-size-100">
            <md-button class="md-icon-button md-dense font-color">
                <md-icon class="fa fa-github"></md-icon>
            </md-button>

            <md-button class="md-icon-button md-dense font-color">
                 <md-icon class="fa fa-link"></md-icon>
            </md-button>

        </div>

        <div class="md-layout-item md-layout md-alignment-center-center md-size-80 md-medium-size-60 md-smail-size-100 md-xsmall-size-100">
            Copyright © 2018 YanDing's Blog
        </div>

        <div class="md-layout-item  md-layout md-alignment-center-center md-size-10 md-medium-size-20 md-smail-size-100 md-xsmall-size-100">
            Powered by Sujian
        </div>

    </div>
</template>



<script>
export default {
  name: 'userInfo',
  data: () => ({
    avatar: require('./avatar.jpg'),
    jianshu: require('../../assets/img/jianshu.svg')
  })
}
</script>

<style >
.blog-footer-warpper {
  height: 100px;
}

.font-color{
    color: grey
}
</style>

