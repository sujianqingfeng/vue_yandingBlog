<template>
  <v-card color="white">
    <v-layout column>
      <v-flex d-flex align-end justify-end pb-3 pl-3 :style="headerBg" class="info-header">
        <p class="display-1 info-text">{{info.desc}}</p>
        </v-flex>
      <v-flex>
        <v-layout align-center  mx-2 my-2>
          <v-avatar :size="50" class="grey lighten-4">
            <img :src="info.icon?info.icon:avatar" alt="avatar">
          </v-avatar>
          <p class="info-footer-text">{{info.username}}</p>
        </v-layout>

      </v-flex>

    </v-layout>

  </v-card>
</template>



<script>
export default {
  name: 'userInfo',
  props: {
    info: Object
  },
  data: () => ({
    avatar: require('./avatar.jpg'),
    headerBg: {
      backgroundImage:
        'url(' + require('../../assets/imgs/blog_header_bg.jpg') + ')'
    }
  })
}
</script>

<style >
.info-header {
  height: 300px;
}

.info-text {
  color: white;
}

.info-footer-text {
  color: gray;
  margin-left: 8px
}
</style>

