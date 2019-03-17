<template>
  <div class="collect-container" @click="handleCollect">
     <img :src="require('@/assets/images/' + imgArr[0])" v-show="!curStatus">
     <img :src="require('@/assets/images/' + imgArr[1])" v-show="curStatus">
  </div>
</template>
<script>
export default {
  props: {
    curSelected: Boolean,
    imgArr: Array
  },
  computed: {
    curStatus () {
      return this.curSelected
    }
  },
  methods: {
    handleCollect () {
      this.$emit('statusChange')
    }
  }
}
</script>
<style lang="stylus" scoped>
.collect-container
  width 48px
  height 48px
  line-height 48px
  text-align center
  cursor pointer
  img
    vertical-align middle
</style>
