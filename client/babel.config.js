/*
 * @Author: HuYanan
 * @Date: 2021-08-13 10:57:10
 * @LastEditTime: 2021-08-13 11:50:53
 * @LastEditors: HuYanan
 * @Description: 
 * @Version: 0.0.1
 * @FilePath: /ultron-vue/client/babel.config.js
 * @Contributors: [HuYanan, other]
 */
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    [
      "import",
      {
        libraryName: 'element-plus',
        customStyleName: (name) => {
          name = name.slice(3)
          return `element-plus/packages/theme-chalk/src/${name}.scss`;
        },
      },
    ],
  ],
}
