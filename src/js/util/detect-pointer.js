import config from '../config'

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

    config.pointer.isMouse = true
    config.body.classList.add('is-mouse')
  }

  handleTouchStart = () => {
    this.unlisten()

    config.pointer.isTouch = true
    config.body.classList.add('is-touch')
  }
}

export default new DetectPointer()
