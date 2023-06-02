<script setup lang="ts">
import Button from "@/component/Button";
import { ref } from "vue";

const list = ["small", "middle", "large"];

const currentIdx = ref(1);

const loading = ref(true);

function handleSize() {
  const num = currentIdx.value + 1;
  currentIdx.value = num > 2 ? 0 : num;
}

function handleLoading() {
  loading.value = !loading.value;
}
</script>

<template>
  <div class="p-12">
    <h2 class="my-[12px]">普通</h2>
    <Button type="primary">主要按钮</Button>
    <Button type="success" className="ml-[4px]">成功按钮</Button>
    <Button type="warning" className="ml-[4px]">提示按钮</Button>
    <Button type="danger" className="ml-[4px]">警告按钮</Button>
    <Button type="danger" className="ml-[4px]" disabled>禁用按钮</Button>

    <h2 class="my-[12px]">胶囊</h2>
    <Button type="primary" shape="round">主要按钮</Button>
    <Button type="danger" shape="round" className="ml-[4px]">警告按钮</Button>
    <Button type="danger" shape="round" className="ml-[4px]" disabled
      >禁用按钮</Button
    >

    <h2 class="my-[12px]">圆角</h2>
    <Button type="primary" shape="circle" icon="add"></Button>
    <Button
      type="danger"
      shape="circle"
      icon="star"
      className="ml-[4px]"
    ></Button>
    <Button
      type="warning"
      shape="circle"
      className="ml-[4px]"
      icon="search"
    ></Button>

    <h2 class="my-[12px]">跟随父级宽度</h2>
    <div>
      <Button block type="primary">主要按钮</Button>
      <Button block type="danger" className="my-[12px]">警告按钮</Button>
      <Button block type="primary" disabled>禁用按钮</Button>
    </div>

    <h2 class="my-[12px]">按钮大小</h2>

    <div class="mb-[12px]">
      <Button type="primary" @click="handleSize">切换尺寸</Button>
      <span class="ml-[12px]">当前尺寸：{{ list[currentIdx] }}</span>
    </div>

    <Button type="primary" :size="list[currentIdx]">主要按钮</Button>
    <Button type="danger" :size="list[currentIdx]" className="ml-[4px]"
      >警告按钮</Button
    >
    <Button type="danger" :size="list[currentIdx]" className="ml-[4px]" disabled
      >禁用按钮</Button
    >

    <h2 class="my-[12px]">加载按钮</h2>
    <div class="mb-[12px]">
      <Button @click="handleLoading">切换加载状态</Button>
    </div>
    <Button :loading="loading">{{ loading ? "加载中" : "完成" }}</Button>

    <h2 class="my-[12px]">icon按钮</h2>
    <Button icon="add"></Button>
    <Button icon="search" className="ml-[4px]"></Button>
    <Button icon="edit" className="ml-[4px]"></Button>

    <Button icon="search" className="ml-[4px]">搜索</Button>
    <Button icon="edit" className="ml-[4px]">编辑</Button>
    <Button icon="upload" className="ml-[4px]">上传</Button>
    <Button icon="check" className="ml-[4px]">正确</Button>
    <Button icon="message" className="ml-[4px]">信息</Button>
    <Button icon="star" className="ml-[4px]">点个star</Button>
    <Button icon="delete" type="danger" className="ml-[4px]">删除</Button>
  </div>
</template>
