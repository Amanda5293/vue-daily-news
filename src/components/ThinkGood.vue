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
      thinkGoodImgs: ['good-white.png', 'good.png'],
      curGood: this.thinkGood
    }
  },
  computed: {
    curCount () {
      return this.count
    }
  },
  components: {
    IconChange
  },
  methods: {
    handleThinkGood (value) {
      let count = value ? this.curCount + 1 : this.curCount - 1
      this.$emit('thinkGoodChange', value, count)
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
