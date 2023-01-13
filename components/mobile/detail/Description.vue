<template>
  <UiCard>
    <div class="description flex flex-col items-start gap-3">
      <h1>Le Eminence Puncak Hotel Convention & Resort</h1>

      <div class="flex gap-2">
        <UiStars :stars="5" />
        <UiLocation />
      </div>

      <UiRating />
    </div>
  </UiCard>
</template>
