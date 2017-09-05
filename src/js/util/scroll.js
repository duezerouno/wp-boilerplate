import config from '../config'

export default {
  to (x, y) {
    window.scroll(x, y)
  },

  reset () {
    this.to(0, 0)
  },

  current () {
    if (window.pageYOffset) return window.pageYOffset
    return document.documentElement.clientHeight
      ? document.documentElement.scrollTop
      : document.body.scrollTop
  }
}
