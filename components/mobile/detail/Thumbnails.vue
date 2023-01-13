<template>
  <div class="thumbnails grid grid-rows-2 grid-flow-col">
    <div class="row-span-2 ...">
      <img
        src="~/assets/img/detail/thumnail-1.jpg"
        class="w-full object-cover"
        :style="{
          maxHeight: '200px',
        }"
      />
    </div>
    <div class="col-span-1 ...">
      <img
        src="~/assets/img/detail/thumnail-2.jpg"
        class="w-full object-cover"
        :style="{
          maxHeight: '100px',
        }"
      />
    </div>
    <div class="col-span-1 ...">
      <img
        src="~/assets/img/detail/thumnail-3.jpg"
        class="w-full object-cover"
        :style="{
          maxHeight: '100px',
        }"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
</script>

<style lang="scss" scoped></style>
