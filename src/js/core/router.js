import Barba from 'barba.js'
import Views from '../views'
import Emitter from './emitter'
import Utils from '../util'
import config from '../config'
import TransitionReducer from '../transitions/reducer'
import {
  INIT_STATE_CHANGE,
  NEW_PAGE_READY,
  TRANSITION_COMPLETED
} from '../config/constants'

class Router {
  constructor () {
    Barba.Pjax.Dom.wrapperId = 'app'
    Barba.Pjax.Dom.containerClass = 'view'

    this.utils = Utils.router
  }

  init () {
    this.addEventListeners()

    Views.map(view => view.init())
    Barba.Prefetch.init()
    Barba.Pjax.start()

    this.getTransition()
  }

  addEventListeners () {
    Emitter.on(INIT_STATE_CHANGE, this.handleStateChange)
    Emitter.on(NEW_PAGE_READY, this.handleNewPageReady)
    Emitter.on(TRANSITION_COMPLETED, this.handleTransitionCompleted)
  }

  getTransition () {
    Barba.Pjax.getTransition = () => TransitionReducer
  }

  handleStateChange = () => {
    this.utils.lock()
  }

  handleNewPageReady = () => {
    config.body.classList.add(`is-${Barba.Pjax.History.currentStatus().namespace}`)

    if (Barba.Pjax.History.prevStatus()) {
        config.body.classList.remove(`is-${Barba.Pjax.History.prevStatus().namespace}`)
    }
  }

  handleTransitionCompleted = () => {
    this.utils.unlock()
  }
}

export default new Router()
