<template>
    <v-container>
        <v-layout>
            <v-flex md4>
                 <v-btn v-show="preShow" @click.native="preClick" fab light>
                    <v-icon>arrow_back</v-icon>
                </v-btn>
            </v-flex>
            <v-flex md4 d-flex justify-center align-center class="title">{{page}}</v-flex>
            <v-flex md4>
                <v-layout justify-end>
                    <v-btn v-show="nextShow" @click.native="nextClick" fab light>
                        <v-icon>arrow_forward</v-icon>
                    </v-btn>
                </v-layout>

            </v-flex>
        </v-layout>
    </v-container>
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

<style scoped>

.material-icons {
  line-height: 55px;
}
</style>

