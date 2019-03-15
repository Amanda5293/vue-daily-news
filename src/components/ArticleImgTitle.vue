<template>
  <div class="img-title-container">
    <img :src="imgAddress" class="article-img">
    <div class="title">{{title}}</div>
    <span class="source">{{imgSource}}</span>
  </div>
</template>
<script>
import { getImageUrl } from '@/utils/common.js'
export default {
  props: ['imgUrl', 'imgSource', 'title'],
  data () {
    return {
      imgAddress: getImageUrl(this.imgUrl)
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.img-title-container
  position absolute
  top -80px
  left 0
  right 0
  height 290px
  overflow hidden
  .article-img
    width 100%
  .title
    position absolute
    bottom 2.3rem
    line-height 1.2
    left 1.5rem
    letter-spacing .1rem
    font-size $font-large
    color #ffffff
  .source
    position absolute
    right 1.5rem
    bottom .8rem
    color #bbbbbb
</style>
