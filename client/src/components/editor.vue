<!--
 * @Author: HuYanan
 * @Date: 2021-08-13 11:19:38
 * @LastEditTime: 2023-01-03 10:56:04
 * @LastEditors: HuYanan
 * @Description: 
 * @Version: 0.0.1
 * @FilePath: /ultron-vue/client/src/components/editor.vue
 * @Contributors: [HuYanan, other]
-->

<template>
  <div class="editor">
    <TopMenu />
    <ToolBox/>
  </div>
</template>

<script>
import TopMenu from './TopMenu.vue'
import ToolBox from './ToolBox.vue'
export default {
  name: 'HelloWorld',
  components: {
    TopMenu,
    ToolBox
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  // .editor {
  //   ::v-deep {
  //     .ToolBox {
  //       top: 36px;
  //     }
  //   }
  // }
</style>
