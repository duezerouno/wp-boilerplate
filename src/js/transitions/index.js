import fadeInOut from './fade-transition'
import fadeIn from './fade-in'

export default {
  default: fadeInOut,

  // Generic tween functions that do not extend `Barba.BaseTransition`
  tween: {
    fadeIn
  }
}
