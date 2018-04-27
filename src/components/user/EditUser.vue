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

            <v-fle>
              <v-container px-5 mt-5>

                <v-text-field label="昵称" :value="userParams.name" disabled></v-text-field>

                 <v-text-field label="头像" type="file" value="" ></v-text-field>


                  <v-text-field label="昵称" value="Input text" disabled></v-text-field>

                   <v-text-field label="昵称" value="Input text" disabled></v-text-field>
              </v-container>

            </v-fle>

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

  <!-- <div class="blog-containert">

    <div class="blog-head-warpper">
      <md-button @click='$router.go(-1)' class="md-icon-button blog-head-icon">
        <md-icon class="">arrow_back</md-icon>
      </md-button>

    </div>

    <div class="edit-user">

      <md-card class="edit-user-card">

        <div class="edit-user-header" :style="editUserHeader">
          <div class="avatar-warpper md-layout md-alignment-center" :style="editUserHeader">
            <img :src="avatar" class="avatar" />
          </div>

        </div>

        <div class="user-form md-layout md-alignment-center">
          <md-field>
            <md-icon>insert_emoticon</md-icon>
            <label>昵称</label>
            <md-input disabled v-model="name" md-autogrow></md-input>
          </md-field>

          <md-field>
            <label>头像</label>
            <md-file @md-change="picChange" v-model="fileName" />
          </md-field>

          <md-field>
            <md-icon>spa</md-icon>
            <label>描述</label>
            <md-textarea v-model="userParams.desc" md-autogrow md-counter="10"></md-textarea>
          </md-field>

          <md-field>
            <md-icon class="fa fa-transgender"></md-icon>
            <label>性别</label>
            <md-select v-model="userParams.sex" name="movie" id="movie">
              <md-option value="1">男</md-option>
              <md-option value="2">女</md-option>
              <md-option value="3">未知</md-option>

            </md-select>

          </md-field>

          <md-datepicker v-model="userParams.birthday">
            <label>出生年月</label>
          </md-datepicker>

          <md-field>
            <md-icon class="fa fa-github"></md-icon>
            <label>github</label>
            <md-textarea v-model="userParams.github" md-autogrow md-counter="200"></md-textarea>
          </md-field>

          <md-field>
            <md-icon class="fa fa-link"></md-icon>
            <label>link</label>
            <md-textarea v-model="userParams.other_link" md-autogrow md-counter="200"></md-textarea>
          </md-field>

          <md-button class="md-raised md-primary bt-save" @click='save'>确定修改</md-button>

        </div>

      </md-card>

    </div>

    <div class="blog-footer md-padding md-alignment-center-center">
      <div class="md-layout-item">
        <blog-footer/>
      </div>
    </div>

    <md-snackbar md-position="left" md-duration="4000" :md-active.sync="showSnackbar" >
      <span>{{snackbarText}}</span>
     
    </md-snackbar>

  </div> -->
</template>


<script>
import BlogFooter from '../index/BlogFooter'
import { mapActions, mapGetters } from 'vuex'
import moment from 'moment'
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
    showSnackbar: false,
    snackbarText: ''
  }),
  components: {
    BlogFooter
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
    picChange (FileList) {
      if (FileList[0]) {
        this.userParams.icon = FileList[0]
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
