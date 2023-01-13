<template>
  <UiCard>
    <div class="overview flex flex-col gap-3 pb-7">
      <h1>Le Eminence Puncak Hotel Convention & Resort</h1>
      <div class="flex items-center gap-3">
        <UiStars :stars="5" />
        <UiLocation />
        <UiButtonLink>
          <template #left>
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.2223 10.8148L0.994452 9.2006C0.896033 9.15142 0.81325 9.07582 0.755372 8.98225C0.697494 8.88868 0.666807 8.78085 0.666748 8.67083V2.29216C0.666802 2.19119 0.692656 2.0919 0.741856 2.00373C0.791056 1.91555 0.86197 1.84141 0.947871 1.78834C1.03377 1.73527 1.13181 1.70503 1.23268 1.70048C1.33355 1.69594 1.43391 1.71725 1.52423 1.76238L4.2223 3.11112M4.2223 10.8148V3.11112M4.2223 10.8148L7.77786 9.03705M4.2223 3.11112L7.77786 1.33334M7.77786 9.03705L10.4759 10.3858C10.5663 10.4309 10.6666 10.4522 10.7675 10.4477C10.8684 10.4431 10.9664 10.4129 11.0523 10.3598C11.1382 10.3068 11.2091 10.2326 11.2583 10.1444C11.3075 10.0563 11.3334 9.95698 11.3334 9.85601V3.47734C11.3334 3.36732 11.3027 3.25949 11.2448 3.16592C11.1869 3.07235 11.1041 2.99675 11.0057 2.94757L7.77786 1.33334M7.77786 9.03705V1.33334"
                stroke="#2F4095"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </template>

          Lihat di Peta
        </UiButtonLink>
      </div>
    </div>

    <div class="mt-6 gap-6 flex justify-between">
      <div class="rating basis-3/12">
        <h3>Rating</h3>
        <UiCard class="rating__content flex gap-4 justify-between">
          <img src="~/assets/img/icon/score.svg" />
          <div class="rating__score-title">9.7</div>
          <div class="flex flex-col">
            <div class="rating__score-description">Fantastis</div>
            <div class="rating__score-review">Dari 172 ulasan</div>
          </div>
        </UiCard>
      </div>

      <div class="facility basis-9/12">
        <div class="flex justify-between">
          <h3>Fasilitas Hotel</h3>
          <div>
            <UiButtonLink> Lihat Semua </UiButtonLink>
          </div>
        </div>
        <div class="facility__content">
          <ul
            class="grid grid-rows-2 grid-cols-5 grid-flow-col gap-4 list-disc pl-6"
          >
            <li v-for="(facility, index) in facilities" :key="index">
              {{ facility }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </UiCard>
</template>

<script setup lang="ts">
import { Ref } from "vue";

const facilities = ref([
  "Wifi",
  "Restoran",
  "Area Parkir",
  "TV Kabel",
  "Keamanan",
  "Layanan Kamar",
  "Ruang Meeting",
  "Coworking Space",
  "Handuk",
  "Brankas Kamar",
]);
</script>

<style lang="scss" scoped>
h1 {
  font-weight: 700;
  font-size: 24px;
}

h3 {
  font-weight: 700;
  font-size: 20px;
  margin-bottom: 16px;
}

.overview {
  border-bottom: 1px solid $neutral-300;
}

.rating {
  .rating__score-title {
    font-weight: 700;
    font-size: 32px;
  }
  .rating__score-description {
    font-weight: 700;
    font-size: 14px;
  }
  .rating__score-review {
    font-weight: 400;
    font-size: 12px;
    color: $neutral-700;
  }
}

.facility {
  ul li {
    font-weight: 400;
  }
}
</style>
