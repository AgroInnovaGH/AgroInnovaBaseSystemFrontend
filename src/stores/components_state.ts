import { defineStore } from 'pinia';

export const useComponentsState = defineStore('components', {
  state: () => ({
    navIsExpanded: true,
    showHoverSideBar: false,
  }),

  actions: {
    toggleNavbar(payload: boolean) {
      this.navIsExpanded = payload;
    },

    toggleHoverNavbarState(payload: boolean) {
      this.showHoverSideBar = payload;
    },
  },
});
