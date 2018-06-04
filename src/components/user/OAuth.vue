<template lang="pug">
    span 开始认证
</template>


<script>
import {mapActions} from 'vuex'
export default {
  name: 'oauth',
  methods: {
    ...mapActions(['githubCheck'])
  },
  created () {
    const that = this
    const query = that.$route.query
    that.githubCheck({code: query.code}).then(res => {
      that.$router.push('/oauth/oauth-success')
    })
  }
}
</script>

