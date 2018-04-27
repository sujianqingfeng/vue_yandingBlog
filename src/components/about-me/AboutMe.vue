<template>
 
  <v-app>
    <v-toolbar absolute color="transparent" flat scroll-off-screen>
      <v-btn icon @click.native="$router.go(-1)">
        <v-icon>arrow_back</v-icon>
      </v-btn>

    </v-toolbar>
    <v-container fluid fill-height>

      <v-card class="card-blog-detail">
        <v-container fluid grid-list-md px-1 py-1>

          <v-layout column>

            <v-flex px-3 py-3 d-flex align-end :style="detailHeaderStyle" class="blog-detail-header-bg">
                <p  class="display-1">ffff</p>
            

            </v-flex>

            <v-flex>
              <v-layout align-center>
                <v-flex>
                  <v-layout align-center mx-1 my-1>
                    <v-avatar :size="50">
                      <img :src="avatar" alt="avatar">
                    </v-avatar>
                    <v-layout column mx-1 my-1>
                      <p class="info-footer-text">252525</p>
                      <p class="info-footer-text">252525</p>
                    </v-layout>
                  </v-layout>
                </v-flex>

                <v-btn icon>
                  <v-icon>check</v-icon>
                </v-btn>

              </v-layout>
            </v-flex>

            <v-flex px-0 py-0 style="min-height:900px">
             <mavon-editor ref=md v-model="blogInfo.content" :navigation='false' :subfield='false' :toolbarsFlag='false' :toolbars="toolbars" defaultOpen="preview" style="min-height:900px" class="blog-detail-content"  />
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-container>

    <!-- <v-snackbar right :timeout="snackbarConfig.time" :color="snackbarConfig.color" v-model="snackbarConfig.show">
      {{ snackbarConfig.text }}
    </v-snackbar> -->

    <v-footer height="auto" >
      <blog-footer/>
    </v-footer>
  </v-app>
 

</template>

<script>
import BlogFooter from '../index/BlogFooter'
export default {
  name: 'blog-detail',
  data () {
    return {
      avatar: require('../index/avatar.jpg')
    }
  },
  components: {
    BlogFooter
  }
}
</script>


<style>
.blog-about {
  max-width: 900px;
  margin: 0 auto;
}

.blog-detail-header {
  margin-top: 200px;
}

.blog-detail-header-bg {
  height: 250px;
  /* background-image: url("timg22.jpg"); */
  color: white;
}

.blog-detail-info {
  border-bottom-color: grey;
  border-bottom-width: 1px;
  border-style: solid;
}

.blog-detail-text-warpper {
}

.blog-detail-info-text {
  margin-left: 12px;
  padding: 4px;
}

.blog-detail-content {
  height: 1000px;
}

.blog-footer {
  margin-top: 100px;
  width: 100%;
  background-color: white;
}
</style>
