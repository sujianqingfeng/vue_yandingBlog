<template>

  <v-app>
    <v-toolbar absolute color="transparent" flat scroll-off-screen>
      <v-btn icon @click.native="$router.go(-1)">
        <v-icon>arrow_back</v-icon>
      </v-btn>
    </v-toolbar>

    <v-container fluid fill-height class="friend-container">

      <v-layout>

        <v-flex>
          <friend-item/>
        </v-flex>

        <v-flex offset-md1>
          <friend-item/>
        </v-flex>

        <v-flex offset-md1>
          <friend-item/>
        </v-flex>

      </v-layout>

    </v-container>

    <v-footer height="auto">
      <blog-footer/>
    </v-footer>
  </v-app>

</template>

<script>
import FriendItem from './FriendItem'
import BlogFooter from 'components/index/BlogFooter'

export default {
  name: 'friend',
  components: {
    FriendItem,
    BlogFooter
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
