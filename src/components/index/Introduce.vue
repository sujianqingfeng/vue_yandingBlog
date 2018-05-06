<template>
    <v-app>
        <v-content>

            <v-container class="introduce-container">
                <v-card>
                    <v-layout class="introduce-head display-1"  d-flex align-end px-3 py-3 :style="introduceHeaderBg">
                        <span class="introduce-title">项目介绍</span>
                    </v-layout>

                    <v-layout px-3 py-3>
                        本着没事干，练手的原因，加之写到中途，又舍不得放弃，这个项目就应运而生了。
                    </v-layout>

                    <v-layout px-3 py-3>
                        然后...
                    </v-layout>

                     <v-layout px-3 py-3>
                        然后...
                    </v-layout>

                     <v-layout px-3 py-3>
                        不知道怎么写了
                    </v-layout>

                </v-card>
            </v-container>

        </v-content>
    </v-app>

</template>
<script>
export default {
  name: 'introduce',
  data: () => ({
    introduceHeaderBg: {
      backgroundImage:
        'url(' + require('../../assets/imgs/blog_header_bg.jpg') + ')'
    }
  })
}
</script>

<style scoped>
.introduce-container {
  width: 900px;
  margin: 0 auto;
}

.introduce-head {
  height: 250px;
}

.introduce-title{
    color: white;
}
</style>
