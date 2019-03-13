/**
 * @param {图片地址} url
 */
function getImageUrl (url) {
  if (url !== undefined) {
    let _u = url.substring(7)
    return 'https://images.weserv.nl/?url=' + _u
  }
}

/**
 * @param {日期} originDate  "20190313"
 */
function handleDateTitle (originDate) {
  let year = parseInt(originDate.substring(0, 4))
  let month = parseInt(originDate.substring(4, 6))
  let day = parseInt(originDate.substring(6))
  let nowDate = new Date()
  let nowYear = nowDate.getFullYear()
  let nowMonth = nowDate.getMonth() + 1
  let nowDay = nowDate.getDate()
  if (year === nowYear && month === nowMonth && day === nowDay) {
    return '今日热闻'
  } else {
    return `${month}月${day}日`
  }
}

export {
  getImageUrl,
  handleDateTitle
}
