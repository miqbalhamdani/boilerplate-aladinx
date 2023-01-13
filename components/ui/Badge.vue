<template>
  <div
    class="badge rounded flex gap-1 justify-between items-center p-1"
    :style="{ backgroundColor: badge.background_color }"
  >
    <img :src="badge.icon" :alt="badge.name" />
    <div class="badge__text" :style="{ color: badge.text_color }">
      {{ badge.title }}
    </div>
  </div>
</template>

<script setup lang="ts">
interface Badge {
  name: string;
  icon: string;
  image?: any;
  title: string;
  background_color: string;
  text_color: string;
  description: string;
  value: string;
}

interface Props {
  badge: Badge;
}

const { badge } = defineProps<Props>();
</script>

<style lang="scss" scoped>
.badge {
  width: 102px;

  img {
    width: 10px;
  }

  .badge__text {
    font-weight: 700;
    font-size: 10px;
    line-height: 15px;
  }
}
</style>
