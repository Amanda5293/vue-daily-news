<template>
  <div class="loading-container">
    <img src="@/assets/loading.png" alt="loading">
  </div>
</template>
<script>
export default {
  name: 'Loading'
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.loading-container
  width 100%
  height $height40
  text-align center
  img
    display inline-block
    width $height40
    height 100%
    animation rotate .8s infinite

@keyframes  rotate{
  0%{
    transform rotate(0)
  }
  100%{
    transform rotate(360deg)
  }
}
</style>
