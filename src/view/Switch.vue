<script setup lang="ts">
import { ref, watchEffect } from "vue";
import Switch from "@/component/Switch/index.vue";

const val = ref(true);
const val1 = ref(true);
const loadingVal = ref(false);
const loadingVal1 = ref(true);
const loading = ref(true);

const val2 = ref(false);
const loading1 = ref(false);

function beforeChange() {
  loading1.value = true;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      loading1.value = false;
      return resolve("");
      // return reject(new Error("Error"));
    }, 2000);
  });
}

function change(val) {
  console.log("change", val);
}

watchEffect(() => {
  console.log("父组件", val2.value);
});
</script>
<template>
  <div class="mt-[24px]">
    <h2 class="text-[30px] mb-[12px]">Switch 开关</h2>

    <h2 class="my-[12px] text-[24px]">1、尺寸</h2>

    <div class="flex mb-[6px]">
      <div class="min-w-[80px]">small:</div>
      <Switch v-model="val" size="small" />
    </div>

    <div class="flex mb-[6px]">
      <div class="min-w-[80px]">middle:</div>
      <Switch v-model="val" size="middle" />
    </div>

    <div class="flex mb-[6px]">
      <div class="min-w-[80px]">large:</div>
      <Switch v-model="val" size="large" />
    </div>

    <h2 class="my-[12px] text-[24px]">2、文字描述</h2>
    <p class="indent-[2px] mb-[6px] text-#999">- 行内文本</p>
    <div class="flex mb-[6px]">
      <div class="min-w-[80px]">middle:</div>
      <Switch
        v-model="val"
        inline-prompt
        size="middle"
        active-text="开启"
        inactive-text="关闭"
      />
    </div>

    <div class="flex mb-[6px]">
      <div class="min-w-[80px]">large:</div>
      <Switch
        v-model="val"
        inline-prompt
        size="large"
        active-text="开启了,这是一条很长的文本..."
        inactive-text="关闭了,hhhhhhhh"
      />
    </div>

    <p class="indent-[2px] my-[6px] text-#999">- 行外文本</p>

    <div class="flex mb-[6px]">
      <div class="min-w-[80px]">middle:</div>
      <Switch
        v-model="val"
        size="middle"
        active-text="开启"
        inactive-text="关闭"
      />
    </div>

    <div class="flex mb-[6px]">
      <div class="min-w-[80px]">large:</div>
      <Switch
        v-model="val"
        size="large"
        active-text="开启了,这是一条很长的文本hhhh"
        inactive-text="关闭了,hhhhhhhh"
      />
    </div>

    <h2 class="my-[12px] text-[24px]">3、加载状态</h2>

    <div class="flex mb-[6px]">
      <div class="min-w-[200px]">开启状态下的加载中:</div>
      <Switch v-model="loadingVal1" size="middle" :loading="loading" />
    </div>

    <div class="flex mb-[6px]">
      <div class="min-w-[200px]">关闭状态下的加载中:</div>
      <Switch v-model="loadingVal" size="middle" :loading="loading" />
    </div>

    <h2 class="my-[12px] text-[24px]">4、禁用状态</h2>

    <div class="flex mb-[6px]">
      <div class="min-w-[100px]">禁用状态:</div>
      <Switch v-model="val1" size="middle" disabled />
    </div>

    <h2 class="my-[12px] text-[24px]">5、阻止切换</h2>

    <Switch
      v-model="val2"
      size="middle"
      :loading="loading1"
      :beforeChange="beforeChange"
      @change="change"
    />
  </div>
</template>
