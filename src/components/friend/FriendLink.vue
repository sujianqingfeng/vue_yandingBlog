<template>

  <v-app>
    <v-toolbar color="transparent" flat scroll-off-screen>
      <v-btn icon @click.native="$router.go(-1)">
        <v-icon>arrow_back</v-icon>
      </v-btn>
    </v-toolbar>

    <v-content fluid fill-height class="blog-container">

      <v-card>
        <v-layout class="blog-header-height blog-header-bg display-1" d-flex align-end px-3 py-3>
          <span>大佬们的链接</span>
        </v-layout>

        <v-layout px-3 py-3 class="friend-content">

          <v-flex v-for="item in friend" :key="item.link" mx-3 md4>
            <friend-item :item='item' />
          </v-flex>
        </v-layout>

      </v-card>

    </v-content>

    <v-footer height="180px">
      <blog-footer :info='info' />
    </v-footer>
  </v-app>

</template>

<script>
import FriendItem from './FriendItem'
import BlogFooter from 'components/index/BlogFooter'
import { mapGetters, mapActions } from 'vuex'
import TextUtil from '../../utils/TextUtils'
export default {
  name: 'friend',
  components: {
    FriendItem,
    BlogFooter
  },
  methods: {
    ...mapActions(['getFriend', 'getUser'])
  },
  computed: {
    ...mapGetters(['friend', 'info'])
  },
  created () {
    const id = this.$route.params.id
    this.getFriend(id)
    !TextUtil.isEmpty(id) && this.getUser(id)
  }
}
</script>

<style lang="stylus" scoped>
.friend-content
  min-height 900px
</style>

