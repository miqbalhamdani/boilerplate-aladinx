<template>
  <UiCard>
    <div class="thumbnails grid grid-rows-2 gap-4 grid-flow-col">
      <div class="row-span-2">
        <img
          src="~/assets/img/detail/thumnail-1.jpg"
          class="w-full object-cover"
          :style="{
            width: '572px',
            height: '514px',
          }"
        />
      </div>
      <div class="col-span-1">
        <img
          src="~/assets/img/detail/thumnail-2.jpg"
          class="w-full object-cover"
        />
      </div>
      <div class="col-span-1">
        <img
          src="~/assets/img/detail/thumnail-3.jpg"
          class="w-full object-cover"
        />
      </div>
      <div class="col-span-1">
        <img
          src="~/assets/img/detail/thumnail-4.jpg"
          class="w-full object-cover"
        />
      </div>
      <div class="col-span-1">
        <img
          src="~/assets/img/detail/thumnail-5.jpg"
          class="w-full object-cover"
          :style="{
            filter: 'brightness(0.5)',
          }"
        />
      </div>
    </div>
  </UiCard>
</template>

<style lang="scss" scoped>
.thumbnails {
  img {
    border-radius: 12px;
  }

  .col-span-1 {
    img {
      width: 282px;
      height: 251px;
    }
  }
}
</style>
