<script setup lang="ts">
import Button from "@/component/Button";
import Dialog from "@/component/Dialog/index.vue";
import { ref } from "vue";

const dialogVisible = ref(true);

function open() {
  dialogVisible.value = true;
}
</script>
<template>
  <div class="mt-[24px]">
    <h2 class="text-[30px] mb-[12px]">Dialog 对话框</h2>
    <div>
      <Button type="primary" @click="open">开关</Button>
      <Dialog v-model="dialogVisible" title="标题" />
    </div>
  </div>
</template>
