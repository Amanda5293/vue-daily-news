<template>
  <router-link class="item-container" tag="div"
               :to="{name:'article',params:{id:summary.id}}">
    <div class="summary-area">
      <span>{{summary.title}}</span>
    </div>
    <div class="img-area">
      <img v-if="hasImg" :src="imgUrl">
    </div>
  </router-link>
</template>
<script>
import { getImageUrl } from '@/utils/common.js'
export default {
  props: [ 'summary' ],
  data () {
    return {
      hasImg: false,
      imgUrl: ''
    }
  },
  created () {
    this.initImgData()
  },
  methods: {
    initImgData () {
      let imgs = this.summary.images
      this.hasImg = imgs && imgs.length > 0
      this.imgUrl = getImageUrl(imgs[0])
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
.item-container
  display flex
  justify-content space-between
  margin-bottom 1rem
  padding 1rem
  background-color #ffffff
  border-radius .5rem
  box-shadow: 0 0 0.1rem #cdd
  font-size 1.25rem
  .summary-area
    padding-right 1rem
    span
      line-height 1.5rem
      vertical-align middle
  .img-area
    flex-shrink 0
    width $height72
    height $height72
    img
      width 100%
      height 100%
</style>
