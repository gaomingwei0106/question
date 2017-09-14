<template>
  <div id="app">
    <router-view class="content"></router-view>
  </div>
</template>

<script>
import './css/reset.css';
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
html{
  width: 100%;
  height: 100%;
}
body{
  width: 100%;
  height: 100%;
  background: url('imgs/bg.jpg') no-repeat; 
  background-size: 100% 100%;
  margin: 0;
  padding: 0;
}
.content{
  width: 100%;
  height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100%;
  color: #2c3e50;
  position: relative;
}

</style>
