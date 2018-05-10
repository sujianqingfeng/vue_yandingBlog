<template>

<v-container py-0 >
    <v-layout  align-center>
        <v-flex xl12 xm12 md3>
            <v-btn icon>
                <v-icon>fa fa-github</v-icon>
            </v-btn>
            <v-btn icon>
                <v-icon>fa fa-link</v-icon>
            </v-btn>
        </v-flex>
        <v-flex d-flex justify-center xl12 xm12 md6> Copyright © 2018 YanDing's Blog</v-flex>
        <v-flex d-flex justify-end xl12 xm12 md3> Powered by Sujian</v-flex>
    </v-layout>
</v-container>

  
</template>



<script>
export default {
  name: 'userInfo',
  data: () => ({

  })
}
</script>

<style >
.blog-footer-warpper {
  height: 100px;
}

.font-color{
    color: grey
}
</style>

