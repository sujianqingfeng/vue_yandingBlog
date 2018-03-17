<template>
  <md-card class="info-container">
   
    <div class="info-header md-padding md-layout md-alignment-bottom-left">
       <h2 class="info-text md-title ">问世间情为何物，直教人生死相许</h2>
    </div>
   

    <div class="md-layout  info-footer md-padding">
      <div class="md-layout-item">
          <md-avatar>
            <img :src="avatar" alt="Avatar">
          </md-avatar>
          <span class="info-footer-text md-margin">素笺淡墨染流年</span>
      </div>
    </div>


  </md-card>
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
.info-header {
  height: 300px;
  background-image: url("test.png");
}

.info-text{
  color: white
}

.info-footer-text{
  color: gray;
}

</style>

