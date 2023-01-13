<template>
  <div v-if="commonStore.isMobileView">
    <MobileDetailThumbnails />
    <div class="p-4 flex flex-col gap-2">
      <MobileDetailDescription class="-mt-8" />
      <MobileDetailBadges :badges="badges" />
    </div>
  </div>

  <div v-else class="container mx-auto flex flex-col mt-6 gap-6">
    <DesktopDetailThumbnails />
    <DesktopDetailOverview />
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useCommonStore } from "~/stores/common";

const commonStore = useCommonStore();

// hardcode here for temporary
const badges = ref([
  {
    name: "dynamic_badge_hover_top",
    icon: "//s.misteraladin.com/images/badge/0000001000/0000000237/top-hover-beach-gateways-sea-sand-sun-badge.png",
    image: null,
    title: "SPESIAL IMLEK",
    background_color: "#007D6A",
    text_color: "#FFFFFF",
    description:
      "Hotel Spesial Imlek\r\nDijamin Anti Bokek\r\nDiskon s.d 50% + Rp500.000",
    value: "Discount up to IDR0",
  },
  {
    name: "dynamic_badge_hover_top",
    icon: "//s.misteraladin.com/images/badge/0000001000/0000000216/hover-blissful-domestic-badge.png",
    image: null,
    title: "Staycation",
    background_color: "#F6882F",
    text_color: "#004381",
    description: "Pilihan hotel hemat\r\nMulai Rp100.000",
    value: "Discount up to IDR0",
  },
]);
</script>
