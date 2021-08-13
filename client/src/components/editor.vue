<!--
 * @Author: HuYanan
 * @Date: 2021-08-13 11:19:38
 * @LastEditTime: 2021-08-13 19:08:40
 * @LastEditors: HuYanan
 * @Description: 
 * @Version: 0.0.1
 * @FilePath: /ultron-vue/client/src/components/editor.vue
 * @Contributors: [HuYanan, other]
-->

<template>
  <div class="editor">
    <Menu />
    <ToolBox/>
  </div>
</template>

<script>
import Menu from './menu.vue'
import ToolBox from './ToolBox.vue'
export default {
  name: 'HelloWorld',
  components: {
    Menu,
    ToolBox
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .editor {
    ::v-deep {
      .ToolBox {
        top: 36px;
      }
    }
  }
</style>
