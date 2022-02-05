<script setup>
import { reactive, ref } from "@vue/reactivity";
import { ElMessageBox, ElMessage } from "element-plus";

import { clearItem } from "@/utils/storage.js";

import useRandom from "./useRandom.js";
let { userList, addUser, removeUSer, resultUser, startRandom } = useRandom();

// 重新开始
const restart = () => {
  clearItem("userList");
  location.reload();
};

// 抽签弹窗
const dialogIsShow = ref(false);
// 开始抽奖
const start = () => {
  dialogIsShow.value = true;
  startRandom();
};

// 新增一个用户
const addOneUser = () => {
  ElMessageBox.prompt("请输入用户名称", "新增用户", {
    inputPattern: /.+/,
    inputErrorMessage: "用户名称不能为空",
    confirmButtonText: "确定",
    cancelButtonText: "取消",
  })
    .then(({ value }) => {
      addUser(value);
      ElMessage({
        type: "success",
        message: `成功添加用户:${value}`,
      });
    })
    .catch(() => {
      ElMessage({
        type: "info",
        message: "已取消",
      });
    });
};

// 删除一个用户
const removeOneUser = (index, username) => {
  ElMessageBox.confirm(`确认删除${username}吗?`, "删除用户", {
    confirmButtonText: "删除",
    cancelButtonText: "取消",
    type: "warning",
  })
    .then(() => {
      removeUSer(index);
      ElMessage({
        type: "success",
        message: `删除用户:${username}成功!`,
      });
    })
    .catch(() => {
      ElMessage({
        type: "info",
        message: "已取消",
      });
    });
};
</script>

<template>
  <div>
    <el-card class="box-card">
      <template #header>
        <div class="flex justify-between">
          <span>随机点名器</span>
          <span>还剩 {{ userList.length }} 个同学没有抽</span>
          <div>
            <el-button type="primary" @click="restart">重新开始</el-button>
            <el-button type="primary" @click="start">点击抽取</el-button>
          </div>
        </div>
      </template>
      <div>
        <!-- 图标 -->
        <div class="flex flex-wrap justify-center align-center">
          <div
            class="px-1 py m-1 border-hover border-white cursor-pointer"
            v-for="(item, index) in userList"
            :key="item"
          >
            <div
              style="width: 70px"
              class="round-2 hidden"
              @click="removeOneUser(index, item)"
            >
              <img
                src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic_360_360%2Fe7%2F2b%2F41%2Fe72b4160d28b1ea976dc90368cfc955e.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639044499&t=a17950cd55993684906c7152b605a507"
              />
            </div>
            <div class="text-center font-weight-bold">{{ item }}</div>
          </div>
          <!-- 添加用户按钮 -->
          <div
            class="
              m-1
              round-perfect
              border border-hover
              cursor-pointer
              flex
              align-center
              justify-center
            "
            style="width: 80px; height: 80px"
            @click="addOneUser"
          >
            <div class="text-center f-2">+</div>
          </div>
        </div>
      </div>
    </el-card>
  </div>

  <!-- 弹出的框 -->
  <el-dialog v-model="dialogIsShow" @close="resultUser.length = 0">
    <!-- 抽中的用户 -->
    <div>
      <div class="text-center f-2 mb-3">恭喜这位同学被抽中了！！！</div>
      <div class="flex justify-center">
        <div class="big-icon" v-for="item in resultUser" :key="item">
          <div style="width: 150px">
            <img
              src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic_360_360%2Fe7%2F2b%2F41%2Fe72b4160d28b1ea976dc90368cfc955e.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639044499&t=a17950cd55993684906c7152b605a507"
            />
          </div>
          <div class="text-center font-weight-bold f-1">{{ item }}</div>
        </div>
      </div>
    </div>
    <template #footer>
      <div class="dialog-footer">
        <el-button type="primary" @click="dialogIsShow = false">确定</el-button>
      </div>
    </template>
  </el-dialog>
</template>


<style scoped>
h1 {
  color: red;
}
</style>