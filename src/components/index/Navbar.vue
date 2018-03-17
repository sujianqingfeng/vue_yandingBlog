<template>

  <md-drawer :md-active.sync="showNavigation" @md-closed="$emit('update:show', false)">
    <md-toolbar class="md-transparent" md-elevation="0">
      <span class="md-title">My App name</span>
    </md-toolbar>

    <md-list>
      <md-list-item>
        <md-icon>move_to_inbox</md-icon>
        <span class="md-list-item-text">Inbox</span>
      </md-list-item>

      <md-list-item>
        <md-icon>send</md-icon>
        <span class="md-list-item-text">Sent Mail</span>
      </md-list-item>

      <md-list-item>
        <md-icon>delete</md-icon>
        <span class="md-list-item-text">Trash</span>
      </md-list-item>

      <md-list-item>
        <md-icon>error</md-icon>
        <span class="md-list-item-text">Spam</span>
      </md-list-item>
    </md-list>
  </md-drawer>

</template>

<script>
export default {
  name: 'Navbar',
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      showNavigation: this.show
    }
  },
  methods: {

    goAboutMe () {
      this.$router.push({ path: '/about' })
    }
  }
}
</script>


<style scoped>
.avatar {
  display: block;
  margin: 20px auto 15px;
}
</style>
