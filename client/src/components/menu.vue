<!--
 * @Author: HuYanan
 * @Date: 2021-08-13 11:20:51
 * @LastEditTime: 2021-08-13 19:04:20
 * @LastEditors: HuYanan
 * @Description: 
 * @Version: 0.0.1
 * @FilePath: /ultron-vue/client/src/components/menu.vue
 * @Contributors: [HuYanan, other]
-->

<template>
  <el-menu
    :default-active="activeIndex2"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b">
    <el-menu-item index="1">文件</el-menu-item>
    <el-submenu index="2">
      <template #title>我的工作台</template>
      <el-menu-item index="2-1">选项1</el-menu-item>
      <el-menu-item index="2-2">选项2</el-menu-item>
      <el-menu-item index="2-3">选项3</el-menu-item>
      <el-submenu index="2-4">
        <template #title>选项4</template>
        <el-menu-item index="2-4-1">选项1</el-menu-item>
        <el-menu-item index="2-4-2">选项2</el-menu-item>
        <el-menu-item index="2-4-3">选项3</el-menu-item>
      </el-submenu>
    </el-submenu>
    <el-menu-item index="3" disabled>消息中心</el-menu-item>
    <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
  </el-menu>
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
  .el-menu-demo.el-menu--horizontal {
    ::v-deep .el-menu-item {
      height: 36px;
      line-height: 36px;
      font-size: 12px;
      padding: 0;
      margin-right: 4px;
    }
    ::v-deep .el-submenu {
      .el-submenu__title {
        height: 36px;
        line-height: 36px;
        font-size: 12px;
        padding: 0;
        margin-right: 4px;
      }
    }
  }
</style>
