<template>
  <div id="app" class="header-container">
        <router-link class="tab-item" tag="div" to="/main">首页</router-link>
        <router-link class="tab-item" tag="div" to="/person">
          <img src="@/assets/images/person.png">
        </router-link>
  </div>
</template>
<script>
export default {
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.header-container
  display flex
  justify-content space-around
  height $height48
  font-size $font-medium
  background-color $themeColor
  color #ffffff
  .tab-item
      width 33.33%
      text-align center
      line-height  $height48
      font-weight 600
      img
        margin 6px 0
      &.router-link-active
      &:hover
        position:relative
        &::after
          position absolute
          content ''
          width 8px
          height 8px
          bottom 0
          left 50%
          margin-left -5px
          background-color $borderColor
          border-radius 50%
</style>
