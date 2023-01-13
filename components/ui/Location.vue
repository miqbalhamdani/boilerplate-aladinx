<template>
  <div class="location flex justify-around items-center gap-1">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="14"
      viewBox="0 0 10 14"
    >
      <g fill="none" fill-rule="evenodd" transform="translate(-3 -1)">
        <path d="M0 0L16 0 16 16 0 16z" />
        <path
          fill="#757575"
          fill-rule="nonzero"
          d="M8 1.333C5.42 1.333 3.333 3.42 3.333 6 3.333 9.5 8 14.667 8 14.667S12.667 9.5 12.667 6c0-2.58-2.087-4.667-4.667-4.667zM4.667 6C4.667 4.16 6.16 2.667 8 2.667S11.333 4.16 11.333 6c0 1.92-1.92 4.793-3.333 6.587C6.613 10.807 4.667 7.9 4.667 6z"
        />
        <circle cx="8" cy="6" r="1.667" fill="#757575" fill-rule="nonzero" />
      </g>
    </svg>

    <div class="location__description">Bandung, Jawa Barat</div>
  </div>
</template>

<style lang="scss" scoped>
.location {
  .location__description {
    font-weight: 400;
    font-size: 12px;
    color: $neutral-700;
  }
}
</style>
