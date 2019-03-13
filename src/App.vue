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
</style>
