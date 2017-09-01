import config from './config'

import debounce from 'lodash.debounce'
import Utils from './util'

import Router from './core/router'
import Preloader from './core/preloader'
import Emitter from './core/emitter'

import Transition from './transitions'

import {
  WINDOW_RESIZE,
  APP_READY
} from './config/constants'


class App {
  constructor () {
    this.el = config.app

    this.init()
  }

  init () {
    Utils.detectPointer.listen()

    Emitter.on(APP_READY, this.ready)

    Preloader.init()
  }

  ready = () => {
    Router.init()

    this.addEventListeners()
    this.animateIn()
  }

  addEventListeners () {
    window.addEventListener('resize', debounce(this.broadcastResize, 200))
  }

  animateIn () {
    return Transition.tween.fadeIn(this.el)
  }

  broadcastResize = () => {
    Emitter.emit(WINDOW_RESIZE, {
      width: window.innerWidth,
      height: window.innerHeight
    })
  }
}

export default App
