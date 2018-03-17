<template>
    <div class="md-layout ">

        <div class="md-layout-item md-layout md-alignment-center-left">
            <md-button class="md-icon-button md-raised">
                <md-icon>arrow_back</md-icon>
            </md-button>
        </div>

        <div class="md-layout-item md-layout md-alignment-center-center">
            1
        </div>

        <div class="md-layout-item  md-layout md-alignment-center-right">
            <md-button class="md-icon-button md-raised">
                <md-icon>arrow_forward</md-icon>
            </md-button>
        </div>
        
    </div>
</template>



<script>
export default {
  name: 'userInfo',
  data: () => ({
    avatar: require('./avatar.jpg')
  })
}
</script>

<style >
.blog-pagination{
    margin-top: 10px
}
</style>

