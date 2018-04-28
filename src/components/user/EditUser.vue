<template>

  <v-app>
    <v-toolbar absolute color="transparent" flat scroll-off-screen>
      <v-btn icon @click.native="$router.go(-1)">
        <v-icon>arrow_back</v-icon>
      </v-btn>

    </v-toolbar>
    <v-container fluid fill-height>

      <v-card class="edit-user-warpper">
        <v-container fluid grid-list-md px-1 py-1>

          <v-layout column>

            <v-flex d-flex py-4 align-center justify-center :style="editUserHeader">
              <v-avatar :size="200">
                <img :src="avatar" alt="avatar">
              </v-avatar>
            </v-flex>

            <v-flex>
              <v-container px-5 mt-5>

                <v-text-field label="昵称" prepend-icon="insert_emoticon" :value="userParams.name" disabled></v-text-field>

                <upload label="头像" :value='fileName' @formData='picChange' />

                <v-text-field label="描述" prepend-icon="spa" :value="userParams.desc"></v-text-field>

                <v-select prepend-icon="fa fa-transgender" :items="sexOpt" item-text="label" item-value="value" v-model="userParams.sex" label="性别" single-line/>

                <v-menu ref="menu2" lazy :close-on-content-click="false" v-model="menu2" transition="scale-transition" offset-y full-width :nudge-right="40" min-width="290px" :return-value.sync="userParams.birthday">
                  <v-text-field slot="activator" label="出生年月" v-model="userParams.birthday" prepend-icon="event" readonly></v-text-field>
                  <v-date-picker v-model="userParams.birthday" @input="$refs.menu2.save(userParams.birthday)"></v-date-picker>
                </v-menu>

                <v-text-field label="github" prepend-icon="fa fa-github" :value="userParams.github"></v-text-field>
                <v-text-field label="ortherlink" prepend-icon="fa fa-link" :value="userParams.other_link"></v-text-field>
              </v-container>

            </v-flex>

            <v-flex d-flex justify-center my-3 mx-5 px-5>

              <v-btn  color="info" @click='save'>确定修改</v-btn>

            </v-flex>

          </v-layout>
        </v-container>
      </v-card>
    </v-container>

    <!-- <v-snackbar right :timeout="snackbarConfig.time" :color="snackbarConfig.color" v-model="snackbarConfig.show">
      {{ snackbarConfig.text }}
    </v-snackbar> -->

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
  data: () => ({
    avatar: require('../index/avatar.jpg'),
    name: '',
    editUserHeader: {
      backgroundImage:
        'url(' + require('../../assets/imgs/blog_header_bg.jpg') + ')'
    },
    fileName: '',
    userParams: {
      sex: '',
      birthday: null,
      desc: '',
      icon: null,
      github: '',
      other_link: ''
    },
    menu2: '',
    sexOpt: [
      { label: '男', value: 1 },
      { label: '女', value: 2 },
      { label: '未知', value: 3 }
    ]
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
          this.snackbarText = '修改成功'
          this.showSnackbar = true
        })
        .catch(() => {
          this.snackbarText = '修改失败'
          this.showSnackbar = true
        })
    },
    picChange (files) {
      if (files[0]) {
        this.userParams.icon = files[0]
      }
    }
  },
  computed: {
    ...mapGetters({
      user: 'user'
    })
  },
  created () {
    let user = this.user
    this.userParams = user
  }
}
</script>


<style scoped>
.edit-user-warpper {
  width: 900px;
  margin: 0 auto;
}

.edit-user-card {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.edit-user-header {
  background-image: "url(" + require("../../assets/imgs/blog_header_bg.jpg") +
    ")";
  width: 100%;
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
