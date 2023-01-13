import { defineStore } from "pinia";

export const useCommonStore = defineStore("common", {
  state: () => ({
    isMobileView: false as boolean,
  }),
});
