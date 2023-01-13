<template>
  <ClientOnly>
    <UiCard class="badges flex flex-col gap-2 col">
      <UiBadge :badge="badges[0]" />
      <p>{{ badges[0].description }}</p>
    </UiCard></ClientOnly
  >
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
  badges: Badge[];
}

const { badges } = defineProps<Props>();
</script>

<style lang="scss" scoped>
.badges {
  p {
    font-weight: 400;
    font-size: 10px;
    line-height: 14px;
  }
}
</style>
