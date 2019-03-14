<template>
  <div class="list-container">
      <daily-report v-for = "daily in storyList" :key="daily.date"
                    :dailyStories="daily.stories"
                    :date="daily.date">
      </daily-report>
  </div>
</template>
<script>
import DailyReport from '@/components/DailyReport'
export default {
  props: ['storyList'],
  components: {
    DailyReport
  }
}
</script>
<style lang="stylus" scoped>
</style>
