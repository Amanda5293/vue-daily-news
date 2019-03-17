<template>
  <div class="back-container" @click="back">
    <img src="@/assets/images/back.png" alt="⬅">
  </div>
</template>
<script>
export default {
  methods: {
    back () {
      if (window.history.length <= 1) {
        this.$router.push({path: '/'})
      } else {
        this.$router.go(-1)
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
.back-container
  width 48px
  height 48px
  line-height 48px
  img
    vertical-align middle
</style>
