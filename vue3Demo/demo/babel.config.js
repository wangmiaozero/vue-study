/*
 * @Description: 
 * @Version: 1.0
 * @Autor: wangmiao
 * @Date: 2020-07-06 09:34:18
 * @LastEditors: wangmiao
 * @LastEditTime: 2020-07-06 10:51:10
 */ 
module.exports = {
  "presets": [["es2015", { "modules": false }]],
  "plugins": [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}