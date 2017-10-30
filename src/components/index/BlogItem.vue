<template>
  <md-layout class="blog"  md-column md-gutter>
      <md-layout md-flex='50' class="blog-header">
        <span class="blog-title md-title">{{title}}</span>
      </md-layout>

      <md-layout md-flex='30'>
        <p class="blog-content">{{content}}</p>
      </md-layout>
      
      <md-layout class="bolg-footer" md-vertical-align="center">
        <md-avatar class="md-avatar-icon avatar">
          <md-icon>home</md-icon>
        </md-avatar>
        <span>{{time}}</span>
      </md-layout>
  </md-layout>
</template>
<script>
export default {
  name: 'BlogItem',
  data () {
    return {

    }
  },
  props: {
    title: String,
    time: String,
    content: String,
    img_url: String
  }
}
</script>


<style scoped>
.blog {
  display: flex;
  flex-direction: column;
  height: 350px;
}
.blog-header {
  background-image: url("timg22.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  align-items: flex-end;
}
.blog-title {
  color: white;
  margin-left: 20px;
  margin-bottom: 20px;
}

.blog-content {
  flex: 1;
  background-color: white;
  display: flex;
  align-items: center;
  padding-left: 20px
}

.bolg-footer {
  background-color: white;
  margin-top: 1px;
}

.avatar {
  margin-left: 20px;
  margin-top: 8px;
  margin-bottom: 8px
}

</style>
