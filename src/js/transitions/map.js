import Transition from './'

export default {
  home: {
    single: Transition.fade
  },
  single: {
    home: Transition.slideUp
  },

  // Default transition
  default: Transition.fade
}
