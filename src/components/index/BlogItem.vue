<template>
  <md-card class="blog-item">

    <md-card-header class="blog-item-header md-padding md-layout md-alignment-bottom-left">
      <span class="md-title">花开堪折直须折，莫待无花空折枝</span>
    </md-card-header>

    <div class="md-padding  md-layout md-alignment-center-left">
      <span> 人生若只如初见，何事秋风悲画扇</span>
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
            <span class="blog-item-footer-text">素笺淡墨染流年</span>
          </p>
          <span class="blog-item-footer-text">2018/3/17 6666</span>
        </div>

      </div>

      <div class="md-layout-item md-layout md-alignment-center-right">
        <p class="blog-item-category-text">文字分类</p>
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
    img_url: String
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
</style>
