<template>
  <div>
    <h2>Description</h2>
    <slot name="description"></slot>
    <h2>Example</h2>
    <slot name="demo"></slot>
    <h2>Source Code</h2>
    <slot name="source"></slot>
  </div>
</template>
<script>
export default {
  name: "CustomDemoBlock",
};
</script>
