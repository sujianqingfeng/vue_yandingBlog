<template>
    <div class="blog-containert">

        <div class="friend-header">

        </div>

        <div class="friend-container">
            <div class="md-layout md-gutter">

                <div class="md-layout-item md-size-33 md-smail-size-50 md-xsmall-size-100">
                    <friend-item></friend-item>
                </div>

                <div class="md-layout-item md-size-33 md-smail-size-50 md-xsmall-size-100">
                    <friend-item></friend-item>
                </div>

                <div class="md-layout-item md-size-33 md-smail-size-50 md-xsmall-size-100">
                    <friend-item></friend-item>
                </div>

            </div>
        </div>

        <div class="blog-footer md-padding md-alignment-center-center">
            <div class="md-layout-item ">
                <blog-footer/>
            </div>
        </div>

    </div>

</template>

<script>
import FriendItem from './FriendItem'
import BlogFooter from 'components/index/BlogFooter'

export default {
  name: 'friend',
  components: {
    FriendItem,
    BlogFooter
  }
}
</script>

<style>
.friend-container {
  max-width: 900px;
  margin: 0 auto;
}

.friend-header {
  height: 100px;
}
</style>
