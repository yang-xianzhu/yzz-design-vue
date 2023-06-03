<script setup lang="ts">
import { watch, withDefaults, computed } from "vue";
import Button from "../Button";
const emit = defineEmits(["update:modelValue"]);
const props = withDefaults(
  defineProps<{
    modelValue: boolean;
    title: string;
    fullscreen: boolean;
    width: string | number;
  }>(),
  {
    title: "",
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

function maskClose() {
  emit("update:modelValue", false);
}

function confirm() {
  emit("update:modelValue", false);
}

function cancel() {
  emit("update:modelValue", false);
}

watch(
  () => props.modelValue,
  (val) => {
    // console.log("val", val);
  }
);

console.log(props);
</script>
<template>
  <!-- modal -->
  <div
    @click="maskClose"
    v-handleScroll="modelValue"
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
      'duration-300',
      modelValue ? 'opacity-100' : 'opacity-0',
      modelValue ? 'visible' : 'invisible',
    ]"
  >
    <Teleport to="body">
      <div
        :style="widthStyle"
        :class="[
          'fixed',
          'top-15%',
          'left-50%',
          'translate-x--50%',
          'z-1001',
          // 'w-[400px]',
          'bg-white',
          'rounded-[8px]',
          'px-[20px] pb-[20px]',
          'ease-in',
          'duration-200',
          modelValue
            ? 'visible visible opacity-100 scale-100'
            : 'invisible opacity-0 invisible scale-0',
        ]"
      >
        <div class="py-[20px] flexCenterY justify-between">
          <div>{{ title }}</div>
          <div
            class="relative cursor-pointer w-[20px] h-[20px] rounded-[4px] ease-in duration-150 hover-bg-btn-close-bg"
            @click="maskClose"
          >
            <div
              class="positionCenter i-icon-park-outline-close text-[14px] text-#666 hover-text-btn-close-color"
            ></div>
          </div>
        </div>
        <div>context</div>
        <div class="mt-[12px] flex justify-end">
          <Button type="default" @click="cancel">取消</Button>
          <Button type="primary" @click="confirm" className="ml-[4px]"
            >确认</Button
          >
        </div>
      </div>
    </Teleport>
  </div>
</template>
