import config from '../config'
import Emitter from './emitter'
import { APP_READY } from '../config/constants'

class Preloader {
  constructor () {
    this.el = config.preloader
  }

  init () {
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

    Emitter.emit(APP_READY)
  }
}

export default new Preloader()
