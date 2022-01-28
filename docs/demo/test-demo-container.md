::: demo 此处放置代码示例的描述信息，支持 `Markdown` 语法，**描述信息只支持单行**

```html
<template>
  <div class="red-center-text">
    <p>{{ message }}</p>
    <input v-model="message" placeholder="Input something..." />
    <div>{{num}}</div>

    <button @click="add">add 1</button>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        message: "Hello Vue",
        num: 0,
      };
    },
    methods: {
      add() {
        this.num += 1;
      },
    },
  };
</script>
<style>
  .red-center-text {
    color: #ff7875;
    text-align: center;
  }
</style>
```

:::

::: tip
=========================== 华丽分割线 ===========================
:::

### Badge <Badge text="beta" type="warning"/> <Badge text="默认主题"/>

<test-component/>

可展开与收起 代码
::: details 点击查看代码
<<< @/docs/.vuepress/components/TestComponent.vue
:::

<<< @/docs/.vuepress/components/TestComponent.vue
