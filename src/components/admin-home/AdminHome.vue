<template>
  <v-container>
    <v-card class="blog-container">

      <v-layout class="blog-header-bg blog-header-height display-1" d-flex align-end px-3 py-3>
        <span>素笺</span>
      </v-layout>

      <v-layout row justify-space-around mx-3 my-3>
        <v-flex xs2 class="smail-card" px-3 py-2>
          <v-layout column>
            <p class="title text-white">博客数</p>
            <p class="display-1 text-white">20</p>

          </v-layout>
        </v-flex>


         <v-flex xs2 class="smail-card" px-3 py-2>
          <v-layout column>
            <p class="title text-white">昨日浏览</p>
            <p class="display-1 text-white">50</p>

          </v-layout>
        </v-flex>

         <v-flex xs2 class="smail-card" px-3 py-2>
          <v-layout column>
            <p class="title text-white">今日浏览</p>
            <p class="display-1 text-white">10</p>

          </v-layout>
        </v-flex>

       

      </v-layout>

    </v-card>
  </v-container>

</template>

<style lang="stylus" scoped>
.smail-card {
  background-color: #aabcd4;
}
</style>

