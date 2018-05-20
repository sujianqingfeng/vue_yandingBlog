<template>
  <v-card class="blog-container">

    <v-layout class="blog-header-height blog-header-bg display-1" d-flex align-end px-3 py-3>

      <v-flex>
        <span>博客管理</span>
      </v-flex>

      <v-flex>
        <v-layout justify-end class="layout-add-style">
          <v-btn @click="$router.push('/admin/editBlog')" fab dark color="pink">
            <v-icon dark>add</v-icon>
          </v-btn>
        </v-layout>

      </v-flex>
    </v-layout>

    <v-layout mx-3 my-4>

      <v-flex md4>
        <v-text-field v-model="search" label="Search" single-line hide-details></v-text-field>
      </v-flex>

      <v-flex ml-4>
        <v-btn color="primary" class="white--text" @click.native="getBlogs">
          搜索
          <v-icon right dark>search</v-icon>
        </v-btn>
      </v-flex>

    </v-layout>

    <v-data-table :headers="headers" :items="desserts" id="table-admin-blog" :rows-per-page-items="pageConfig" :pagination.sync="pagination" :total-items="totalDesserts" :loading="loading">
      <template slot="items" slot-scope="props">
        <td>
          <a @click="$router.push('/detail/'+props.item.id)">{{ props.item.title }}</a>
        </td>
        <td class="text-xs-left">{{ props.item.category.name }}</td>
        <td class="text-xs-left">{{ props.item.add_time }}</td>
        <td class="text-xs-left">
          <v-btn @click="$router.push('/admin/editBlog/'+props.item.id)" color="primary" fab small dark>
            <v-icon>edit</v-icon>
          </v-btn>

          <v-btn @click="deleteBtn(props.item.id)" color="primary" fab small dark>
            <v-icon>delete</v-icon>
          </v-btn>
        </td>

      </template>
    </v-data-table>

  </v-card>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      pagination: {},
      loading: false,
      totalDesserts: 0,
      pageConfig: [10, 25, { text: 'All', value: -1 }],
      headers: [
        { text: '标题', sortable: false },
        { text: '类别', sortable: false },
        { text: '时间', sortable: false },
        { text: '操作', sortable: false, width: '180px' }
      ],
      desserts: [],
      search: ''
    }
  },
  methods: {
    ...mapActions([
      'getBlogsByAdmin',
      'deleteBlog'
    ]),
    deleteBtn (id) {
      this.deleteBlog(id).then(res => {
        this.getBlogs()
      })
    },
    getBlogs () {
      this.loading = true
      const { page, rowsPerPage } = this.pagination
      const search = this.search

      const params = { page: page, page_seze: rowsPerPage, title: search }

      this.getBlogsByAdmin(params).then(res => {
        this.loading = false
        this.desserts = res.results
        this.totalDesserts = res.count
      })
    }
  },
  watch: {
    pagination: {
      handler: 'getBlogs',
      deep: true
    }
  },
  created () {
    this.getBlogs()
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

