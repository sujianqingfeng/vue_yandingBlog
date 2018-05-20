<template>

  <v-app >
    <v-toolbar absolute color="transparent" flat scroll-off-screen>
      <v-btn icon @click.native="$router.go(-1)">
        <v-icon>arrow_back</v-icon>
      </v-btn>

    </v-toolbar>
    <v-container fluid fill-height>
      <v-card class="blog-login-warpper">
        <v-container fluid grid-list-md px-1 py-1>

          <v-layout row wrap>
            <v-flex xs12 sm12 md6  class="blog-login-left blog-header-bg"></v-flex>

            <v-flex xs12 sm12 md6 class="blog-login-right">
              <v-layout column wrap>
                <v-flex d-flex align-end mx-3 my-4>
                  <v-layout>
                    <v-flex>
                      <p class="display-1">注册</p>
                      <p class="display-2">登录</p>
                    </v-flex>
                    <v-btn fab large color="white" @click.stop='clickLogin'>
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
import { mapActions } from 'vuex'
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
    }
  }),
  methods: {
    ...mapActions(['login']),
    clickLogin () {
      this.login(this.params)
        .then(() => {
          this.$router.push('/admin')
        })
        .catch(() => {
          this.snackbarConfig.color = 'error'
          this.snackbarConfig.text = '登陆失败'
          this.snackbarConfig.show = true
        })
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
