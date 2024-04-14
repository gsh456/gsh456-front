<script setup lang="ts">
import { ref } from "vue";
let msg = ref("hello"); // 把数据变成响应式的

function change() {
  msg.value = "world";
  console.log(msg);
}
</script>
<template>
  <h1>{{ msg }}</h1>
  <input type="button" value="修改msg" @click="change" />
</template>