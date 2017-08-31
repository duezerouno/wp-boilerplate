import config from '../config'

class RouterUtils {
  lock () {
    config.html.style.overflow = 'hidden'
    config.html.style.pointerEvents = 'none'
    config.html.style.cursor = 'wait'
  }

  unlock () {
    config.html.removeAttribute('style')
  }
}

export default new RouterUtils()
