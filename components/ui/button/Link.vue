<template>
  <div class="button-link">
    <a class="flex justify-between gap-2 items-center px-2.5 py-1">
      <slot name="left" />
      <slot />
    </a>
  </div>
</template>

<style lang="scss" scoped>
.button-link {
  background-color: $primary-lightest;
  border-radius: 4px;
  padding: 4px 12px;

  a {
    font-size: 10px;
    font-weight: 700;
    color: $primary;
    cursor: pointer;
  }
}
</style>
