<template>
  <div class="comment-container">
    <div class="avatar">
      <img :src="imgUrl">
    </div>
    <div class="info-container">
      <div class="author">{{commentInfo.author}}</div>
      <div class="comment">{{commentInfo.content}}</div>
      <div class="date">{{commentDate}}</div>
    </div>
  </div>
</template>
<script>
import { getImageUrl, formatDate } from '@/utils/common.js'
export default {
  props: ['commentInfo'],
  computed: {
    imgUrl () {
      return getImageUrl(this.commentInfo.avatar)
    },
    commentDate () {
      return formatDate(this.commentInfo.time)
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
.comment-container
  display flex
  justify-content space-between
  padding 1.5rem
  &:not(:last-child)
    border-1px-bottom(#dddddd)
  .avatar
    width $height60
    height  $height60
    margin-right 1rem
    img
      width 100%
      height 100%
      border-radius 50%
  .info-container
    flex 1
    .author
      margin-bottom 1rem
      font-weight 600
      font-size $font-medium
    .comment
      margin-bottom 1rem
      line-height 1.3
      font-size $font-medium
    .date
      color #bbbbbb
</style>
