
let articlesStorage = localStorage.getItem('collect')
let thinkGoodStorage = localStorage.getItem('thinkGood')

let collectArticles = articlesStorage ? JSON.parse(articlesStorage).data : []

let goodArticles = thinkGoodStorage ? JSON.parse(thinkGoodStorage).data : []

console.log(collectArticles)

export default {
  collectArticles,
  goodArticles
}
