<template>
  <div id="app">MainPage</div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      latestData: null,
      showErr: false
    }
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
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl';
</style>
