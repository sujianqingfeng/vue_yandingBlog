<template>
    <md-drawer :md-active.sync="showNavigation">

        <div class="drawer-header md-layout">
            <md-avatar>
                <img :src="avatar" alt="Avatar">
            </md-avatar>
        </div>

        <md-list>
            <md-list-item v-for="item in categorys" :key="item.id" md-expand :md-expanded.sync="expandNews">

                <span class="md-list-item-text">{{item.name}}</span>
                <div slot="md-expand">
                    <md-field>
      
                        <md-input v-model="item.name"></md-input>
                      
                    </md-field>
                    <md-button md-menu-trigger class="md-icon-button">
                        <md-icon>create</md-icon>
                    </md-button>

                    <md-button md-menu-trigger class="md-icon-button">
                        <md-icon>delete</md-icon>
                    </md-button>
                </div>
                <!-- <md-menu  :md-offset-x="-140" :md-offset-y="-36">
                    <md-button md-menu-trigger class="md-icon-button">
                        <md-icon>settings</md-icon>
                    </md-button>

                    <md-menu-content>
                        <md-menu-item  @click="showDialog(item)">
                            <md-icon>create</md-icon>
                            修改
                        </md-menu-item>
                        <md-menu-item  @click="">
                            <md-icon>delete</md-icon>
                            删除
                        </md-menu-item>

                    </md-menu-content>
                </md-menu> -->

            </md-list-item>

        </md-list>

        <md-dialog-prompt :md-active.sync="active" v-model="paramas.name" md-title="修改类别" md-input-maxlength="10" md-input-placeholder="请输入" md-cancel-text='取消' md-confirm-text="确定" />
    </md-drawer>

</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'editNav',
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      avatar: require('../index/avatar.jpg'),
      expandNews: [],
      active: false,
      paramas: {
        id: '',
        name: ''
      }
    }
  },
  computed: {
    ...mapGetters(['user', 'categorys']),
    showNavigation: {
      get: function () {
        return this.show
      },
      set: function (v) {
        this.$emit('update:show', v)
      }
    }
  },
  methods: {
    ...mapActions(['getBlogList', 'getUser', 'getCategory']),
    showDialog (item) {
      this.paramas.id = item.id
      //   this.paramas.name = item.name

      this.active = true
    }
  }
}
</script>


<style scoped>
.avatar {
  display: block;
  margin: 20px auto 15px;
}

/* .md-field input {
  color: #448aff !important;

  -webkit-text-fill-color: #448aff !important;

}

:root{
  --md-theme-default-primary:#448aff !important;
  --md-teheme-default-accent:#448aff  !important
}


.md-field.md-theme-default:after{
   background-color:#448aff !important
 }

 .login-label {
  color:#448aff !important;
}
.login-input {
  color: white !important;
} */

/* .md-icon-font svg {
  color: #448aff !important;
  fill: #448aff !important;
} */


</style>
