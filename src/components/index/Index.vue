<template>
  <div class="page-container">
    
    <div class="blog-header md-layout ">
        <md-icon class="menu">menu</md-icon>
    </div>


    <div class="blog-content  md-layout md-gutter">
      <div class="md-layout-item md-size-65">
        <user-info></user-info>
      </div>
      <div class="md-layout-item md-size-25">
          <user-oper/>
      </div>
    </div>

   
  </div>
</template>



<script>
import UserInfo from './UserInfo'
import UserOper from './UserOper'

export default {
  name: 'index',
  data: () => ({
    menuVisible: false
  }),
  components: {
    UserInfo,
    UserOper
  }
}
</script>

<style >

.page-container{
  display: flex;
  flex-direction: column;
  align-items: center
}

.blog-header {
  width: 100%;
  height: 200px;
}
.menu {
  margin: 16px;
}

.blog-content {
  width: 65%;
  margin: 10px auto
}
</style>

