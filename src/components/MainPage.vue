<template>
  <div>
    <com-header></com-header>
    <div class="main-container" ref="wrapper">
      <div class="content">
        <article-swiper v-if="topStories" :swiperList="topStories"></article-swiper>
        <div v-if="articleList.length >0 " class="list-area">
            <article-list :storyList="articleList"></article-list>
        </div>
        <loading v-show="showLoading"></loading>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import BScroll from 'better-scroll'
import ComHeader from '@/components/Header'
import ArticleList from '@/components/ArticleList'
import Loading from '@/components/Loading'
import ArticleSwiper from '@/components/ArticleSwiper'
import { getDay } from '@/utils/common.js'
export default {
  data () {
    return {
      articleList: [],
      topStories: null,
      showErr: false,
      showLoading: false,
      totalPreDays: 1,
      finish: false
    }
  },
  components: {
    ArticleList,
    Loading,
    ArticleSwiper,
    ComHeader
  },
  created () {
    this.getLatestData()
  },
  mounted () {
    this.bindScroll()
  },
  methods: {
    getLatestData () {
      this.showLoading = true
      axios.get('api/4/news/latest')
        .then(res => {
          let storiesData = res.data
          console.log(res.data)
          this.pushArticleList(storiesData)
          this.topStories = storiesData['top_stories']
          this.showLoading = false
        })
        .catch(err => {
          this.showLoading = false
          console.log(err)
        })
    },
    pushArticleList (data) {
      this.articleList.push({
        date: data.date,
        stories: data.stories
      })
    },
    loadMoreData () {
      if (!this.showLoading) {
        this.showLoading = true
        let date = getDay(--this.totalPreDays)
        axios.get(`api/4/news/before/${date}`)
          .then(res => {
            this.pushArticleList(res.data)
            this.scroll.finishPullUp()
            this.scroll.refresh()
            this.showLoading = false
          })
          .catch(err => {
            this.showLoading = false
            console.log(err)
          })
      }
    },
    bindScroll () {
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
        scrollY: true,
        probeType: 1,
        pullUpLoad: {
          threshold: -30 // 当上拉距离超过30px时触发 pullingUp 事件
        }
      })
      this.scroll.on('pullingUp', this.loadMoreData)
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.main-container
  position fixed
  top $height48
  bottom 0
  left 0
  right 0
  overflow hidden
  padding .5rem 0 1rem
  .list-area
    padding 0 .5rem
</style>
