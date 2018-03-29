<template>
    <div class="blog-containert">

        <div class="blog-head-warpper">
            <md-button @click='$router.go(-1)' class="md-icon-button blog-head-icon">
                <md-icon class="">arrow_back</md-icon>
            </md-button>

        </div>

        <div class="edit-user">

            <md-card class="edit-user-card">

                <div class="avatar-warpper md-layout md-alignment-center">
                    <img :src="avatar" class="avatar" />
                    <md-button class="md-primary">修改头像</md-button>
                </div>

                <div class="user-form md-layout md-alignment-center">
                    <md-field>
                        <label>昵称</label>
                        <md-textarea v-model="name" md-autogrow md-counter="200"></md-textarea>
                    </md-field>

                    <md-field>
                        <label>描述</label>
                        <md-textarea v-model="name" md-autogrow md-counter="200"></md-textarea>
                    </md-field>

                    <md-field>

                        <label for="movie">性别</label>
                        <md-select v-model="movie" name="movie" id="movie">
                            <md-option value="fight-club">Fight Club</md-option>
                            <md-option value="godfather">Godfather</md-option>
                            <md-option value="godfather-ii">Godfather II</md-option>

                        </md-select>

                    </md-field>

                    <md-field>
                        <label>出生年月</label>
                        <md-input v-model="date"></md-input>
                    </md-field>

                    <md-field>
                        <label>昵称</label>
                        <md-textarea v-model="name" md-autogrow md-counter="200"></md-textarea>
                    </md-field>

                    <md-field>
                        <label>昵称</label>
                        <md-textarea v-model="name" md-autogrow md-counter="200"></md-textarea>
                    </md-field>

                    <md-button class="md-raised md-primary bt-save">确定修改</md-button>

                </div>

            </md-card>

        </div>

        <div class="blog-footer md-padding md-alignment-center-center">
            <div class="md-layout-item">
                <blog-footer/>
            </div>
        </div>

    </div>
</template>


<script>
import BlogFooter from '../index/BlogFooter'
export default {
  name: 'editUser',
  data: () => ({
    avatar: require('../index/avatar.jpg'),
    name: ''
  }),
  components: {
    BlogFooter
  }
}
</script>


<style>
.edit-user {
  max-width: 900px;
  margin: 0 auto;
}

.edit-user-card {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.avatar-warpper {
  margin-top: 100px;
}

.avatar {
  width: 120px;
  height: 120px;
  border-radius: 60px;
}

.user-form {
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
</style>
