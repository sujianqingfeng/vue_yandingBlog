<template>
 
  <v-app>
    <v-toolbar absolute color="transparent" flat scroll-off-screen>
      <v-btn icon @click.native="$router.go(-1)">
        <v-icon>arrow_back</v-icon>
      </v-btn>

    </v-toolbar>
    <v-container fluid fill-height>

      <v-card class="blog-about">
        <v-container fluid grid-list-md px-1 py-1>

          <v-layout column>

            <v-flex px-3 py-3 d-flex align-end :style="aboutHeaderStyle" class="blog-detail-header-bg">
                <p  class="display-1">About Me</p>
            

            </v-flex>

            <v-flex>
              <v-layout align-center>
                <v-flex>
                  <v-layout align-center mx-1 my-1>
                    <v-avatar :size="50">
                     <img :src="info.icon?info.icon:avatar" alt="avatar">
                    </v-avatar>
                    <v-layout column mx-1 my-1>
                      <p class="blog-detail-info-text">{{info.username}}</p>
                      <p class="blog-detail-info-text">{{about.add_time}}</p>
                    </v-layout>
                  </v-layout>
                </v-flex>

                 <v-btn @click='share' icon>
                  <v-icon>share</v-icon>
                </v-btn>

              </v-layout>
            </v-flex>

           <v-divider/>

            <v-flex px-0 py-0 style="min-height:900px">
             <mavon-editor ref=md v-model="about.content" :navigation='false' :subfield='false' :toolbarsFlag='false' :toolbars="toolbars" defaultOpen="preview" style="min-height:900px" class="blog-detail-content"  />
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-container>

    <v-snackbar right :timeout="snackbarConfig.time" :color="snackbarConfig.color" v-model="snackbarConfig.show">
      {{ snackbarConfig.text }}
    </v-snackbar>

   
    <v-footer height="180px">
      <blog-footer/>
    </v-footer>
  </v-app>
 

</template>

<script>
import BlogFooter from '../index/BlogFooter'
import { mapGetters, mapActions } from 'vuex'
import TextUtil from '../../utils/TextUtils'
import { mavonEditor } from 'mavon-editor'
export default {
  name: 'blog-detail',
  data () {
    return {
      avatar: require('../index/avatar.jpg'),
      aboutHeaderStyle: {
        backgroundImage:
          'url(' + require('../../assets/imgs/blog_header_bg.jpg') + ')'
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
    BlogFooter,
    mavonEditor
  },
  computed: {
    ...mapGetters([
      'info',
      'about'
    ])
  },
  created () {
    const id = this.$route.params.id
    this.getAbout(id)

    TextUtil.isEmpty(this.info) && this.getUser(id)
  }
}
</script>


<style >
.blog-about {
  width: 900px;
  margin: 0 auto;
}


.blog-detail-header-bg {
  height: 250px;
  /* background-image: url("timg22.jpg"); */
  color: white;
}


.blog-detail-info-text {
  margin-left: 12px;

}

.blog-detail-content {
  height: 1000px;
}



.blog-detail-content .v-note-panel {
  box-shadow: 0px 0px 0px #000 !important;
}
</style>
