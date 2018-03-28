<template>
  <div>
    <div>
    </div>
    <div v-html='abb'>
    </div>
    <div>
        <h2>下面是完整的Vuex的列子</h2>

        <h3>计数器</h3>
        <Button type="primary" @click='addo'>++</Button>
        <Button type="primary" @click='decrement'>--</Button>
        <Button type="primary" @click='lateIncrement'>延时2s++</Button>
        {{count}}

        <p>=======</p>
        <h3>填写姓名，年龄提交到store保存</h3>
        <Input v-model='person.name' placeholder='请输入姓名' />
        <Input v-model='person.age' placeholder='请输入年龄' />
        <Button type="primary" @click='setMsg'>提交</Button>
        <div>
            store中存储的名字：{{myName}}<br>
            store中存储的年龄：{{myAge}}<br>
            我将要修改的名字：{{person.name}}<br>
            我将要修改的年龄：{{person.age}}
        </div>
    </div>
  </div>
</template>

<script>
import { mapState , mapGetters,mapActions } from 'vuex'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '这是例子页面',
      person:{
        name:'',
        age:''
      }
    }
  },
  computed: {
    abb: function (){
      return `${this.msg}  <div>姓名：jiangweijia</div>`
    },
//    count(){
//      return this.$store.state.count.count
//    },
    ...mapState({
      count:state => state.count.count,
      myName:state => state.setMsg.name,
      myAge:state => state.setMsg.age
    })
  },
  methods:{
//    addo (){
//      this.$store.dispatch('increment');
//    },
    ...mapActions({
      addo:'increment', // 将 `this.add()` 映射为 `this.$store.dispatch('increment')`
      decrement:'decrement',
    }),
    ...mapActions([
      'lateIncrement',
      'setName'
    ]),
    setMsg (){
      let msg = {
        name:this.person.name,
        age:this.person.age
      }
      this.setName(msg)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
