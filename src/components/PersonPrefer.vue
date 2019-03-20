<template>
  <div>
    <com-header></com-header>
    <div class="summary-list-container"  ref="preferWrapper">
      <div>
        <extend-list :extendTitle="collectTitle"
                      :dataList="collectArticles">
          <article-summary v-for="item in collectArticles" class="summary"
                          :key="item.id"
                          :summary="item">
          </article-summary>
        </extend-list>
        <extend-list :extendTitle="goodTitle"
                      :dataList="goodArticles">
          <article-summary v-for="(item, index) of goodArticles"  class="summary"
                          :key="index"
                          :summary="item.article">
          </article-summary>
        </extend-list>
      </div>
    </div>
  </div>
</template>
<script>
import ComHeader from '@/components/Header'
import BScroll from 'better-scroll'
import ExtendList from '@/components/ExtendList'
import ArticleSummary from '@/components/ArticleSummary'
import { mapState } from 'vuex'
export default {
  data () {
    return {
      collectTitle: '我收藏的文章',
      goodTitle: '我赞过的文章'
    }
  },
  computed: {
    ...mapState(['collectArticles', 'goodArticles'])
  },
  components: {
    ComHeader,
    ExtendList,
    ArticleSummary
  },
  methods: {
    bindScroll () {
      this.scroll = new BScroll(this.$refs.preferWrapper, {
        click: true,
        scrollY: true,
        probeType: 1
      })
    }
  },
  mounted () {
    this.bindScroll()
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
  .summary-list-container
    position fixed
    left 0
    right 0
    bottom 0
    top $height48
    overflow hidden
    .summary
      margin 1rem .5rem
    .loading
      position fixed
      top 50%
      height $height48
      margin-top -24px
      left 0
</style>
