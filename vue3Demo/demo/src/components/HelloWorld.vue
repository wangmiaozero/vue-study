<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: wangmiao
 * @Date: 2020-07-06 09:34:18
 * @LastEditors: wangmiao
 * @LastEditTime: 2020-07-06 09:45:36
--> 
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
