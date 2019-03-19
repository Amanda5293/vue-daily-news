<template>
  <div class="collect-container" @click="handleChange"
      :style="{backgroundImage:'url('+ require('@/assets/images/' + curImg) +')'}">
  </div>
</template>
<script>
export default {
  props: {
    curSelected: Boolean,
    imgArr: Array
  },
  computed: {
    curImg () {
      return this.curSelected ? this.imgArr[1] : this.imgArr[0]
    }
  },
  methods: {
    handleChange () {
      this.$emit('statusChange', !this.curSelected)
    }
  }
}
</script>
<style lang="stylus" scoped>
.collect-container
  position relative
  z-index 1
  width 48px
  height 48px
  background-repeat no-repeat
  background-position center center
</style>
