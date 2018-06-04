<template>

  <v-app>
    <v-toolbar absolute color="transparent" flat scroll-off-screen>
      <v-btn icon @click.native="$router.go(-1)">
        <v-icon>arrow_back</v-icon>
      </v-btn>

    </v-toolbar>
    <v-container fluid fill-height>
      <v-card class="blog-login-warpper">
        <v-container fluid grid-list-md px-1 py-1>

          <v-layout row wrap>
            <v-flex xs12 sm12 md6 class="blog-login-left blog-header-bg"></v-flex>

            <v-flex xs12 sm12 md6 class="blog-login-right">
              <v-layout column wrap>
                <v-flex d-flex align-end mx-3 my-4>
                  <v-layout>
                    <v-flex>
                      <p class="display-1">注册</p>
                      <p class="display-2">登录</p>
                    </v-flex>
                    <v-btn fab  color="white" @click.stop='clickLogin'>
                      <v-icon>keyboard_arrow_right</v-icon>
                    </v-btn>
                  </v-layout>

                </v-flex>

                <v-flex d-flex mx-3>
                  <v-layout column>
                    <v-flex>
                      <v-text-field dark color="white" clearable label="用户名" :value='params.username'></v-text-field>
                    </v-flex>
                    <v-flex>
                      <v-text-field :append-icon="e1 ? 'visibility' : 'visibility_off'" :append-icon-cb="() => (e1 = !e1)" :type="e1 ? 'password' : 'text'" dark color="white" label="密码" :value='params.password'></v-text-field>
                    </v-flex>

                    <v-flex d-flex justify-center>
                      OR
                    </v-flex>
                    <v-flex>
                      <v-layout justify-center>
                        <v-btn small icon @click.stop='gihubLoginBtn'>
                          <v-icon color='white'>mdi-github-circle</v-icon>
                        </v-btn>

                         <v-btn small icon @click.stop='noLoginBtn'>
                          <v-icon color='white'>mdi-qqchat</v-icon>
                        </v-btn>

                         <v-btn small icon @click.stop='noLoginBtn'>
                          <v-icon color='white'>mdi-wechat</v-icon>
                        </v-btn>
                      </v-layout>

                    </v-flex>
                  </v-layout>
                </v-flex>

              </v-layout>

            </v-flex>

          </v-layout>
        </v-container>
      </v-card>
    </v-container>

    <v-snackbar right :timeout="snackbarConfig.time" :color="snackbarConfig.color" v-model="snackbarConfig.show">
      {{ snackbarConfig.text }}
    </v-snackbar>

  </v-app>

</template>



<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'login',
  data: () => ({
    params: {
      username: 'sujian',
      password: 'admin123'
    },
    e1: true,
    snackbarConfig: {
      text: '',
      time: 4000,
      show: false,
      color: 'info'
    },
    token: ''
  }),
  computed: {
    ...mapGetters(['githubLoginUrl'])
  },
  methods: {
    ...mapActions(['login']),
    clickLogin () {
      let that = this
      that.login(that.params)
        .then(() => {
          that.$router.push('/admin')
        })
        .catch(() => {
          that.snackbarConfig.color = 'error'
          that.snackbarConfig.text = '登陆失败'
          that.snackbarConfig.show = true
        })
    },
    gihubLoginBtn () {
      let that = this

      let win = window.open(
        that.githubLoginUrl,
        'GitHub登陆',
        'width=600, height=400'
      )

      that.timer = window.setInterval(_ => {
        if (win.document.URL.indexOf('oauth-success') !== -1) {
          window.clearInterval(that.timer)
          win.close()
          that.$router.push('/admin')
        }
      }, 100)
    },
    noLoginBtn () {
      this.snackbarConfig.color = 'error'
      this.snackbarConfig.text = '第三方登录未实现'
      this.snackbarConfig.show = true
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

</style>
