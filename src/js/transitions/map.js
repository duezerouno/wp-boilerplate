import transition from './'

export default {
  home: {
    single: transition.slideUp
  },
  single: {
    home: transition.fade
  },

  // Default transition
  default: transition.fade
}
