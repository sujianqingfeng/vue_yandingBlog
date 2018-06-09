<template lang="pug">
v-card.blog-container
    v-layout.blog-header-bg.display-1.blog-header-height(d-flex,px-3,py-3,align-end)
        v-flex 摘要管理
        v-flex 
            v-layout.layout-add-style(justify-end)
                v-btn(fab,dark,color='pink',@click='addBtn')
                    v-icon(dark) add
    
    v-data-table(:headers='headers',:items='items',:loading='loading',:rows-per-page-items="pageConfig")
        template(slot='items',slot-scope='props')
            td {{props.item.sumary_url}}
            td
                v-btn(@click="updateBtn(props.item)",color="primary",fab,small,dark)
                    v-icon edit

                v-btn(@click="deleteBtn(props.item)",color="primary",fab,small,dark)
                    v-icon delete

    v-dialog(v-model="dialogConfig.show",persistent,max-width="500px")
        v-card
            v-card-title
                span {{dialogConfig.title}}
            v-card-text
                v-container
                    v-layout
                        v-flex
                            <upload label="图片" :value='fileName' @formData='iconChange' />
            v-card-actions
                v-spacer
                v-btn(color='blue darken-1',flat,@click.native= 'dialogConfig.show = false') 关闭
                v-btn(color='blue darken-1',flat,@click.native= 'dialogConfirm') 确定
            


        
</template>


<script>
import Upload from '../user/Upload'
import {mapActions} from 'vuex'
export default {
  data: () => ({
    headers: [{
      text: 'url',
      sortable: false
    },
    { text: '操作', sortable: false, width: '180px' }],
    items: [],
    dialogConfig: {
      show: false,
      title: '',
      action: 0,
      id: ''
    },
    summaryParams: {
      sumary_url: ''
    },
    loading: false,
    fileName: '',
    pageConfig: [10, 25, { text: 'All', value: -1 }]
  }),
  methods: {
    ...mapActions(['getSummarys', 'createSummary', 'updateSummary', 'deleteSummary']),
    addBtn () {
      let that = this
      that.dialogConfig.title = '添加摘要'
      that.dialogConfig.action = 1
      that.dialogConfig.show = true
    },
    dialogConfirm () {
      let that = this
      let data = new FormData()
      data.append('sumary_url', that.summaryParams.sumary_url)
      if (that.dialogConfig.action === 1) {
        that.createSummary(data).then(res => {
          that.dialogConfig.show = false
          that.start()
        })
      } else {
        const id = that.dialogConfig.id
        that.updateSummary({id: id, params: data}).then(res => {
          that.dialogConfig.show = false
          that.start()
        })
      }
    },
    updateBtn (item) {
      console.log(item)
      let that = this
      that.dialogConfig.title = '修改摘要'
      that.dialogConfig.action = 2
      that.dialogConfig.id = item.id
      that.dialogConfig.show = true
    },
    deleteBtn (item) {
      let that = this
      that.deleteSummary(item.id).then(res => {
        that.start()
      })
    },
    iconChange (files) {
      if (files[0]) {
        this.summaryParams.sumary_url = files[0]
      }
    },
    start () {
      this.getSummarys().then(res => {
        this.items = res.data
      })
    }
  },
  created () {
    this.start()
  },
  components: {
    Upload
  }
}
</script>

