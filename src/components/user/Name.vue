<template lang="pug">
    router-view(:user='user')
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'name',
  computed: {
    ...mapGetters(['user'])
  },
  methods: {
    ...mapActions(['getUserInfoByName'])
  },
  created () {
    const name = this.$route.params.name
    this.getUserInfoByName(name)
  }
}
</script>

