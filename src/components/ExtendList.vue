<template>
  <div class="extend-container">
    <div class="count-container">
      <span class="text">{{extendTitle}}</span>
      <div class="operate-item" v-if="showExtendBtn">
        <icon-change :curSelected = "showData"
                :imgArr = "extendImgs"
                @statusChange = "changeShow">
        </icon-change>
      </div>
    </div>
    <div class="no-data" v-if="showMsg">
      暂无数据
    </div>
    <div class="list-container" v-show="showList">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import IconChange from '@/components/IconChange'
export default {
  props: {
    extendTitle: String,
    dataList: Array
  },
  computed: {
    showExtendBtn () {
      return this.dataList.length > 3
    },
    showMsg () {
      return this.dataList.length === 0
    },
    showList () {
      return this.showData || !this.showExtendBtn
    }
  },
  data () {
    return {
      extendImgs: ['extend.png', 'close.png'],
      showData: false
    }
  },
  components: {
    IconChange
  },
  methods: {
    changeShow (show) {
      this.showData = show
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
.extend-container
  .count-container
    display flex
    justify-content space-between
    padding 0 1.5rem
    height $height48
    line-height $height48
    border-1px-top(#dddddd)
    border-1px-bottom(#dddddd)
    font-size $font-medium
    .text
      vertical-align middle
  .no-data
    height $height72
    line-height $height72
    text-align center
    color #bbbbbb
    font-size $font-large
</style>
