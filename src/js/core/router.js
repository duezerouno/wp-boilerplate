import Barba from 'barba.js'
import Views from '../views'
import Transition from '../transitions'

import Utils from '../util'

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
    Barba.Dispatcher.on('initStateChange', this.handleStateChange)
    Barba.Dispatcher.on('transitionCompleted', this.handleTransitionCompleted)
  }

  getTransition () {
    Barba.Pjax.getTransition = () => {
      return Transition.default
    }
  }

  handleStateChange = () => {
    this.utils.lock()
  }

  handleTransitionCompleted = () => {
    this.utils.unlock()
  }
}

export default new Router()
