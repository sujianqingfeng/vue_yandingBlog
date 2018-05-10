<template>

  <v-card>

    <v-layout >
     
        <img :src="item.icon?item.icon:'~assets/imgs/avatar.jpg'" class="friend-item-img" />
   
    

      <v-flex>
        <v-layout px-3 column>
          <v-flex>
            <p class="display-1">{{item.title}}</p>

          </v-flex>
          <v-flex>
            <p class="title">{{item.desc}}</p>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-card>

</template>

<script>
export default {

  name: 'friend-item',
  props: {
    item: Array
  },
  data: () => ({

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
