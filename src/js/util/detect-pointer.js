import config from '../config'
import FastClick from 'fastclick'

function detectPointer () {
  const listen = () => {
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('touchstart', handleTouchStart)
  }

  const unlisten = () => {
    document.removeEventListener('mousemove', handleMouseMove)
    document.removeEventListener('touchstart', handleTouchStart)
  }

  const handleMouseMove = () => {
    unlisten()

    config.isMouse = true
    config.body.classList.add('is-mouse')
  }

  const handleTouchStart = () => {
    unlisten()

    config.isTouch = true
    config.body.classList.add('is-touch')

    FastClick.attach(config.body)
  }

  return listen()
}

export default detectPointer
