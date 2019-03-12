<template>
  <div id="app">
    <com-header></com-header>
    <router-view></router-view>
  </div>
</template>

<script>
import ComHeader from '@/components/Header'
export default {
  components: {
    ComHeader
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.v-enter-active,
.v-leave-active{
  transition all .8s
}
.v-enter,
.v-leave-to{
  transform translateX(1rem)
}
</style>
