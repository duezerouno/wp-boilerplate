import fade from './transition.fade'
import slideUp from './transition.slide-up'

import fadeIn from './tween.fade-in'

export default {
  fade,
  slideUp,

  // Generic tweens that do not extend `Barba.BaseTransition`
  tween: {
    fadeIn
  }
}
