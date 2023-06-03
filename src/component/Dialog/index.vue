<script setup lang="ts">
const emit = defineEmits(["update:modelValue"]);
const props = defineProps<{
  modelValue: boolean;
}>();

function maskClose() {
  emit("update:modelValue", false);
}

console.log(props);
</script>
<template>
  <!-- modal -->
  <div
    v-if="modelValue"
    v-handleScroll
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
      'duration-3000',
      modelValue ? 'visible' : 'invisible',
      // 'overflow-hidden',
    ]"
  >
    <Teleport to="body">
      <div
        class="positionCenter z-1001 w-[400px] h-[300px] bg-white rounded-[2px] px-[20px]"
      >
        <div class="py-[20px]">header</div>
        <div>context</div>
      </div>
    </Teleport>
  </div>
</template>
