<template>
  <div class="comments-container" @click="handleClick">
    <img src="@/assets/images/comments.png" class="icon"><span class="count">{{countInfo.totalCount}}</span>
  </div>
</template>
<script>
export default {
  props: ['countInfo', 'articleId'],
  methods: {
    handleClick () {
      this.$router.push({
        path: `/comments/${this.articleId}`,
        query: this.countInfo
      })
    }
  }
}
</script>
<style lang="stylus" scoped>
.comments-container
  display inline-block
  height 48px
  line-height 48px
  text-align center
  cursor pointer
  img
    vertical-align middle
  .count
    margin-left 6px
    vertical-align middle
</style>
