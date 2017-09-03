import Transition from './'

export default {
  home: {
    single: Transition.slideUp
  },
  single: {
    home: Transition.fade
  },

  // Default transition
  default: Transition.fade
}
