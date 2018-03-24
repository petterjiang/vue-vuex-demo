import Vue from 'vue'
import Vuex from 'vuex'
import count from './modules/count'
import setMsg from './modules/setMsg'
import home from './modules/home'

Vue.use(Vuex)
//store
const store = new Vuex.Store({
  modules:{
  	count:count,
  	setMsg:setMsg,
  	home:home
  }
})

export default store;