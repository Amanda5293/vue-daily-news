<template>
  <div class="comments-container" @click="handleClick">
    <img src="@/assets/images/comments.png" class="icon">
    <span class="count">{{count}}</span>
  </div>
</template>
<script>
export default {
  props: ['count', 'articleId'],
  methods: {
    handleClick () {
      this.$router.push({path: `/comments/${this.articleId}`})
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
