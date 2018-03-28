<template>
  <div id="app">
    <ul>
      <router-link tag='li' to="/">首页</router-link>
      <router-link tag='li' to="/hello">实例</router-link>
    </ul>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color:#000;
  width:100%;
}

li{ list-style:none;}
</style>
