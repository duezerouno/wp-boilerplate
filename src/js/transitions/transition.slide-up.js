function slideUp (oldContainer, newContainer, done) {
  const transform = 20

  function animateOut () {
    TweenLite.to(oldContainer, 0.5, {
      y: -transform,
      autoAlpha: 0,
      onComplete: animateIn
    })
  }

  function animateIn () {
    return new TimelineLite({ onComplete: done })
      .set(oldContainer, { display: 'none' })
      .set(newContainer, { autoAlpha: 0, y: transform })
      .to(newContainer, 0.7, { autoAlpha: 1, y: 0 })
  }

  return animateOut()
}

export default slideUp
