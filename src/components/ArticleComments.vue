<template>
  <div class="comments-container">
    <article-detail-header :hasTransition="false">
      <span>{{title}}</span>
    </article-detail-header>
    <div class="comments-list" ref="commentsWrapper">
      <div>
        <extend-list :extendTitle="longTitle" v-if="longComments"
                    :dataList="longComments">
          <comment v-for="item in longComments"
                  :key="item.id"
                  :commentInfo="item">
          </comment>
        </extend-list>
        <extend-list :extendTitle="shortTitle" v-if="shortComments"
                    :dataList="shortComments">
          <comment v-for="item in shortComments"
                  :key="item.id"
                  :commentInfo="item">
          </comment>
        </extend-list>
        <loading class="loading" v-else></loading>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import BScroll from 'better-scroll'
import ArticleDetailHeader from '@/components/ArticleDetailHeader'
import ExtendList from '@/components/ExtendList'
import Comment from '@/components/Comment'
import Loading from '@/components/Loading'
export default {
  data () {
    return {
      articleId: 0,
      countInfo: null,
      longComments: null,
      shortComments: null,
      shortTitle: '',
      longTitle: ''
    }
  },
  computed: {
    title () {
      return `${this.countInfo.totalCount}条点评`
    }
  },
  components: {
    ArticleDetailHeader,
    ExtendList,
    Comment,
    Loading
  },
  created () {
    this.countInfo = this.$route.query
    this.articleId = this.$route.params.articleId
    this.getLongComments()
    this.getShortComments()
  },
  mounted () {
    this.bindScroll()
  },
  methods: {
    getLongComments () {
      axios.get(`/api/4/story/${this.articleId}/long-comments`)
        .then((res) => {
          let data = res.data
          this.longComments = data.comments
          this.longTitle = this.getTitleByType(false)
        })
    },
    getShortComments () {
      axios.get(`/api/4/story/${this.articleId}/short-comments`)
        .then((res) => {
          let data = res.data
          this.shortComments = data.comments
          this.shortTitle = this.getTitleByType(true)
        })
    },
    getTitleByType (isShort) {
      let longCount = this.countInfo.longCount
      let shortCount = this.countInfo.shortCount
      if (isShort) {
        return shortCount > 20 ? '部分短评' : `${this.shortComments.length}条短评`
      } else {
        return longCount > 20 ? '部分长评' : `${this.longComments.length}条长评`
      }
    },
    bindScroll () {
      this.scroll = new BScroll(this.$refs.commentsWrapper, {
        click: true,
        scrollY: true,
        probeType: 1
      })
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.comments-container
  width 100%
  .comments-list
    position absolute
    left 0
    right 0
    bottom 0
    top $height48
    .loading
      position fixed
      top 50%
      height $height48
      margin-top -24px
      left 0
</style>
