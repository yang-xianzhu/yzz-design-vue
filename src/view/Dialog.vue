<script setup lang="ts">
import Button from "@/component/Button";
import Dialog from "@/component/Dialog/index.vue";
import { ref } from "vue";

const dialogVisible = ref(false);

function open() {
  dialogVisible.value = true;
}
</script>
<template>
  <div class="mt-[24px]">
    <h2 class="text-[30px] mb-[12px]">Dialog 对话框</h2>
    <div>
      <Button type="primary" @click="open">开关</Button>
      <Dialog v-model="dialogVisible" title="标题" destroy-on-close>
        <h1>context</h1>
        <h1>context</h1>
        <h1>context</h1>
        <h1>context</h1>
        <h1>context</h1>
        <input type="text" />
        <!-- <template #footer> footer </template> -->
      </Dialog>
    </div>
  </div>
</template>
