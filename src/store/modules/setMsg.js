import * as mutationTypes from '../mutationTypes'

const setMsg = {
	state:{
		name: 'jiangweijia',
    	age: 10
	},
	mutations:{
		[mutationTypes.SETNAME] (state,payload){
	    	state.name = payload.name,
	    	state.age = payload.age
	    }
	},
	actions:{
		 //传参数dispatch mutations.SETNAME
	    setName ({commit},obj){
	    	commit('setMsg/SETNAME',obj)
	    }
	}
}

export default setMsg;