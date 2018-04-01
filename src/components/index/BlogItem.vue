<template>
  <md-card class="blog-item">

    <md-card-header class="blog-item-header md-padding md-layout md-alignment-bottom-left">
      <span class="md-title">{{item.title}}</span>
    </md-card-header>

    <div class="md-padding  md-layout md-alignment-center-left">
      <span>{{item.content}}</span>
      <md-button to="/detail/dddd" class="md-primary">阅读更多</md-button>
    </div>

    <div class="md-padding md-layout blog-item-footer md-alignment-center-left">
      <div class="md-layout-item md-layout md-gutter">

        <div class="md-layout-item md-size-10   md-smail-size-15 md-xsmall-size-20">
          <md-avatar>
            <img :src="avatar" alt="Avatar">
          </md-avatar>
        </div>

        <div class="md-layout-item md-size-70  md-smail-size-85 md-xsmall-size-80 blog-item-footer-text-warpper">
          <p>
            <span class="blog-item-footer-text">{{info.username}}</span>
          </p>
          <span class="blog-item-footer-text">{{item.add_time}}
            <span class="blog-item-footer-view">{{item.num+' view'}}</span>
          </span>
        </div>

      </div>

      <div class="md-layout-item md-layout md-alignment-center-right">
        <p class="blog-item-category-text">{{item.category.name}}</p>
      </div>
    </div>

  </md-card>
</template>
<script>
export default {
  name: 'BlogItem',
  data: () => ({
    avatar: require('./avatar.jpg')
  }),
  props: {
    title: String,
    time: String,
    content: String,
    img_url: String,
    item: Object,
    info: Object
  }
}
</script>


<style scoped>
.blog-item {
  margin-top: 20px;
}

.blog-item-header {
  height: 250px;
  background-image: url("test.png");
  color: white;
}

.blog-item-footer {
  border-top-width: 1px;
  border-top-color: grey;
  border-style: solid;
}

.blog-item-footer-text-warpper {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.blog-item-footer-text {
  color: gray;
  margin-left: 12px;
  padding: 4px;
}

.blog-item-category-text {
  color: "#607D8B";
}

.blog-item-footer-view{
  margin-left: 16px
}
</style>
