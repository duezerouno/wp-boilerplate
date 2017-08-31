import Barba from 'barba.js'

class Emitter {
  emit (evt, payload) {
    console.log(`%c ${evt}`, 'color: #ff6796', '\n', payload || '')
    return Barba.Dispatcher.trigger(evt, payload)
  }

  on (evt, fn) {
    return Barba.Dispatcher.on(evt, fn)
  }

  off (evt, fn) {
    return Barba.Dispatcher.off(evt, fn)
  }
}

export default new Emitter()
