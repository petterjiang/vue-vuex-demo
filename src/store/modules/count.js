
import * as mutationTypes from '../mutationTypes'
const count = {
	state:{
		count:0
	},
	mutations:{
		[mutationTypes.INCREMENT] (state) {
	      state.count++
	    },
	    [mutationTypes.DECREMENT] (state) {
	      state.count--
	    }
	},
	actions:{
		increment (context) {
	      context.commit('count/INCREMENT')
	    },
	    decrement ({commit}){
			commit('count/DECREMENT')
	    },
	    //异步dispatch  mutations
	    lateIncrement ({commit}){
	    	setTimeout(()=>{
	    		commit('count/INCREMENT')
	    	},2000)
	    }
	}
}

export default count;