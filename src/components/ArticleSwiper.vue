<template>
  <div class="swiper-container">
      <swiper :options="adSwiperOption" ref="mySwiper" v-if="showSwiper">
            <!-- slides -->
            <swiper-slide v-for="item in swiperList" :key="item.id">
                <router-link tag="div" :to="{name:'article',params:{id:item.id}}" class="item-container">
                  <img class="swiper-img" :src="changeUrl(item.image)">
                  <p class="title">{{item.title}}</p>
                </router-link>
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
  </div>
</template>
<script>
import { getImageUrl } from '@/utils/common.js'
export default {
  props: ['swiperList'],
  data () {
    return {
      adSwiperOption: {
        pagination: '.swiper-pagination',
        autoplay: 3000,
        autoplayDisableOnInteraction: false,
        loop: true
      }
    }
  },
  computed: {
    showSwiper () {
      return this.swiperList.length
    }
  },
  methods: {
    changeUrl (url) {
      return getImageUrl(url)
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.swiper-container >>> .swiper-pagination-bullet-active
  background-color #4dfffe !important
.swiper-container >>> .swiper-pagination
  bottom .4rem !important
.swiper-container
  width 100%
  .item-container
    width 100%
    height 0
    padding-bottom 78%
    overflow hidden
    .swiper-img
      width 100%
    .title
      position absolute
      left 1.5rem
      right 1.5rem
      bottom 1.8rem
      line-height 1.2
      letter-spacing .1rem
      font-size $font-large
      color #ffffff
</style>
