import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
	state () {
		return {
			works: {}
		}
	},
	mutations: {
		setWorks (state, value) {
			state.works = value;
		}
	}
})
const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
