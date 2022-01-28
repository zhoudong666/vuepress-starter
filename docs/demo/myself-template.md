<custom-demo-block>

  <div slot="description">
    <!--render-description:xxx:render-description-->
    1-description description
  </div>

  <template slot="demo">
    <!--render-demo:xxx:render-demo-->
    2- 引用的组件标签
    <hello-world></hello-world>
  </template>

<template slot="source">
    <!--render-source:xxx:render-source-->
    
```html
<template>
  <div>
    <h2 v-html="msg"></h2>
    这是自定义渲染模板的测试组件 44
    <textarea class="ttt" v-model="msg" rows="4" cols="80"></textarea>
  </div>
</template>
<script>
  export default {
    name: "HelloWorld",
    data() {
      return {
        msg: "Hello World, Nice to meet you!44",
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
```

</template>
</custom-demo-block>
