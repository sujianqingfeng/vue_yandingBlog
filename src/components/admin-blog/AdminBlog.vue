<template>
  <v-card class="blog-container">

    <v-layout class="blog-header-height display-1" d-flex align-end px-3 py-3>
      <span>博客管理 </span>
    </v-layout>

    <v-data-table :headers="headers" :items="desserts" id="table-admin-blog" :rows-per-page-items="pageConfig">
      <template slot="items" slot-scope="props">
        <td> <a href="wwww.baidu.com">{{ props.item.name }}</a> </td>
        <td class="text-xs-left">{{ props.item.value }}</td>
        <td class="text-xs-left">
          <v-btn color="primary" fab small dark>
            <v-icon>edit</v-icon>
          </v-btn>

          <v-btn color="primary" fab small dark>
            <v-icon>delete</v-icon>
          </v-btn>
        </td>

      </template>
    </v-data-table>

  </v-card>
</template>

<script>
export default {
  data () {
    return {
      pagination: {
        sortBy: 'name'
      },
      pageConfig: [10, 25, {'text': 'All', 'value': -1}],
      headers: [
        {
          text: '标题',

          sortable: false
        },
        { text: '时间', value: 'calories', sortable: false },
        { text: '操作', value: 'fat', sortable: false, width: '180px' }
      ],
      desserts: [
        {
          value: false,
          name: 'Frozen Yogurt'
        },
        {
          value: false,
          name: 'Ice cream sandwich'
        },
        {
          value: false,
          name: 'Eclair'
        },
        {
          value: false,
          name: 'Cupcake'
        },
        {
          value: false,
          name: 'Gingerbread'
        },
        {
          value: false,
          name: 'Jelly bean'
        },
        {
          value: false,
          name: 'Lollipop'
        },
        {
          value: false,
          name: 'Honeycomb'
        },
        {
          value: false,
          name: 'Donut'
        },
        {
          value: false,
          name: 'KitKat'
        }
      ]
    }
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
</style>

