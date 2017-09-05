import config from '../config'
import emitter from './emitter'
import { APP_READY } from '../config/constants'
import utils from '../util'

class Preloader {
  constructor () {
    this.el = config.preloader
  }

  init () {
    utils.detectPointer()
    utils.detectBrowser()

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

    emitter.emit(APP_READY)
  }
}

export default new Preloader()
