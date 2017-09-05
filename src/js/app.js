import config from './config'
import debounce from 'lodash.debounce'
import preloader from './core/preloader'
import router from './core/router'
import emitter from './core/emitter'
import transition from './transitions'
import {
  WINDOW_RESIZE,
  APP_READY
} from './config/constants'

class App {
  constructor () {
    this.el = config.app

    TweenLite.defaultEase = Expo.easeOut

    this.init()
  }

  init () {
    emitter.on(APP_READY, this.ready)

    preloader.init()
  }

  ready = () => {
    router.init()

    this.addEventListeners()
    this.animateIn()
  }

  addEventListeners () {
    window.addEventListener('resize', debounce(this.broadcastResize, 200))
  }

  animateIn () {
    return transition.tween.fadeIn(this.el)
  }

  broadcastResize = () => {
    emitter.emit(WINDOW_RESIZE, {
      width: window.innerWidth,
      height: window.innerHeight
    })
  }
}

export default App
