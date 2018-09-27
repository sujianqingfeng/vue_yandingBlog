<template>
 
  <v-app>
    <v-toolbar absolute color="transparent" flat scroll-off-screen>
      <v-btn icon @click.native="$router.go(-1)">
        <v-icon>arrow_back</v-icon>
      </v-btn>

    </v-toolbar>
    <v-container fluid fill-height>

      <v-card class="blog-container">
        <v-container fluid grid-list-md px-1 py-1>

          <v-layout column>

            <v-flex px-3 py-3 d-flex align-end  class="blog-header-height blog-header-bg">
                <p  class="display-1">About Me</p>
            

            </v-flex>

            <v-flex>
              <v-layout align-center>
                <v-flex>
                  <v-layout align-center mx-1 my-1>
                    <v-avatar :size="50">
                     <img :src="info.icon" alt="avatar">
                    </v-avatar>
                    <v-layout column mx-1 my-1>
                      <p class="blog-detail-info-text">{{info.username}}</p>
                      <p class="blog-detail-info-text">{{about.add_time | timeformat}}</p>
                    </v-layout>
                  </v-layout>
                </v-flex>

                 <v-btn @click='share' icon>
                  <v-icon>share</v-icon>
                </v-btn>

              </v-layout>
            </v-flex>

           <v-divider/>

            <v-flex px-3 py-3 style="min-height:900px" class="markdown-body" v-html="$md2html(about.content)">
    
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-container>

    <v-snackbar right :timeout="snackbarConfig.time" :color="snackbarConfig.color" v-model="snackbarConfig.show">
      {{ snackbarConfig.text }}
    </v-snackbar>

   
    <v-footer height="180px">
      <blog-footer :info='info'/>
    </v-footer>
  </v-app>
 

</template>

<script>
import BlogFooter from '../index/BlogFooter'
import { mapGetters, mapActions } from 'vuex'
import { isEmpty } from '../../utils/TextUtils'
export default {
  name: 'blog-detail',
  data () {
    return {
      about: {
        content: ''
      },
      toolbars: {},
      snackbarConfig: {
        time: 4000,
        color: 'success',
        show: false,
        text: ''
      }

    }
  },
  methods: {
    ...mapActions(['getAbout', 'getUser']),
    share () {
      this.$copyText(window.location.href).then(e => {
        this.snackbarConfig.text = '复制到剪贴板'
        this.snackbarConfig.show = true
      })
    }

  },

  components: {
    BlogFooter
  },
  computed: {
    ...mapGetters([
      'info'
    ])
  },
  created () {
    const id = this.$route.params.id
    this.getAbout(id).then(res => {
      this.about = res
    })

    isEmpty(this.info) && this.getUser(id)
  }
}
</script>


<style scoped>



.blog-detail-info-text {
  margin-left: 12px;

}

.blog-detail-content {
  height: 1000px;
}


</style>
