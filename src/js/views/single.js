import Barba from 'barba.js'
import Emitter from '../core/emitter'

const Single = Barba.BaseView.extend({
	namespace: 'single',

	onEnter () {
    Emitter.emit('VIEW_READY', { namespace: this.namespace })
	},

	onEnterCompleted () {},

	onLeave () {},

	onLeaveCompleted () {}
})

export default Single
