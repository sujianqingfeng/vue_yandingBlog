<template>

<v-container py-0 >
    <v-layout  align-center>
        <v-flex xl12 xm12 md3>
            <v-btn icon v-if="info.github" :href='info.github'>
                <v-icon>mdi-github-circle</v-icon>
            </v-btn>

            <!-- <v-btn icon>
                <v-icon>mdi-email-outline</v-icon>
            </v-btn>
            
            <v-btn icon>
                <v-icon>mdi-qqchat</v-icon>
            </v-btn> -->
           
            <v-btn icon v-if="info.other_link" :href='info.other_link'>
                <v-icon>mdi-link-variant</v-icon>
            </v-btn>
        </v-flex>
        <v-flex d-flex justify-center xl12 xm12 md6> Copyright © 2018 {{info.username}}'s Blog</v-flex>
        <v-flex d-flex justify-end xl12 xm12 md3> Powered by Sujian</v-flex>
    </v-layout>
</v-container>

  
</template>



<script>
export default {
  name: 'userInfo',
  props: {
    info: Object
  },
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

