<!-- TODO: 
  1、实现header部分的拖拽功能：v-handleDraggable="{ modelValue, draggable }"
  2、实现destroyOnClose: boolean：关闭弹窗时，是否销毁dom结构
 -->

<script setup lang="ts">
import { watch, withDefaults, computed, useSlots } from "vue";
import Button from "../Button";

const slots = useSlots();

const emit = defineEmits(["update:modelValue", "open", "close"]);

const props = withDefaults(
  defineProps<{
    modelValue: boolean;
    title: string;
    fullscreen: boolean;
    width: string | number;
    modal: boolean;
    draggable: boolean;
    // 关闭弹窗时，是否销毁dom结构
    destroyOnClose: boolean;
  }>(),
  {
    title: "",
    modal: true,
  }
);

const widthStyle = computed(() => {
  if (props.width == undefined && !props.fullscreen)
    return {
      width: "30%",
    };

  const isNumber = typeof props.width === "number";

  return {
    width: props.fullscreen
      ? "100%"
      : isNumber
      ? `${props.width}px`
      : props.width,
  };
});

watch(
  () => props.modelValue,
  (val) => {
    if (val) {
      emit("open");
    }
  }
);

function maskClose() {
  emit("update:modelValue", false);
  emit("close");
}

function confirm() {
  emit("update:modelValue", false);
  emit("close");
}

function cancel() {
  emit("update:modelValue", false);
  emit("close");
}

// console.log(props);
</script>
<template>
  <!-- modal -->
  <div
    v-handleScroll="modelValue"
    v-if="modal"
    @click="maskClose"
    :class="[
      'fixed',
      'top-0',
      'right-0',
      'bottom-0',
      'left-0',
      'z-1000',
      'h-full',
      'bg-dialog-color',
      'ease-in',
      'duration-200',
      modelValue ? 'opacity-100' : 'opacity-0',
      modelValue ? 'visible' : 'invisible',
    ]"
  ></div>
  <Teleport to="body">
    <div
      :style="widthStyle"
      :class="[
        'fixed',
        'top-15%',
        'left-50%',
        'translate-x--50%',
        'z-1001',
        'rounded-[8px]',
        'ease-in',
        'duration-200',
        'bg-white',
        modal ? '' : 'border-gray-200 border-[1px]',
        modelValue
          ? 'visible visible opacity-100 scale-100'
          : 'invisible opacity-0 invisible scale-0',
      ]"
    >
      <!-- header -->
      <header
        :class="[
          'p-[20px] flexCenterY justify-between',
          draggable ? 'cursor-move	' : '',
        ]"
      >
        <div :class="[draggable ? 'select-none' : '']">{{ title }}</div>
        <div
          class="relative cursor-pointer w-[20px] h-[20px] rounded-[4px] ease-in duration-150 hover-bg-btn-close-bg"
          @click="maskClose"
        >
          <div
            class="positionCenter i-icon-park-outline-close text-[14px] text-#666 hover-text-btn-close-color"
          ></div>
        </div>
      </header>
      <!-- context -->
      <div v-if="slots.default && slots.default()" class="px-[20px]">
        <slot></slot>
      </div>
      <!-- footer -->
      <footer
        class="mt-[12px] px-[20px] flex justify-end pb-[20px]"
        v-if="!(slots.footer && slots.footer())"
      >
        <Button type="default" @click="cancel">取消</Button>
        <Button type="primary" @click="confirm" className="ml-[12px]"
          >确认</Button
        >
      </footer>
      <footer class="mt-[12px] px-[20px] pb-[20px]" v-else>
        <slot name="footer"></slot>
      </footer>
    </div>
  </Teleport>
</template>
