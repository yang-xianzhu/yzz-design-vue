---
layout: doc
---

# Button 按钮

按钮用于开始一个即时操作。

<script setup>
import {ref} from 'vue'
const list = ["small", "middle", "large"];

const currentIdx = ref(1);

const loading = ref(true)

function handleSize() {
  const num = currentIdx.value + 1;
  currentIdx.value = num > 2 ? 0 : num;
}

function handleLoading() {
  loading.value = !loading.value;
}

</script>

## 基础

### 普通

<div class='mt-[12px]'>
<yzz-button type="primary" >主要按钮</yzz-button>
<yzz-button type="success" className="ml-[8px]">成功按钮</yzz-button>
<yzz-button type="warning" className="ml-[8px]">提示按钮</yzz-button>
<yzz-button type="danger" className="ml-[8px]">警告按钮</yzz-button>
<yzz-button type="danger" className="ml-[8px]" disabled>禁用按钮</yzz-button>
</div>

### 胶囊形状

<div class='mt-[12px]'>
    <yzz-button type="primary" shape="round">主要按钮</yzz-button>
    <yzz-button type="success"  shape="round" className="ml-[8px]">成功按钮</yzz-button>
    <yzz-button type="warning" shape="round" className="ml-[8px]">警告按钮</yzz-button>
    <yzz-button type="danger" shape="round" className="ml-[8px]">警告按钮</yzz-button>
    <yzz-button type="danger" shape="round" className="ml-[8px]" disabled>禁用按钮</yzz-button>
</div>

### 圆角

<div class='mt-[12px]'>
    <yzz-button type="primary" shape="circle" icon="add"></yzz-button>
    <yzz-button type="success"  shape="circle" icon="search" className="ml-[8px]"></yzz-button>
    <yzz-button type="warning" shape="circle" icon="edit" className="ml-[8px]"></yzz-button>
    <yzz-button type="danger" shape="circle" icon="check" className="ml-[8px]"></yzz-button>
    <yzz-button type="danger" shape="circle" icon="star" className="ml-[8px]" ></yzz-button>
</div>

### 跟随父级宽度

<div class='mt-[12px]'>
 <yzz-button type="primary" block>跟随父级宽度按钮</yzz-button>
</div>

### 按钮尺寸

<div class='mt-[12px]'>
    <div class="mb-[12px]">
      <yzz-button type="primary"  @click="handleSize">切换尺寸</yzz-button>
      <span class="ml-[12px]">当前尺寸：{{ list[currentIdx] }}</span>
    </div>
    <yzz-button type="primary" :size="list[currentIdx]">主要按钮</yzz-button>
    <yzz-button type="danger" :size="list[currentIdx]" className="ml-[8px]">警告按钮</yzz-button>
    <yzz-button type="danger" :size="list[currentIdx]" className="ml-[8px]" disabled>禁用按钮</yzz-button>
</div>

### 加载状态

<div class='mt-[12px]'>
    <div class="mb-[12px]">
      <yzz-button @click="handleLoading">切换加载状态</yzz-button>
    </div>
    <yzz-button :loading="loading">{{ loading ? "加载中" : "完成" }}</yzz-button>
</div>

### icon 图标

<div class='mt-[12px]'>
    <yzz-button icon="add"></yzz-button>
    <yzz-button icon="search" className="ml-[8px]"></yzz-button>
    <yzz-button icon="edit" className="ml-[8px]"></yzz-button>
    <yzz-button icon="search" className="ml-[8px]">搜索</yzz-button>
    <yzz-button icon="edit" className="ml-[8px]">编辑</yzz-button>
    <yzz-button icon="upload" className="ml-[8px]">上传</yzz-button>
    <yzz-button icon="check" className="ml-[8px]">正确</yzz-button>
    <yzz-button icon="message" className="ml-[8px]">信息</yzz-button>
    <yzz-button icon="star" className="ml-[8px]">点个star</yzz-button>
    <yzz-button icon="delete" type="danger" className="ml-[8px]">删除</yzz-button>
</div>
