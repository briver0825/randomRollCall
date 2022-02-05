<template>
  <div class="p-2 bg">
    <el-button v-if="route.name !== 'Home'" @click="router.go(-1)" size="small"
      ><el-icon><back /></el-icon>返回</el-button
    >
    <div v-else class="text-center text-white f-1-5 font-weight-bold">
      小朱点名系统
    </div>
  </div>
  <router-view></router-view>
  <div class="p bg fixed-bottom text-center">
    <a href="https://beian.miit.gov.cn/" class="f text-white decoration-none"
      >ICP证: 京ICP备12048441号-8</a
    >
  </div>
</template>

<script setup>
import { Back } from "@element-plus/icons";
import { useRoute, useRouter } from "vue-router";
const router = useRouter();
const route = useRoute();
</script>

<style>
img {
  width: 100%;
}
#app {
  min-height: 100vh;
  box-sizing: border-box;
}
</style>