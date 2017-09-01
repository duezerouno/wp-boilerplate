import config from '../config'
import Emitter from './emitter'
import { APP_READY } from '../config/constants'
import Utils from './util'

class Preloader {
  constructor () {
    this.el = config.preloader
  }

  init () {
    Utils.detectPointer.listen()
    Utils.detectBrowser.init()

    this.animateIn()
  }

  animateIn = () => {
    TweenLite.to(this.el.querySelector('p'), 0.7, { opacity: 0.7, onComplete: this.animateOut })
  }

  animateOut = () => {
    TweenLite.to(this.el, 0.5, { opacity: 0, onComplete: this.done })
  }

  done = () => {
    this.el.parentNode.removeChild(this.el)

    config.body.classList.remove('is-loading')

    Emitter.emit(APP_READY)
  }
}

export default new Preloader()
