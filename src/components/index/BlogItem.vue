<template>
  <div class="blog">
            <div class="blog-header">
              <span class="blog-title md-title">{{title}}</span>
            </div>
         <p class="blog-content">{{content}}</p>

         <div class="bolg-footer">
            <md-avatar class="md-avatar-icon avatar">
              <md-icon>home</md-icon>
            </md-avatar>
            <span>{{time}}</span>
         </div>
         
        </div>
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
  background-color: #bdbdbd;
}
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
