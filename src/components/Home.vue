<template>
  <div class="home">
    {{mag}}
    <div>===============================</div>
    搜索匹配姓名
    <Input type='text' v-model='name' />
    <div v-if='userMsg==""'>暂无数据</div>
    <transition-group appear enter-active-class="bounceInLeft animated"  leave-active-class="bounceOutRight animated" tag='div'>
    <div v-if='seachName' :key='index' v-for='(msg,index) in seachName'>
    	<ul>
    		<li>{{index}}</li>
    		<li>姓名：{{msg.name}}</li>
    		<li>公司：{{msg.company.bs}}</li>
    		<li>所在城市：{{msg.address.city}}</li>
    		<li>电话：{{msg.phone}}</li>
    	</ul>
    </div>
    </transition-group>
  </div>
</template>

<script>
import axios from 'axios';
import {mapState,mapActions} from 'vuex'
export default {
  name: 'Home',
  data(){
  	return {
  		mag:'这是首页，模拟请求用户列表',
  		name:''
  	}
  },
  computed:{
  	//解构store中的state
  	...mapState({
  		userMsg: state => state.home.userMsg
  	}),
  	seachName(){
  		let arr = [];
  		for (let i=0; i<this.userMsg.length; i++){
  			if(this.userMsg[i].name.indexOf(this.name)>-1)
  			{arr.push(this.userMsg[i])}
  		}
  		return arr
  	}
  },
  created(){
  	// 向jsonplaceholder发送 get 请求
	axios({
    method: 'get',
    url: 'http://jsonplaceholder.typicode.com/users'
  }).then(resp => {
    //请求完成后数据保存到store中
    this.setMsg(resp.data)
    return axios({
              method: 'get',
              url: 'http://jsonplaceholder.typicode.com/users'
            })
  }).then(res => {
      console.log(res.status)
  });
  },
  methods:{
    //解构store中的action
  	...mapActions({
  		setMsg: 'setUserMsg'
  	})
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
