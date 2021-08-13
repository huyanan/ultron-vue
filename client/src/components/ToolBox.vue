<!--
 * @Author: HuYanan
 * @Date: 2021-08-13 11:20:51
 * @LastEditTime: 2021-08-13 19:06:06
 * @LastEditors: HuYanan
 * @Description: 
 * @Version: 0.0.1
 * @FilePath: /ultron-vue/client/src/components/ToolBox.vue
 * @Contributors: [HuYanan, other]
-->

<template>
  <div class="ToolBox">
    
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.ToolBox {
  position: absolute;
  top: 50px;
  bottom: 0px;
  width: 65px;
  background-color: #353535;
}
</style>
