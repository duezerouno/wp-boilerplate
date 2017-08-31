import Barba from 'barba.js'
import Emitter from '../core/emitter'

const Home = Barba.BaseView.extend({
	namespace: 'home',

	onEnter () {
    Emitter.emit('VIEW_READY', { namespace: this.namespace })
	},

	onEnterCompleted () {},

	onLeave () {},

	onLeaveCompleted () {}
})

export default Home
