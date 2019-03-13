<template>
  <div class="main-container">
    <div v-if="latestData">
        <daily-report :dailyStories="latestData.stories"
                  :date="latestData.date"></daily-report>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import DailyReport from '@/components/DailyReport'
export default {
  data () {
    return {
      latestData: null,
      showErr: false
    }
  },
  components: {
    DailyReport
  },
  created () {
    this.getLatestData()
  },
  methods: {
    getLatestData () {
      axios
        .get('api/4/news/latest')
        .then(res => {
          console.log(res.data)
          this.latestData = res.data
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.main-container
  padding .5rem
</style>
