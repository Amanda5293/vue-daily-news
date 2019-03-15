<template>
  <div class="article-container">
    <div  v-if="articleInfo">
      <article-img-title :imgUrl="articleInfo.image"
                       :imgSource="articleInfo['image_source']"
                       :title="articleInfo.title"></article-img-title>
      <div class="article-content" v-html="content"></div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import { getImageUrl, loadCss, removeCss } from '@/utils/common.js'
import ArticleImgTitle from '@/components/ArticleImgTitle'
export default {
  data () {
    return {
      id: 0,
      articleInfo: null,
      content: '',
      cssArray: [],
      linkDom: []
    }
  },
  components: {
    ArticleImgTitle
  },
  created () {
    this.getArticleDetail()
  },
  destroyed () {
    removeCss(this.linkDom[0])
  },
  methods: {
    getArticleDetail () {
      this.id = this.$route.params.id
      axios.get(`/api/4/news/${this.id}`)
        .then((res) => {
          this.articleInfo = res.data
          this.content = this.articleInfo.body
          this.cssArray = this.articleInfo.css
          this.handleContent()
          this.loadContentCss()
          console.log(this.articleInfo)
        })
        .catch(err => console.log(err))
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
    loadContentCss () {
      let tempLinkDom = []
      for (let i = 0, len = this.cssArray.length; i < len; i++) {
        tempLinkDom.push(loadCss(this.cssArray[i]))
      }
      this.linkDom = tempLinkDom
    }
  }
}
</script>
<style lang="stylus" scoped>
</style>
