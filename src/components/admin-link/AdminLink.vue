<template>
  <v-card class="blog-container">

    <v-layout class="blog-header-height blog-header-bg display-1" d-flex align-end px-3 py-3>

      <v-flex>
        <span>友链管理</span>
      </v-flex>

      <v-flex>
        <v-layout justify-end class="layout-add-style">
          <v-btn fab dark color="pink" @click="addBtn">
            <v-icon dark>add</v-icon>
          </v-btn>
        </v-layout>

      </v-flex>
    </v-layout>

    <v-data-table :headers="headers" :items="desserts" id="table-admin-blog" :rows-per-page-items="pageConfig">
      <template slot="items" slot-scope="props">
        <td>
          <a :href="props.item.link">{{ props.item.title }}</a>
        </td>
        <td class="text-xs-left">{{ props.item.desc }}</td>
        <td class="text-xs-left">
          <v-btn @click="updateBtn(props.item)" color="primary" fab small dark>
            <v-icon>edit</v-icon>
          </v-btn>

          <v-btn @click="deleteBtn(props.item)" color="primary" fab small dark>
            <v-icon>delete</v-icon>
          </v-btn>
        </td>

      </template>
    </v-data-table>

    <v-dialog v-model="dialogConfig.show" persistent max-width="500px">

      <v-card>
        <v-card-title>
          <span class="headline">{{dialogConfig.title}}</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>

              <v-flex xs12>
                <v-text-field v-model="linkParams.title" placeholder="标题" required @keyup.enter.native='dialogConfirm'></v-text-field>
              </v-flex>

              <v-flex xs12>
                <v-text-field v-model="linkParams.desc" required placeholder="描述" @keyup.enter.native='dialogConfirm'></v-text-field>
              </v-flex>

              <v-flex xs12>
                <v-text-field v-model="linkParams.link" required placeholder="链接" @keyup.enter.native='dialogConfirm'></v-text-field>
              </v-flex>

              <v-flex xs12>
                 <upload label="头像" :value='fileName' @formData='iconChange' />
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
import Upload from '../user/Upload'
import { mapActions } from 'vuex'
export default {
  data: _ => ({
    fileName: '',
    linkParams: {
      link: '',
      desc: '',
      icon: '',
      title: ''
    },
    dialogConfig: {
      show: false,
      title: '',
      action: 0,
      id: ''
    },
    pageConfig: [10, 25, { text: 'All', value: -1 }],
    headers: [
      { text: '标题', sortable: false },
        { text: '描述', sortable: false },
        { text: '操作', sortable: false, width: '180px' }
    ],
    desserts: []
  }),

  methods: {
    ...mapActions([
      'createLink',
      'linksAdmin',
      'updateLink',
      'deleteLink'
    ]),
    addBtn () {
      this.dialogConfig.title = '添加友链'
      this.dialogConfig.action = 1
      this.dialogConfig.show = true
    },
    updateBtn (row) {
      this.dialogConfig.title = '修改友链'
      this.dialogConfig.action = 2
      this.dialogConfig.id = row.id
      this.dialogConfig.show = true
    },
    deleteBtn (row) {
      this.deleteLink(row.id).then(res => {
        this.getLinks()
      })
    },
    iconChange (files) {
      if (files[0]) {
        this.linkParams.icon = files[0]
      }
    },
    dialogConfirm () {
      const config = this.dialogConfig
      const linkParams = this.linkParams
      let params = new FormData()
      params.append('title', linkParams.title)
      params.append('link', linkParams.link)
      params.append('desc', linkParams.desc)
      params.append('icon', linkParams.icon)

      if (config.action === 1) {
        this.createLink(params).then(res => {
          this.dialogConfig.show = false
          this.getLinks()
        })
      } else {
        this.updateLink({id: config.id, params: params}).then(res => {
          this.dialogConfig.show = false
          this.getLinks()
        })
      }
    },
    getLinks () {
      this.linksAdmin().then(res => {
        this.desserts = res
      })
    }
  },
  created () {
    this.getLinks()
  },
  components: {
    Upload
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

