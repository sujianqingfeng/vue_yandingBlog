<template>
    <md-drawer :md-active.sync="showNavigation">

        <div class="drawer-header md-layout">
            <md-avatar>
                <img :src="avatar" alt="Avatar">
            </md-avatar>
        </div>

        <md-list>
            <md-list-item md-expand :md-expanded.sync="expandNews">
                <md-icon>whatshot</md-icon>
                <span class="md-list-item-text">News</span>

                <md-list slot="md-expand">
                    <md-list-item class="md-inset">World</md-list-item>
                    <md-list-item class="md-inset">Europe</md-list-item>
                    <md-list-item class="md-inset">South America</md-list-item>
                </md-list>
            </md-list-item>

            <md-list-item md-expand>
                <md-icon>videogame_asset</md-icon>
                <span class="md-list-item-text">Games</span>

                <md-list slot="md-expand">
                    <md-list-item class="md-inset">Console</md-list-item>
                    <md-list-item class="md-inset">PC</md-list-item>
                    <md-list-item class="md-inset">Phone</md-list-item>
                </md-list>
            </md-list-item>

            <md-list-item md-expand>
                <md-icon>video_library</md-icon>
                <span class="md-list-item-text">Video</span>

                <md-list slot="md-expand">
                    <md-list-item class="md-inset">Humor</md-list-item>
                    <md-list-item class="md-inset">Music</md-list-item>
                    <md-list-item class="md-inset">Movies</md-list-item>
                    <md-list-item class="md-inset">TV Shows</md-list-item>
                </md-list>
            </md-list-item>

            <md-list-item>
                <md-icon>shopping_basket</md-icon>
                <span class="md-list-item-text">Shop</span>
            </md-list-item>
        </md-list>
    </md-drawer>

</template>

<script>
export default {
  name: 'editNav',
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      avatar: require('../index/avatar.jpg'),
      expandNews: []
    }
  },
  computed: {
    showNavigation: {
      get: function () {
        return this.show
      },
      set: function (v) {
        this.$emit('update:show', v)
      }
    }
  },
  methods: {}
}
</script>


<style scoped>
.avatar {
  display: block;
  margin: 20px auto 15px;
}
</style>
