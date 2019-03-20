<template>
  <div class="article-container">
    <article-detail-header>
      <div class="right-operate" v-if="articleInfo">
        <icon-change class="operate-item"
                :curSelected = "isCollect"
                :imgArr = "collectImgs"
                @statusChange = "handleCollect">
        </icon-change>
        <comments-icon class="operate-item" v-if="commentsInfo"
                       :countInfo="commentsInfo"
                       :articleId="id">
        </comments-icon>
        <think-good class="operate-item"
                :thinkGood = "isThinkGood"
                :count="popularity"
                @thinkGoodChange="handleThinkGood">
        </think-good>
      </div>
    </article-detail-header>
    <div v-if="articleInfo">
        <article-img-title :imgUrl="articleInfo.image"
                        :imgSource="articleInfo['image_source']"
                        :title="articleInfo.title"></article-img-title>
        <div class="article-content" v-html="content"></div>
    </div>
    <loading class="loading" v-else></loading>
  </div>
</template>
<script>
import axios from 'axios'
import { getImageUrl, loadCss, removeCss } from '@/utils/common.js'
import ArticleImgTitle from '@/components/ArticleImgTitle'
import ArticleDetailHeader from '@/components/ArticleDetailHeader'
import IconChange from '@/components/IconChange'
import ThinkGood from '@/components/ThinkGood'
import CommentsIcon from '@/components/CommentsIcon'
import Loading from '@/components/Loading'
import { mapGetters, mapMutations } from 'vuex'
export default {
  data () {
    return {
      id: 0,
      articleInfo: null,
      content: '',
      cssArray: [],
      linkDom: [],
      isCollect: false,
      isThinkGood: false,
      commentsInfo: null,
      popularity: 0,
      collectImgs: ['collect.png', 'collected.png']
    }
  },
  computed: {
    ...mapGetters(['getCollectById', 'getThinkGoodById'])
  },
  components: {
    ArticleImgTitle,
    ArticleDetailHeader,
    IconChange,
    ThinkGood,
    CommentsIcon,
    Loading
  },
  methods: {
    ...mapMutations([
      'handleStoreCollect',
      'handleStoreThinkGood'
    ]),
    getArticleDetail () {
      axios.get(`/api/4/news/${this.id}`)
        .then((res) => {
          this.articleInfo = res.data
          this.content = this.articleInfo.body
          this.cssArray = this.articleInfo.css
          this.loadContentCss()
          this.handleContent()
        })
        .catch(err => console.log(err))
    },
    getArticleExtraInfo () {
      axios.get(`/api/4/story-extra/${this.id}`)
        .then((res) => {
          let data = res.data
          this.commentsInfo = {
            totalCount: data.comments,
            shortCount: data['short_comments'],
            longCount: data['long_comments']
          }
          this.handlePrefer(data)
        })
    },
    handlePrefer (data) {
      let collect = this.getCollectById(this.id)
      let thinkGood = this.getThinkGoodById(this.id)
      this.isCollect = collect !== undefined
      this.isThinkGood = thinkGood !== undefined
      this.popularity = thinkGood ? thinkGood.curCount : data.popularity
    },
    handleContent () {
      let tempStr = this.content
      let imgReg = /<img.*?(?:>|\/>)/gi
      let srcReg = /src=['"]?([^'"]*)['"]?/i
      let imgArr = tempStr.match(imgReg)
      if (imgArr) {
        for (var i = 0; i < imgArr.length; i++) {
          let tempArr = imgArr[i].match(srcReg)
          let url = getImageUrl(tempArr[1])
          tempStr = tempStr.replace(tempArr[1], url)
        }
      }
      this.content = tempStr
    },
    handleCollect (value) {
      this.isCollect = value
      let article = this.articleInfo
      this.handleStoreCollect({isCollect: value, article})
    },
    handleThinkGood (value, count) {
      this.isThinkGood = value
      this.popularity = count
      let article = this.articleInfo
      this.handleStoreThinkGood({
        isGood: value,
        article,
        curCount: count
      })
    },
    loadContentCss () {
      let tempLinkDom = []
      for (let i = 0, len = this.cssArray.length; i < len; i++) {
        tempLinkDom.push(loadCss(this.cssArray[i]))
      }
      this.linkDom = tempLinkDom
    }
  },
  created () {
    this.id = parseInt(this.$route.params.id)
    this.getArticleDetail()
    this.getArticleExtraInfo()
  },
  destroyed () {
    removeCss(this.linkDom[0])
  }
}
</script>
<style lang="stylus" scoped>
.right-operate
  flex 1
  display flex
  flex-direction row-reverse
  .operate-item
    margin-left 10px
.loading
  position fixed
  top 50%
  height 48px
  margin-top -24px
  left 0
</style>
