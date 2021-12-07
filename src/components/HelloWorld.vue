<template>
  <div>
    <h5 v-html="msg"></h5>
    这是自定义渲染模板的测试组件
    <textarea class="ttt" v-model="msg" rows="4" cols="80"></textarea>
  </div>
</template>
<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Hello World, Nice to meet you!",
    };
  },
};
</script>
<style scoped>
.ttt {
  resize: none;
  color: red;
}
</style>
