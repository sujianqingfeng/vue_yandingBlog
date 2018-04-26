<template>

  <v-app>

    <v-container fluid fill-height>

      <v-card class="blog-login-warpper">
        <v-container fluid grid-list-md px-1 py-1>

          <v-layout row wrap>
            <v-flex xs12 sm12 md6 :style="back" class="blog-login-left">

            </v-flex>

            <v-flex xs12 sm12 md6 class="blog-login-right">
              <v-layout column wrap>
                <v-flex md12 d-flex>
                  <v-layout>
                    <v-flex>
                      <p class="display-1">注册</p>
                      <p class="display-2">登录</p>
                    </v-flex>

                    <v-btn fab large color="white">
                      <v-icon>keyboard_arrow_right</v-icon>
                    </v-btn>
                  </v-layout>

                </v-flex>

                <v-flex d-flex>
                  <v-text-field name="input-1" label="Label Text" id="testing"></v-text-field>
                </v-flex>

              </v-layout>

            </v-flex>

          </v-layout>
        </v-container>
      </v-card>
    </v-container>

  </v-app>

</template>



<script>
import { mapActions } from 'vuex'
export default {
  name: 'login',
  data: () => ({
    params: {
      username: 'sujian',
      password: 'admin123'
    },
    back: {
      backgroundImage:
        'url(' + require('../../assets/imgs/blog_header_bg.jpg') + ')'
    }
  }),
  methods: {
    ...mapActions(['login']),
    clickLogin () {
      this.login(this.params)
    }
  }
}
</script>




<style scoped>
.blog-login-warpper {
  min-width: 900px;
  margin: 0 auto;
  background-color: white;
  min-height: 600px;
}

.blog-login-left {
  height: 600px;
}

.blog-login-right {
  background-color: #aabcd4;
  padding: 18px;
  color: white;
}

.blog-login-form-warpper {
  margin-top: 50px;
  width: 100%;
  height: 100%;
}
.material-icons {
  line-height: 70px;
}
</style>
