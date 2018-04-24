<template>
  <md-card class="info-container">
   
    <div class="info-header md-padding md-layout md-alignment-bottom-left" :style="header">
       <h2 class="info-text md-title ">{{info.desc}}</h2>
    </div>
   

    <div class="md-layout  info-footer md-padding">
      <div class="md-layout-item">
          <md-avatar>
            <img :src="avatar" alt="Avatar">
          </md-avatar>
          <span class="info-footer-text md-margin">{{info.username}}</span>
      </div>
    </div>


  </md-card>
</template>



<script>
export default {
  name: 'userInfo',
  props: {
    info: Object
  },
  data: () => ({
    avatar: require('./avatar.jpg'),
    header: {
      backgroundImage:
        'url(' + require('../../assets/imgs/blog_header_bg.jpg') + ')'
    }
  })
}
</script>

<style >
.info-header {
  height: 300px;
  /* background-image: url("test.png"); */
}

.info-text{
  color: white
}

.info-footer-text{
  color: gray;
}

</style>

