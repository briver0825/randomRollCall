<template>
  <div class="p-2">
    <div class="flex justify-end pr-2">
      <el-button type="primary" @click="addDark">添加</el-button>
    </div>
    <div class="flex flex-wrap">
      <el-card
        class="m-1 cursor-pointer bg-red-300 dark:bg-blue-400"
        @click="router.push({ name: 'Random' })"
      >
        <template #header>
          <span class="f">江西软件职业技术大学</span>
          <span class="ml-2">C210308班</span>
        </template>
        <div>
          <div class="text-center my-2">
            <span class="f-5">45</span>
            <span class="ml-1">人</span>
          </div>
        </div>
      </el-card>
      <h1>你好</h1>
    </div>
  </div>
</template>
<script setup>
import { ref } from "@vue/reactivity";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();
const addDark = () => {
  document.documentElement.classList.add("dark");
};
const color = ref("red");
setTimeout(() => {
  color.value = "blue";
}, 1000);
</script>

<style>
h1 {
  color: v-bind(color);
}
</style>