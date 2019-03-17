<template>
  <div class="daily-container">
    <div class="date-container">
      {{dateTitle}}
    </div>
    <article-summary v-for="item in dailyStories"
                    :key="item.id"
                    :summary="item"></article-summary>
  </div>
</template>
<script>
import { handleDateTitle } from '@/utils/common.js'
import ArticleSummary from '@/components/ArticleSummary'
export default {
  props: {
    dailyStories: Array,
    date: String
  },
  data () {
    return {
      dateTitle: ''
    }
  },
  components: {
    ArticleSummary
  },
  created () {
    this.handleDate()
  },
  methods: {
    handleDate () {
      this.dateTitle = handleDateTitle(this.date)
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.daily-container
  .date-container
    height $height36
    line-height $height36
    font-size 1.3rem
    text-indent 1rem
    color #bbbbbb
</style>
