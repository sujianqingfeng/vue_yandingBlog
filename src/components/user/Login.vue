<template>
  <div class="blog-container">

    <div class="blog-head-warpper">
      <md-button @click='$router.go(-1)' class="md-icon-button blog-head-icon">
        <md-icon class="">arrow_back</md-icon>
      </md-button>
    </div>

    <div class="blog-login-warpper md-layout">

      <div class="md-layout-item md-small-size-100 md-xsmall-size-100 blog-login-left-warpper">

      </div>
      <div class="md-layout-item md-small-size-100 md-xsmall-size-100 blog-login-right-warpper md-layout md-alignment-center-center">

        <div class="md-layout-item">

          <div class="blog-login-header md-layout-item md-layout">
            <div class="md-layout-item blog-login-label-warpper">
              <p>注册</p>
              <p class="md-title">登录</p>
            </div>

            <div class="md-layout-item blog-login-button-warpper md-layout md-alignment-center-right">
              <md-button @click='clickLogin' class="md-icon-button md-raised">
                <md-icon class="">keyboard_arrow_right</md-icon>
              </md-button>

            </div>
          </div>

          <div class="blog-login-form-warpper md-layout md-alignment-center-center">

            <div class="md-layout-item">

              <md-field md-clearable>
                <label class="login-label">用户名</label>
                <md-input class="login-input" v-model="params.username"></md-input>
              </md-field>

              <md-field>
                <label class="login-label">密码</label>
                <md-input v-model="params.password" type="password"></md-input>
              </md-field>
            </div>

          </div>
        </div>

      </div>

    </div>

  </div>
</template>


<script>
import { mapActions } from 'vuex'
export default {
  name: 'login',
  data: () => ({
    params: {
      username: 'sujian',
      password: 'admin123'
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


<style scope>
.blog-login-warpper {
  max-width: 900px;
  margin: 0 auto;
  background-color: white;
  min-height: 600px;
}

.blog-login-left-warpper {
  background-image: url("16pic_4760725_b.jpg");
}

.blog-login-right-warpper {
  background-color: #AABCD4;
  padding: 18px;
  color: white;
}

.blog-login-form-warpper {
  margin-top: 50px;
  width: 100%;
  height: 100%;
}

.login-label {
  color: white !important;
}
.login-input {
  color: white !important;
}

.md-icon-font svg {
  color: white !important;
  fill: white !important;
}

.md-field input {
  color: white !important;
  text-shadow: 0px 0px 0px white;
  -webkit-text-fill-color: white !important;
  outline-color: white !important;
}

.md-field input ::before {
  color: white !important;
  text-shadow: 0px 0px 0px white;
  -webkit-text-fill-color: white !important;
  outline-color: white !important;
}

.md-field input ::after {
  color: white !important;
  text-shadow: 0px 0px 0px white;
  -webkit-text-fill-color: white !important;
}

.md-field input :focus {
  outline-color: white !important;
   outline-offset: -5px  !important;
   outline-width: 10px;
   border-bottom-color: white !important;
}

.md-field ::before{

}

.md-field.md-them-default.md-focused .md-input{
 color: #fff !important;
}

:root{
  --md-theme-default-primary:white !important;
  --md-teheme-default-accent:white  !important
}

.md-field.md-theme-default:after{
   background-color: white !important
 }

</style>
