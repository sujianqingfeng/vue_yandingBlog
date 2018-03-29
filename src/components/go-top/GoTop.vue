<template>
    <transition name='bounce'>
        <md-button @click="goTop" v-show='show' class="md-icon-button md-raised">
            <md-icon>expand_less</md-icon>
        </md-button>
    </transition>

</template>


<script>
export default {
  name: 'goTop',
  data: () => ({
    show: false,
    beforeScrollTop: 0
  }),
  mounted () {
    this.$nextTick(() => {
      this.listener = window.addEventListener('scroll', this.scrollListener)
    })
  },
  methods: {
    scrollListener () {
      let curHeight = document.documentElement.scrollTop || document.body.scrollTop
      let viewHeight = document.documentElement.clientHeight

      if (curHeight > this.beforeScrollTop) {
        this.timer && clearInterval(this.timer)
      }

      this.show = (curHeight > viewHeight + 100)
      this.beforeScrollTop = curHeight
    },
    goTop () {
      this.timer = setInterval(this.startScroll, 50)
    },
    startScroll () {
      let curHeight = document.documentElement.scrollTop || document.body.scrollTop
      let now = curHeight
      let speed = (0 - now) / 7
      speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed)
      if (curHeight === 0) {
        this.timer && clearInterval(this.timer)
      } else {
        document.documentElement.scrollTop = curHeight + speed
        document.body.scrollTop = curHeight + speed
      }
    }
  },
  destroyed () {
    this.listener && window.removeEventListener(this.listener)
  }
}
</script>


<style>
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
