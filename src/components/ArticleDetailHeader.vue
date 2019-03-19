<template>
  <div>
    <transition name="fade" v-if="hasTransition">
      <div class="detail-header-container" v-show="showTitle">
        <back class="back"></back>
        <slot></slot>
      </div>
    </transition>
    <div v-else>
      <div class="detail-header-container" v-show="showTitle">
          <back class="back"></back>
          <slot></slot>
        </div>
      </div>
  </div>
</template>
<script>
import Back from '@/components/Back'
export default {
  props: {
    hasTransition: {
      type: Boolean,
      default: true
    }
  },
  components: {
    Back
  },
  data () {
    return {
      showTitle: true
    }
  },
  methods: {
    scrollChange () {
      const top = document.documentElement.scrollTop
      if (top > 48) {
        this.showTitle = false
      } else {
        this.showTitle = true
      }
    }
  },
  created () {
    if (this.hasTransition) {
      window.addEventListener('scroll', this.scrollChange, false)
    }
  },
  destroyed () {
    if (this.hasTransition) {
      window.removeEventListener('scroll', this.scrollChange, false)
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.fade-enter,
.fade-leave-to
  opacity 0
.fade-enter-active,
.fade-leave-active
  transition: opacity 1s ease
.detail-header-container
  position fixed
  top 0
  left 0
  right 0
  padding 0 1.5rem
  z-index 9
  display flex
  justify-content space-between
  height $height48
  line-height $height48
  font-size $font-medium
  background-color $themeColor
  color #ffffff
  cursor pointer

</style>
