<template>

    <div class="index-warpper">

        <md-button v-show="navigations.lenght>0" @click="iconClick" class="md-icon-button">
            <md-icon>format_list_numbered</md-icon>
        </md-button>

        <ol class="index-ol" v-show="show">
            <li class="index-li" :key="item" v-for="(item,index) in navigations">
                <a  v-on:click='goIndex(index)'>{{item}}</a>
            </li>
          
        </ol>

    </div>

</template>

<script>
export default {
  name: 'blogIndex',
  props: {
    navigations: Array
  },
  data: () => ({
    show: false
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
    },
    goIndex (index) {
      document.getElementById('n' + index).scrollIntoView()

      // this.timer = setInterval(this.startScroll, 50, index)
    },
    startScroll (index) {
      let curHeight = document.getElementById('n' + index).scrollTop - document.documentElement.scrollTop
      console.log(index, curHeight)
      let now = curHeight
      let speed = (0 - now) / 7
      speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed)
      if (curHeight === 0) {
        this.timer && clearInterval(this.timer)
      } else {
        console.log(curHeight + speed)
        document.getElementById('n' + index).scrollTop = curHeight + speed
        document.documentElement.scrollTop = curHeight + speed
      }
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
