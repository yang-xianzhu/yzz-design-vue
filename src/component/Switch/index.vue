<script setup lang="ts">
import { VNode, computed, withDefaults } from "vue";

const emit = defineEmits(["update:modelValue", "change"]);

const props = withDefaults(
  defineProps<{
    modelValue: boolean;
    disabled: boolean;
    size: "large" | "middle" | "small";
    loading: boolean;
    className: string;
    activeText: string | VNode;
    inactiveText: string | VNode;
    inlinePrompt: boolean;
    beforeChange: () => boolean | Promise<unknown>;
  }>(),
  {
    modelValue: undefined,
    disabled: false,
    size: "middle",
    loading: false,
    className: "",
    activeText: "",
    inactiveText: "",
    inlinePrompt: undefined,
  }
);

const isCheck = computed({
  get() {
    return props.modelValue == undefined ? true : props.modelValue;
  },
  set(value) {
    if (props.loading || props.disabled) {
      return;
    }

    if (typeof props.beforeChange === "function") {
      return;
    }

    emit("update:modelValue", value);
    emit("change", value);
  },
});

function handler() {
  if (props.loading) return;

  if (props.beforeChange) {
    (props.beforeChange() as Promise<unknown>)
      .then(() => {
        isCheck.value = !isCheck.value;
        emit("update:modelValue", !isCheck.value);
        emit("change", !isCheck.value);
        return;
      })
      .catch(() => {
        emit("update:modelValue", false);
        return;
      });
  }

  isCheck.value = !isCheck.value;
}

const checkClass = computed(() => {
  const shiftLList = {
    large: "left-[calc(100%-22px)]",
    middle: "left-[calc(100%-18px)]",
    small: "left-[calc(100%-14px)]",
  };

  return isCheck.value
    ? shiftLList[props.size] || shiftLList.middle
    : "left-[2px]";
});

// 计算switch块的size
const sizeClass = computed(() => {
  const sizeObj = {
    large: "min-w-[50px] h-[24px]",
    middle: "min-w-[40px] h-[20px]",
    small: "min-w-[30px] h-[16px]",
  };

  return sizeObj[props.size] || sizeObj.middle;
});

// 计算滑块大小
const sizeBlockClass = computed(() => {
  const sizeBlockObj = {
    large: "w-[20px] h-[20px]",
    middle: "w-[16px] h-[16px]",
    small: "w-[12px] h-[12px]",
  };
  return sizeBlockObj[props.size] || sizeBlockObj.middle;
});

// 行内文本样式
const inlineTextClass = computed(() => {
  const inlineTextObj = {
    large: isCheck.value ? `ml-[6px] mr-[26px]` : `ml-[26px] mr-[6px]`,
    middle: isCheck.value ? `ml-[6px] mr-[22px]` : `ml-[22px] mr-[6px]`,
  };
  return inlineTextObj[props.size] || inlineTextObj.middle;
});

// loading状态下的class
const loadingIconClass = computed(() => {
  const textSize = {
    large: "text-[14px]",
    middle: "text-[12px]",
    small: "text-[10px]",
  };
  return `${textSize[props.size] || textSize.middle} ${
    isCheck.value ? "text-primary" : "text-switch-off"
  }`;
});
</script>
<template>
  <div
    :class="[
      'relative',
      'cursor-pointer',
      'ease-in',
      'duration-300',
      'inline-flex',
      'items-center',
      'vertical-middle',
      loading || disabled ? 'opacity-80 cursor-not-allowed' : 'cursor-pointer',
      props.className,
    ]"
  >
    <!-- 关闭的文本start -->
    <div
      v-if="inactiveText && !inlinePrompt"
      @click="handler"
      :class="[
        'ease-in',
        'duration-300',
        'mr-[10px]',
        'text-[12px]',
        'select-none',
        isCheck ? '' : 'text-primary',
      ]"
    >
      {{ inactiveText }}
    </div>
    <!-- 关闭的文本end -->

    <!-- 滑块部分start  -->
    <div
      :class="[
        'inline-flex',
        'relative',
        'items-center',
        'ease-in',
        'duration-300',
        'rounded-full',
        isCheck ? 'bg-primary' : 'bg-switch-off',
        sizeClass,
      ]"
      @click="handler"
    >
      <!-- 行内文字start -->
      <div
        v-if="size !== 'small' && !!inlinePrompt"
        :class="[
          'text-[12px]',
          'text-white',
          'select-none',
          'ease-in',
          'duration-300',
          inlineTextClass,
        ]"
      >
        {{ isCheck ? activeText : inactiveText }}
      </div>
      <!-- 行内文字end -->

      <div
        :class="[
          'flexCenter',
          'absolute',
          'ease-in',
          'duration-200',
          'rounded-full',
          'bg-white',
          'flexCenter',
          sizeBlockClass,
          checkClass,
        ]"
      >
        <i
          v-if="loading"
          :class="[
            'animate-spin',
            'i-icon-park-outline-loading-four',
            loadingIconClass,
          ]"
        ></i>
      </div>
    </div>
    <!-- 滑块部分end  -->

    <!-- 开启的文本start -->
    <div
      v-if="activeText && !inlinePrompt"
      @click="handler"
      :class="[
        'ease-in',
        'duration-300',
        'ml-[10px]',
        'text-[12px]',
        'select-none',
        isCheck ? 'text-primary' : '',
      ]"
    >
      {{ activeText }}
    </div>
    <!-- 开启的文本end -->
  </div>
</template>
