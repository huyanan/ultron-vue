<!--
 * @Author: HuYanan
 * @Date: 2021-08-13 10:57:10
 * @LastEditTime: 2021-08-13 14:39:25
 * @LastEditors: HuYanan
 * @Description: 
 * @Version: 0.0.1
 * @FilePath: /ultron-vue/client/src/App.vue
 * @Contributors: [HuYanan, other]
-->
<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <Editor />
</template>

<script>
import Editor from './components/editor.vue'
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    Editor
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
