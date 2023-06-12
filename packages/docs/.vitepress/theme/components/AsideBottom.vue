<script setup lang="ts">
function goTop() {
  window &&
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
}
</script>
<template>
  <div class="hover-text-#87a2d0 ease-in duration-300">
    <i
      class="block cursor-pointer i-icon-park-outline-to-top text-[32px]"
      @click="goTop"
    ></i>
  </div>
</template>
