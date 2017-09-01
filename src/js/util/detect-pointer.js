import config from '../config'
import FastClick from 'fastclick'

class DetectPointer {
  listen () {
    document.addEventListener('mousemove', this.handleMouseMove)
    document.addEventListener('touchstart', this.handleTouchStart)
  }

  unlisten() {
    document.removeEventListener('mousemove', this.handleMouseMove)
    document.removeEventListener('touchstart', this.handleTouchStart)
  }

  handleMouseMove = () => {
    this.unlisten()

    config.isMouse = true
    config.body.classList.add('is-mouse')
  }

  handleTouchStart = () => {
    this.unlisten()

    config.isTouch = true
    config.body.classList.add('is-touch')

    FastClick.attach(config.body)
  }
}

export default new DetectPointer()
