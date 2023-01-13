<template>
  <div class="card">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.card {
  padding: 16px;
  background: $neutral-0;
  border: 1px solid $neutral-100;
  border-radius: 16px;
}
</style>
