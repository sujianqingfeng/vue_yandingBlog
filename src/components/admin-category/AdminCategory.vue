<template>
  <v-card class="blog-container">

    <v-layout class="blog-header-height blog-header-bg display-1" d-flex align-end px-3 py-3>

      <v-flex>
        <span>类别管理</span>
      </v-flex>

      <v-flex>
        <v-layout justify-end class="layout-add-style">
          <v-btn fab dark color="pink" @click="addBtn">
            <v-icon dark>add</v-icon>
          </v-btn>
        </v-layout>

      </v-flex>
    </v-layout>

    <v-data-table :headers="headers" :items="categorys"  :loading="loading" id="table-admin-blog" :rows-per-page-items="pageConfig" no-data-text='没有数据'>
      <template slot="items" slot-scope="props">
        <td>
          {{ props.item.name }}
        </td>

        <td class="text-xs-left">
          <v-btn color="primary" fab small dark @click="updateBtn(props.item)">
            <v-icon>edit</v-icon>
          </v-btn>

          <v-btn color="primary" fab small dark @click="deleteCategory(props.item)">
            <v-icon>delete</v-icon>
          </v-btn>
        </td>

      </template>
    </v-data-table>

    <v-dialog v-model="dialogConfig.show" persistent max-width="500px">

      <v-card>
        <v-card-title>
          <span class="headline">添加类别</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>

              <v-flex xs12>
                <v-text-field v-model="category_params.name" required @keyup.enter.native='dialogConfirm'></v-text-field>
              </v-flex>

            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click.native="dialogConfig.show = false">关闭</v-btn>
          <v-btn color="blue darken-1" flat @click.native="dialogConfirm">确定</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

  </v-card>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      pagination: {
        sortBy: 'name'
      },
      pageConfig: [10, 25, { text: 'All', value: -1 }],
      headers: [
        {
          text: '标题',
          sortable: false
        },
        { text: '操作', value: 'fat', sortable: false, width: '180px' }
      ],
      categorys: [],
      dialogConfig: {
        show: false,
        title: '添加类别',
        action: 0
      },

      category_params: {
        name: '',
        id: ''
      },
      loading: false
    }
  },
  methods: {
    ...mapActions(['getCategoryByAdmin', 'createCategory', 'updateCategoryF', 'deleteCategoryF']),
    addBtn () {
      this.category_params.name = ''
      this.dialogConfig.action = 1
      this.dialogConfig.title = '添加类别'
      this.dialogConfig.show = true
    },
    updateBtn (row) {
      this.category_params.name = row.name
      this.category_params.id = row.id
      this.dialogConfig.action = 2
      this.dialogConfig.title = '修改类别'
      this.dialogConfig.show = true
    },
    dialogConfirm () {
      if (this.dialogConfig.action === 1) {
        this.saveCategory()
      } else {
        this.updateCategory()
      }
    },
    updateCategory () {
      this.updateCategoryF({id: this.category_params.id, params: {name: this.category_params.name}}).then(res => {
        this.dialogConfig.show = false
        this.getCategorys()
      })
    },
    deleteCategory (row) {
      this.deleteCategoryF(row.id).then(res => {
        this.getCategorys()
      })
    },
    saveCategory () {
      this.createCategory(this.category_params.name).then(res => {
        this.dialogConfig.show = false
        this.getCategorys()
      })
    },
    getCategorys () {
      this.loading = true
      this.getCategoryByAdmin().then(res => {
        this.loading = false
        this.categorys = res
      })
    }
  },
  created () {
    this.getCategorys()
  }
}
</script>


<style>
.datatable thead tr th,
.datatable tbody tr td {
  vertical-align: middle;
}
</style>


<style scoped>
.material-icons {
  line-height: 40px;
}

.layout-add-style button .material-icons {
  line-height: 56px;
}

.layout-add-style {
  position: relative;
  top: 45px;
}
</style>

