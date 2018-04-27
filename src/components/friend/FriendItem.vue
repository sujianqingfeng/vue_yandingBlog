<template>

  <v-card>

    <v-layout >
     
        <img :src="avatar" class="friend-item-img" />
    

      <v-flex>
        <v-layout column>
          <v-flex>
            <p class="display-1">fdifdjf</p>

          </v-flex>
          <v-flex>
            <p class="title">fdfdff</p>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-card>

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
  margin-top: 16px;
}

.friend-item-img {
  height: 80px;
  width: 80px;
}

.friend-text-warrper {
  margin-left: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
