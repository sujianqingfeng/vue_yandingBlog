const setCookie = (name, value) => {
  let Days = 7
  let exp = new Date()
  exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000)
  document.cookie = name + '=' + escape(value) + ';expires=' + exp.toGMTString()
}

const getCookie = (name) => {
  let reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
  let arr = document.cookie.match(reg)
  if (arr) { return unescape(arr[2]) } else { return null }
}

export {
    setCookie,
    getCookie
}
