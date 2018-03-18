<template>

    <md-content class="md-elevation-2 md-layout  friend-item">

        <div class="friend-item-img">
            <img :src="avatar" alt="Avatar">
        </div>

        <div class="friend-text-warrper ">

            <div class="friend-name md-title">
                最是人间留不住
            </div>
          
           <div class="md-subheading">
                朱颜辞镜花辞树
            </div>
        </div>

    </md-content>

</template>

<script>
export default {
  name: 'friend-item',
  data: () => ({
    avatar: require('../index/avatar.jpg')
  })
}
</script>

<style>
.friend-item {
  height: 60px;
  background-color: gold;
}

.friend-item-img {
  height: 60px;
  width: 60px;
}

.friend-text-warrper{
    margin-left: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center
}
</style>
