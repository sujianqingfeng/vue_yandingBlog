<template>
    <v-card color="white">
        <v-layout column>
            <v-flex d-flex align-end justify-end pb-3 pl-3 :style="headerBg" class="user-header">
                <p class="display-1 info-text">fff</p>
            </v-flex>
            <v-flex>
                <v-layout align-center mx-2 my-2>
                    <v-avatar :size="50" class="grey lighten-4">
                        <img :src="avatar" alt="avatar">
                    </v-avatar>
                    <p class="info-footer-text">252525</p>
                </v-layout>

            </v-flex>

        </v-layout>

    </v-card>
</template>



<script>
export default {
  name: 'userOper',
  props: {
    info: Object
  },
  data: () => ({
    avatar: require('./avatar.jpg')
  })
}
</script>

<style >
.user-header {
  height: 300px;
}

.avatar-style {
  height: 120px !important;
  width: 120px;
  border-radius: 60px;
}
</style>

