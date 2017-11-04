<template>
  <md-layout md-column class="yd-blog">
    <md-toolbar class="md-transparent menu-color ">
        <md-button class="md-icon-button menu-color">
            <md-icon>arrow_back</md-icon>
        </md-button>

    </md-toolbar>

    <md-layout md-column class="content">
      <md-layout  class="blog-header">
        <span class="blog-title md-title menu-color">dfjdkfj</span>
      </md-layout>

      
        <md-layout  md-align="start" class="blog-content-header">
         
          
           <md-avatar class="md-avatar-icon md-accent md-margin">
             <md-icon>favorite</md-icon>
            </md-avatar>

             
            <span>素笺清风染流年</span>
        </md-layout>


        <md-layout class="blog-content md-padding">

          我是一只小小鸟，小呀小小鸟！！！

        </md-layout>

        <md-layout class="md-padding-10 button-warpper">

         <md-layout class="pre-button">
            <md-button class="md-icon-button menu-color">
             <md-icon >arrow_back</md-icon>
            </md-button>
             
           
         </md-layout>
         <md-layout class="next-button">
            <md-button class="md-icon-button menu-color">
              <md-icon  >arrow_forward</md-icon>
            </md-button>
           
         </md-layout>

        </md-layout>



    </md-layout>
  </md-layout>
</template>

<script>
export default {
  name: '',
  data () {
    return {}
  }
}
</script>


<style scoped>
.blog-header {
  height: 200px;
  background-image: url("timg22.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  align-items: flex-end;
}

.blog-title {
  padding: 18px;
}

.blog-content-header {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  background-color: white;
  align-items: center;
}

.blog-content {
  margin-top: 1px;
  background-color: white;
  height: 1200px;
}

.button-warpper {
  display: flex;
}

.pre-button {
  flex:1;
}
.next-button {
  flex:1;
  display: flex;
  justify-content: flex-end;

}
</style>
