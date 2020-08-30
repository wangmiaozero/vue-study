<!--
 * @Description: createElement demo
 * @Version: 1.0
 * @Autor: wangmiao
 * @Date: 2020-07-06 09:34:18
 * @LastEditors: wangmiao
 * @LastEditTime: 2020-07-06 11:00:25
--> 
<template>
  <div class="home">

  </div>
</template>

<script>


export default {
  name: 'Home',
  components: {
    
  },
  data(){
    return{
       formInline: {
          user: '',
          region: ''
       }
    }
  },
  mounted(){
 
  },
  methods: {
    $_handleInputUser(value) {
    this.formInline.user = value
  },
  $_handleChangeRegion(value) {
    this.formInline.region = value
  },
  $_handleSubmit() {}
},
  /**
  *将 h 作为 createElement 的别名是 Vue 生态系统中的一个通用惯例，实际上也是 JSX 所要求的。从 Vue 的 Babel 插件的 3.4.0   *版本开始，我们会在以 ES2015 语法声明的含有 JSX 的任何方法和 getter 中 (不是函数或箭头函数中) 自动注入 
  *const h = this.$createElement，这样你就可以去掉 (h) 参数了。对于更早版本的插件，如果 h 在当前作用域中不可用，应用会抛错。
 */
render(h) {
    return (
      <ElForm inline model={this.formInline} class="demo-form-inline">
        <ElFormItem label="审批人">
          <ElInput
            value={this.formInline.user}
            onInput={this.$_handleInputUser}
            placeholder="审批人"
          ></ElInput>
        </ElFormItem>
        <ElFormItem label="活动区域">
          <ElSelect
            value={this.formInline.region}
            onChange={this.$_handleChangeRegion}
            placeholder="活动区域"
          >
            <ElOption label="区域一" value="shanghai"></ElOption>
            <ElOption label="区域二" value="beijing"></ElOption>
          </ElSelect>
        </ElFormItem>
        <ElFormItem>
          <ElButton type="primarty" onClick={this.$_handleSubmit}>
            查询
          </ElButton>
        </ElFormItem>
      </ElForm>
    )
  }
}
</script>
