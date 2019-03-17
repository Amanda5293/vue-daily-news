<template>
  <div class="think-good-container">
    <icon-change class="good-icon"
                :curSelected = "thinkGood"
                :imgArr = "thinkGoodImgs"
                @statusChange = "handleThinkGood">
    </icon-change>
    <span class="count">{{count}}</span>
  </div>
</template>
<script>
import IconChange from '@/components/IconChange'
export default {
  props: ['thinkGood', 'count'],
  data () {
    return {
      thinkGoodImgs: ['good-white.png', 'good.png']
    }
  },
  components: {
    IconChange
  },
  methods: {
    handleThinkGood () {
      this.$emit('thinkGoodChange')
    }
  }
}
</script>
<style lang="stylus" scoped>
.think-good-container
  display flex
  height 48px
  line-height 48px
  text-align center
  cursor pointer
  .count
    vertical-align middle
</style>
