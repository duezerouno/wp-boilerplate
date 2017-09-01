import Barba from 'barba.js'
import map from './map'

const ReducerTransition = Barba.BaseTransition.extend({
  start () {
    this.newContainerLoading.then(() => {
      const from = Barba.Pjax.History.prevStatus().namespace
      const to = Barba.Pjax.History.currentStatus().namespace

      return (map[from][to] || map.default)(
        this.oldContainer,
        this.newContainer,
        this.done.bind(this)
      )
    })
  }
})

export default ReducerTransition
