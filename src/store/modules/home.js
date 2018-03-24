
import * as mutationTypes from '../mutationTypes'
const count = {
	state:{
		userMsg:''
	},
	mutations:{
		[mutationTypes.SET_USER_NAME](state,userMsg){
			state.userMsg=userMsg
		}
	},
	actions:{
		setUserMsg({commit},userMsg){
			commit('home/SET_USER_NAME',userMsg)
		}
	}
}

export default count;