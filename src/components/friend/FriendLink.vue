<template>
    <div class="page-container">

        <div class="friend">
            
            <div class="friend-header">

            </div>

            <div class="md-layout md-gutter">

                <div class="md-layout-item md-size-25">
                    <friend-item></friend-item>
                </div>

                <div class="md-layout-item md-size-25">
                    <friend-item></friend-item>
                </div>

                <div class="md-layout-item md-size-25">
                    <friend-item></friend-item>
                </div>

                <div class="md-layout-item md-size-25">
                    <friend-item></friend-item>
                </div>

            </div>
        </div>

    </div>

</template>

<script>
import FriendItem from './FriendItem'

export default {
  name: 'friend',
  components: {
    FriendItem
  }
}
</script>

<style>
.friend {
 width: 65%;
  display: flex;
  margin: auto;
  flex-direction: column;
}

.friend-container {
}

.friend-header {
  height: 100px;
}

</style>
