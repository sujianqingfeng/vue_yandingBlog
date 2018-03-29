<template>

    <div class="index-warpper">

        <md-button @click="iconClick" class="md-icon-button">
            <md-icon>format_list_numbered</md-icon>
        </md-button>

        <ol class="index-ol" v-show="show">
            <li class="index-li">
                <a href="">1. dddd</a>
            </li>
            <li class="index-li">
                <a href="">2. fff</a>
            </li>
            <li class="index-li">
                <a href="">3. ggg</a>
            </li>
            <li class="index-li">
                <a href="">3. ggg</a>
            </li>
            <li class="index-li">
                <a href="">3. ggg</a>
            </li>
            <li class="index-li">
                <a href="">3. ggg</a>
            </li>
            <li class="index-li">
                <a href="">3. ggg</a>
            </li>
            <li class="index-li">
                <a href="">3. ggg</a>
            </li>
        </ol>

    </div>

</template>

<script>
export default {
  name: 'blogIndex',
  data: () => ({
    show: true
  }),
  mounted () {
    this.$nextTick(() => {
      this.listener = window.addEventListener('click', this.click)
    })
  },
  methods: {
    iconClick (e) {
      this.show = !this.show
      e.stopPropagation ? e.stopPropagation() : (e.cancelBubble = true)
    },
    click (event) {
      this.show = event.target.className.includes('index-li')
    }
  },
  destroyed () {
    this.listener && window.removeEventListener(this.listener)
  }
}
</script>

<style scoped>
.index-warpper {
  position: fixed;
  left: 14px;
  top: 60px;
}

.index-ol {
  background-color: white;
  min-width: 200px;
  max-height: 100px;
  margin-left: 13px;
  overflow-y: scroll;
}

.index-li {
  padding-left: 10px;
  padding-top: 4px;
  padding-bottom: 4px;
}

.index-ol li a {
  color: #aaaaaa;
  font-weight: 100;
}

.index-ol li a:hover {
  color: #b3d4fc;
}
</style>
