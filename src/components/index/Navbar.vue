<template>
    <md-sidenav class="md-left" ref="leftSidenav" >
    </md-sidenav>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {}
  },
  methods: {
    toggle () {
      this.$refs.leftSidenav.toggle()
    }
  }
}
</script>


<style scoped>

</style>
