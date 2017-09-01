function fade (oldContainer, newContainer, done) {
  function animateOut () {
    TweenLite.to(oldContainer, 0.5, {
      autoAlpha: 0,
      onComplete: animateIn
    })
  }

  function animateIn () {
    return new TimelineLite({ onComplete: done })
      .set(oldContainer, { display: 'none' })
      .set(newContainer, { autoAlpha: 0 })
      .to(newContainer, 0.7, { autoAlpha: 1 })
  }

  return animateOut()
}

export default fade
