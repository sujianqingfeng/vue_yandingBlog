<template>
    <div class="edit-containert">

        <div class="blog-header">
            <md-button @click="menuVisible=true" class="md-icon-button">
                <md-icon class="menu">menu</md-icon>
            </md-button>
        </div>

        <edit-nav :show.sync='menuVisible' />

        <div class="edit-warpper">
            <md-card class="blog-edit-header">
                <md-card-header class="blog-edit-header-bg  md-padding md-layout md-alignment-bottom-left" :style="editUserHeader">

                    <div class="title-warpper">

                        <md-field>
                            <md-input class="text-title" v-model="initial" placeholder="这里是标题"></md-input>
                        </md-field>

                        <md-field>
                            <md-input v-show="!showCategory" v-model="initial" placeholder="这里是分类"></md-input>

                            <md-select v-show="showCategory" v-model="movie" name="movie" id="movie" placeholder="这里是分类">
                                <md-option value="fight-club">Fight Club</md-option>
                                <md-option value="godfather">Godfather</md-option>
                            </md-select>

                        </md-field>
                       

                    </div>
                     <md-button @click="menuVisible=true" class="category-toggle md-icon-button">
                            <md-icon class="menu">cached</md-icon>
                        </md-button>

                </md-card-header>

                <div class="md-padding md-layout  blog-detail-info md-alignment-center-left">

                    <div class="md-layout-item md-size-70 md-layout md-alignment-center-left">

                        <div class="blog-detail-avatar">
                            <md-avatar>
                                <img :src="avatar" alt="Avatar">
                            </md-avatar>
                        </div>

                        <div class="blog-detail-text-warpper">
                            <p class="blog-edit-info-text">素笺淡墨染流年</p>
                            <span class="blog-edit-info-text">2018/3/17</span>
                            <span class="blog-edit-info-text">666</span>
                        </div>

                    </div>

                    <div class="md-layout-item md-size-30 md-layout md-alignment-center-right">

                        <md-button class="md-icon-button">
                            <md-icon>view_carousel</md-icon>
                        </md-button>

                        <md-button class="md-icon-button">
                            <md-icon>view_carousel</md-icon>
                        </md-button>

                    </div>
                </div>

                <div class="md-layout blog-edit-content">

                    <div class="editor">
                        <mavon-editor v-model="value" style="height: 100%" />
                    </div>
                </div>

            </md-card>

        </div>

        <div class="md-layout md-gutter">
            <div class="md-layout-item md-size-15">

            </div>
            <div class="md-layout-item  md-size-85">

            </div>
        </div>

    </div>

</template>


<script>
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

import EditNav from './EditNav'

export default {
  name: 'editBlog',
  data: () => ({
    value: '春水初生，春林初盛，春风十里，不如你。',
    avatar: require('../index/avatar.jpg'),
    menuVisible: false,
    editUserHeader: {
      backgroundImage:
        'url(' + require('../../assets/imgs/blog_header_bg.jpg') + ')'
    },
    showCategory: true
  }),
  components: {
    mavonEditor,
    EditNav
  }
}
</script>

<style scope>
.blog-header {
  height: 200px;
}
.editor {
  width: 100%;
  height: 500px;
}
.edit-warpper {
  max-width: 900px;
  margin: 0 auto;
}
.blog-edit-header {
}
.blog-edit-header-bg {
  height: 300px;
  color: white;
  background-repeat: no-repeat;
  background-position: right bottom;
}

.category-toggle{
    margin-bottom: 15px !important
}

.category-toggle div div i{
color: white !important
}



.blog-edit-info-text {
  margin-left: 12px;
  padding: 4px;
}






input::-webkit-input-placeholder,
textarea::-webkit-input-placeholder {
  color: white !important;
}
input:-moz-placeholder,
textarea:-moz-placeholder {
  color: white !important;
}
input::-moz-placeholder,
textarea::-moz-placeholder {
  color: white !important;
}
input:-ms-input-placeholder,
textarea:-ms-input-placeholder {
  color: white !important;
}

.text-title::-webkit-input-placeholder,
.text-title::-webkit-input-placeholder {
  color: white !important;
  font-size: 25px !important;
}
.text-title:-moz-placeholder,
.text-title:-moz-placeholder {
  color: white !important;
  font-size: 25px !important;
}
.text-title::-moz-placeholder,
.text-title::-moz-placeholder {
  color: white !important;
  font-size: 25px !important;
}
.text-title:-ms-input-placeholder,
.text-title:-ms-input-placeholder {
  color: white !important;
  font-size: 25px !important;
}

.md-icon-font svg {
  color: white !important;
  fill: white !important;
}

.text-title {
  font-size: 30px !important;
}

.md-field input {
  color: white !important;

  text-shadow: 0px 0px 0px white;
  -webkit-text-fill-color: white !important;
}

:root {
  --md-theme-default-primary: white !important;
  --md-teheme-default-accent: white !important;
}

.md-field.md-theme-default:after {
  background-color: white !important;
}
</style>

