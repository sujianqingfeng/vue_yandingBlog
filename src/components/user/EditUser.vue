<template>

  <v-app>

    <v-container fluid fill-height>
      <v-card class="blog-container">
        <v-container fluid grid-list-md px-1 py-1>

          <v-layout column>

            <v-flex d-flex py-4 align-center justify-center class="blog-header-bg">
              <v-avatar :size="200">
                <img src="~assets/imgs/avatar.jpg" alt="avatar">
              </v-avatar>
            </v-flex>

            <v-flex>
              <v-container px-5 mt-5>

                <v-text-field label="昵称" prepend-icon="insert_emoticon" v-model="userParams.username" disabled></v-text-field>

                <upload label="头像" :value='fileName' @formData='picChange' />

                <v-text-field label="描述" prepend-icon="spa" v-model="userParams.desc"></v-text-field>

                <v-select prepend-icon="fa fa-transgender" :items="sexOpt" item-text="label" item-value="value" v-model="userParams.sex" label="性别" single-line/>

                <v-menu ref="menu2" lazy :close-on-content-click="false" v-model="menu2" transition="scale-transition" offset-y full-width :nudge-right="40" min-width="290px" :return-value.sync="userParams.birthday">
                  <v-text-field slot="activator" label="出生年月" v-model="userParams.birthday" prepend-icon="event" readonly></v-text-field>
                  <v-date-picker v-model="userParams.birthday" @input="$refs.menu2.save(userParams.birthday)"></v-date-picker>
                </v-menu>

                <v-text-field label="github" prepend-icon="fa fa-github" v-model="userParams.github"></v-text-field>
                <v-text-field label="ortherlink" prepend-icon="fa fa-link" v-model="userParams.other_link"></v-text-field>
              </v-container>

            </v-flex>

            <v-flex d-flex justify-center my-3 mx-5 px-5>

              <v-btn round color="info" @click='save'>确定修改</v-btn>

            </v-flex>

          </v-layout>
        </v-container>
      </v-card>
    </v-container>

    <v-snackbar right :timeout="snackbarConfig.time" :color="snackbarConfig.color" v-model="snackbarConfig.show">
      {{ snackbarConfig.text }}
    </v-snackbar>

    <v-footer height="auto">
      <blog-footer/>
    </v-footer>
  </v-app>

</template>


<script>
import BlogFooter from '../index/BlogFooter'
import { mapActions, mapGetters } from 'vuex'
import moment from 'moment'
import Upload from './Upload'
export default {
  name: 'editUser',
  props: {
    user: Object
  },
  data: () => ({
    name: '',
    fileName: '',
    userParams: {
      sex: '',
      birthday: null,
      desc: '',
      icon: null,
      github: '',
      other_link: '',
      username: ''
    },
    menu2: '',
    sexOpt: [
      { label: '男', value: 1 },
      { label: '女', value: 2 },
      { label: '未知', value: 3 }
    ],
    snackbarConfig: {
      text: '',
      time: 4000,
      show: false,
      color: 'info'
    }
  }),
  components: {
    BlogFooter,
    Upload
  },
  methods: {
    ...mapActions(['editUser']),
    save () {
      let formdata = new FormData()
      const params = this.userParams
      for (let key in params) {
        if (params[key]) {
          if (key === 'birthday') {
            formdata.append(key, moment(params[key]).format('YYYY-MM-DD'))
          } else if (key === 'icon') {
            if (typeof params[key] === 'object') {
              formdata.append(key, params[key])
            }
          } else {
            formdata.append(key, params[key])
          }
        }
      }

      this.editUser({ id: this.user.id, params: formdata })
        .then(() => {
          this.snackbarConfig.text = '修改成功'

          this.snackbarConfig.show = true
        })
        .catch(() => {
          this.snackbarConfig.text = '修改失败'
          this.snackbarConfig.color = 'error'
          this.snackbarConfig.show = true
        })
    },
    picChange (files) {
      if (files[0]) {
        this.userParams.icon = files[0]
      }
    },
    judgeSex (value) {
      const sexOpt = this.sexOpt
      for (let i = 0; i < sexOpt.length; i++) {
        if (value === sexOpt[i].label) return sexOpt[i].value
      }
    }
  },
  computed: {
    ...mapGetters({
      dfd: '11'
    })
  },
  created () {
    let that = this
    that.userParams = that.user
    if (that.user.sex) that.userParams.sex = that.judgeSex(that.userParams.sex)
  },
  watch: {
    user: function (value) {
      let that = this
      that.userParams = value
      that.userParams.sex = that.judgeSex(that.userParams.sex)
    }
  }
}
</script>


<style scoped>
.edit-user-card {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.avatar-warpper {
  margin-top: 100px;
  margin-bottom: 100px;
}

.avatar {
  width: 120px;
  height: 120px;
  border-radius: 60px;
}

.user-form {
  margin-top: 50px;
  width: 70%;
}

.bt-save {
  margin: 70px;
}

.blog-footer {
  margin-top: 100px;
  width: 100%;
  background-color: white;
}

.md-snackbar.md-theme-default {
  background-color: #e9ebec;
}

.md-snackbar.md-theme-default span {
  color: gray;
}
</style>
