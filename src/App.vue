<script setup lang="ts">
import Buttom from "@/component/Buttom";
import { ref } from "vue";

const list = ["small", "middle", "large"];

const currentIdx = ref(1);

function handleSize() {
  const num = currentIdx.value + 1;
  currentIdx.value = num > 2 ? 0 : num;
}
</script>

<template>
  <div class="p-12">
    <h2 class="my-[12px]">普通</h2>
    <Buttom type="primary">主要按钮</Buttom>
    <Buttom type="danger" className="ml-[4px]">警告按钮</Buttom>
    <Buttom type="danger" className="ml-[4px]" disabled>禁用按钮</Buttom>

    <h2 class="my-[12px]">圆角</h2>
    <Buttom type="primary" shape="round">主要按钮</Buttom>
    <Buttom type="danger" shape="round" className="ml-[4px]">警告按钮</Buttom>
    <Buttom type="danger" shape="round" className="ml-[4px]" disabled
      >禁用按钮</Buttom
    >
    <h2 class="my-[12px]">跟随父级宽度</h2>
    <div>
      <Buttom block type="primary">主要按钮</Buttom>
      <Buttom block type="danger" className="my-[12px]">警告按钮</Buttom>
      <Buttom block type="primary" disabled>禁用按钮</Buttom>
    </div>

    <h2 class="my-[12px]">按钮大小</h2>

    <div class="mb-[12px]">
      <Buttom type="primary" @click="handleSize">切换尺寸</Buttom>
      <span class="ml-[12px]">当前尺寸：{{ list[currentIdx] }}</span>
    </div>

    <Buttom type="primary" :size="list[currentIdx]">主要按钮</Buttom>
    <Buttom type="danger" :size="list[currentIdx]" className="ml-[4px]"
      >警告按钮</Buttom
    >
    <Buttom type="danger" :size="list[currentIdx]" className="ml-[4px]" disabled
      >禁用按钮</Buttom
    >
  </div>
</template>
