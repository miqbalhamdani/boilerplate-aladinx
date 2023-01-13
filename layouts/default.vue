<template>
  <div>
    <DesktopHeader v-if="!commonStore.isMobileView" />
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { useCommonStore } from "~/stores/common";

const commonStore = useCommonStore();

const onResize = () => {
  console.log("window.innerWidth", window.innerWidth);
  if (window.innerWidth <= 640) {
    commonStore.isMobileView = true;
    return;
  }

  commonStore.isMobileView = false;
};
onMounted(() => {
  window.addEventListener("resize", onResize);
});
</script>
