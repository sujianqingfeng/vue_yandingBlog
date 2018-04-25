<template>
    <div class="md-layout ">

        <div class="md-layout-item md-layout md-alignment-center-left">
            <md-button  @click="preClick" v-show="preShow" class="md-icon-button md-raised">
                <md-icon>arrow_back</md-icon>
            </md-button>
        </div>

        <div class="md-layout-item md-layout md-alignment-center-center">
            {{page}}
        </div>

        <div class="md-layout-item  md-layout md-alignment-center-right">
            <md-button @click="nextClick" v-show="nextShow" class="md-icon-button md-raised">
                <md-icon>arrow_forward</md-icon>
            </md-button>
        </div>
        
    </div>
</template>



<script>
export default {
  name: 'userInfo',
  props: {
    page: Number,
    preShow: Boolean,
    nextShow: Boolean
  },
  data: () => ({
    avatar: require('./avatar.jpg')
  }),
  methods: {
    nextClick () {
      this.$emit('nextPerform')
    },
    preClick () {
      this.$emit('prePerform')
    }
  }
}
</script>

<style >
.blog-pagination{
   
}
</style>

