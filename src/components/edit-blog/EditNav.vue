<template>

  <v-container px-0 py-0>

    <v-layout column>

      <v-flex align-center justify-center :style="headerBg" py-4>

        <v-avatar :size="100">
          <img @click="$router.push('/editUser')" :src="avatar" alt="avatar">
        </v-avatar>

      </v-flex>

      <v-flex>

        <v-list>

          <v-list-tile v-for="item in categorys" :key="item.id">
            <v-list-tile-content>
              <v-list-tile-title>{{item.name}}</v-list-tile-title>
            </v-list-tile-content>

            <v-menu offset-y>
              <v-list-tile-action slot="activator">
                <v-icon>settings</v-icon>
              </v-list-tile-action>

              <v-list>
                <v-list-tile @click="showDialog(item)">
                  <v-list-tile-action>
                    <v-icon>create</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-title>修改</v-list-tile-title>
                </v-list-tile>

                 <v-list-tile @click="deleteCategory (item)">
                  <v-list-tile-action>
                    <v-icon>delete</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-title>删除</v-list-tile-title>
                </v-list-tile>
              </v-list>
            </v-menu>

          </v-list-tile>

        </v-list>
      </v-flex>

    </v-layout>


     <v-dialog v-model="dialogConfig.show" persistent max-width="500px">
      <v-card>
        <v-card-title>
          <span class="headline">修改类别</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
           
                <v-text-field
                  :value="updateParams.name"
                  persistent-hint
                  required
                ></v-text-field>
  
  
          </v-container>
 
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click.native="dialogConfig.show = false">取消</v-btn>
          <v-btn color="blue darken-1" flat @click.native="updateCategory">修改</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

  </v-container>

</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Navbar',
  props: {
    info: Object,
    user: Object
  },
  data () {
    return {
      avatar: require('../../assets/imgs/avatar.jpg'),
      headerBg: {
        backgroundImage:
          'url(' + require('../../assets/imgs/blog_header_bg.jpg') + ')'
      },
      dialogConfig: {
        show: false
      },
      updateParams: {
        id: null,
        name: ''
      }
    }
  },
  computed: {

    ...mapGetters(['user', 'categorys'])

  },
  methods: {
    ...mapActions(['deleteCategoryF', 'updateCategoryF']),
    showDialog (item) {
      this.updateParams.id = item.id
      this.updateParams.name = item.name
      this.dialogConfig.show = true
    },
    updateCategory () {
      this.updateCategoryF({id: this.updateParams.id, params: {name: this.updateParams.name}}).then((res) => {
        this.dialogConfig.show = false
      })
    },
    deleteCategory (item) {
      this.deleteCategoryF(item.id)
    }
  }
}
</script>


<style scoped>
.avatar {
  display: block;
  margin: 20px auto 15px;
}

.avatar-style {
  height: 120px;
  width: 120px;
  border-radius: 60px;
}
</style>
