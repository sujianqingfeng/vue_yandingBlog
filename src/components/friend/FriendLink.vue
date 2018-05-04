<template>

  <v-app>
    <v-toolbar  color="transparent" flat scroll-off-screen>
      <v-btn icon @click.native="$router.go(-1)">
        <v-icon>arrow_back</v-icon>
      </v-btn>
    </v-toolbar>

    <v-container fluid fill-height class="friend-container">

      <v-layout>

        <v-flex v-for="item in friend" :key="item.link"  md4 offset-md1>
          <friend-item :item='item'/>
        </v-flex>
      </v-layout>

    </v-container>

    < <v-footer height="180px">
      <blog-footer/>
    </v-footer>
  </v-app>

</template>

<script>
import FriendItem from './FriendItem'
import BlogFooter from 'components/index/BlogFooter'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'friend',
  components: {
    FriendItem,
    BlogFooter
  },
  methods: {
    ...mapActions(['getFriend'])
  },
  computed: {
    ...mapGetters([
      'friend'
    ])
  },
  created () {
    const id = this.$route.params.id
    this.getFriend(id)

    // TextUtil.isEmpty(this.info) && this.getUser(id)
  }
}
</script>

<style>
.friend-container {
  width: 900px;
  margin: 0 auto;
}

.friend-header {
  height: 100px;
}
</style>
