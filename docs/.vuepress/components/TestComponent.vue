<template>
  <div>
    <h5 v-html="msg"></h5>
    .vuepress/components 里的组件会被默认注册成全局组件
    <textarea class="ttt" v-model="msg" rows="4" cols="80"></textarea>
  </div>
</template>
<script>
export default {
  name: "TestComponent",
  data() {
    return {
      msg: "test 全局组件",
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
