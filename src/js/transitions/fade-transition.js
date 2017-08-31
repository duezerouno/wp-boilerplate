import Barba from 'barba.js'

const FadeTransition = Barba.BaseTransition.extend({
  start() {
    Promise.all([
      this.newContainerLoading,
      this.animateOut()
    ])
    .then(this.animateIn.bind(this));
  },

  animateOut() {
    return new Promise((resolve, reject) => {
      TweenLite.to(this.oldContainer, 0.5, {
        autoAlpha: 0,
        onComplete: resolve
      })
    })
  },

  animateIn() {
    return new TimelineLite({
      onComplete: () => {
        this.done()
      }
    })
    .set(this.oldContainer, { display: 'none' })
    .set(this.newContainer, { autoAlpha: 0 })
    .to(this.newContainer, 0.7, { autoAlpha: 1 })
  }
})

export default FadeTransition
