const weekday = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']

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
 * 根据日期处理标题
 * @param {日期} originDate  "20190313"
 */
function handleDateTitle (originDate) {
  let year = parseInt(originDate.substring(0, 4))
  let month = parseInt(originDate.substring(4, 6))
  let day = parseInt(originDate.substring(6))
  originDate = new Date(year, month - 1, day)
  let week = weekday[originDate.getDay()]
  let nowDate = new Date()
  let nowYear = nowDate.getFullYear()
  let nowMonth = nowDate.getMonth() + 1
  let nowDay = nowDate.getDate()
  if (year === nowYear && month === nowMonth && day === nowDay) {
    return '今日热闻'
  } else {
    return `${month}月${day}日 ${week}`
  }
}

/**
 * @param {前(后)天数}
 */
function getDay (day) {
  let time = new Date()
  time.setDate(time.getDate() + day)
  let year = time.getFullYear()
  let month = time.getMonth() + 1
  month = month > 9 ? month : ('0' + month)
  let date = time.getDate()
  date = date > 9 ? date : ('0' + date)
  return `${year}${month}${date}`
}

function loadCss (url) {
  let css = document.createElement('link')
  css.href = url
  css.rel = 'stylesheet'
  css.type = 'text/css'
  document.head.appendChild(css)
  return css
}

function removeCss (linkDom) {
  document.head.removeChild(linkDom)
}

export {
  getImageUrl,
  handleDateTitle,
  getDay,
  loadCss,
  removeCss
}
