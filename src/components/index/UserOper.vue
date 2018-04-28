<template>
    <v-card color="white">
        <v-layout column>
            <v-flex d-flex justify-center align-center :style="headerBg" class="user-header">
                <v-avatar :size="100">
                     <img :src="info.icon?info.icon:avatar" alt="avatar">
                </v-avatar>
            </v-flex>
            <v-flex>
                <v-layout align-center mx-2 my-2>
                    <v-flex>
                        <p class="info-footer-text">{{info.username}}'s Blog</p>

                    </v-flex>

                    <v-btn icon>
                        <v-icon light>view_carousel</v-icon>
                    </v-btn>

                    <v-btn icon>
                        <v-icon>more_vert</v-icon>
                    </v-btn>
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

