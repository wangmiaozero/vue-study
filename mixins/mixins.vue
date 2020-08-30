<template>
<div>
    home
</div>
</template>
<script>
import {mixinsTest} from './util/mixins.js'
export default {
  name: "Home",
  data () {
    return {
    };
  },
  created(){
      console.log("home");
      
  },
  //mixins的created会先被调用,然后再执行组件的created
  mixins:[mixinsTest]
}
</script>