import Barba from 'barba.js'
import Views from '../views'
import Transition from '../transitions'
import Emitter from './emitter'
import Utils from '../util'
import config from '../config'
import {
  INIT_STATE_CHANGE,
  NEW_PAGE_READY,
  TRANSITION_COMPLETED
} from '../config/constants'

class Router {
  static get state () {
    return {
      previous: Barba.Pjax.History.prevStatus() || false,
      current: Barba.Pjax.History.currentStatus()
    }
  }

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
    Barba.Pjax.getTransition = () => {
      return Transition.default
    }
  }

  handleStateChange = () => {
    this.utils.lock()
  }

  handleNewPageReady = () => {
    config.body.classList.add(`is-${Router.state.current.namespace}`)
    config.body.classList.remove(`is-${Router.state.previous.namespace}`)
  }

  handleTransitionCompleted = () => {
    this.utils.unlock()
  }
}

export default new Router()
