import { defineStore } from 'pinia';

export const useComponentsState = defineStore('components', {
  state: () => ({
    navIsExpanded: true,
    showHoverSideBar: false,
    loading: false,
    mobileNavbarIsExpanded: false,
    sidebar_main_route_label: '',
    selectedFilter: 'weekly',
    showCampaignModal: { value: false, id: 1 },
  }),

  actions: {
    toggleNavbar(payload: boolean) {
      this.navIsExpanded = payload;
    },

    toggleHoverNavbarState(payload: boolean) {
      this.showHoverSideBar = payload;
    },

    toggleCampaignModal(payload: { value: boolean; id: number }) {
      this.showCampaignModal = payload;
    },

    toggleMobileNavbar(payload: boolean) {
      this.mobileNavbarIsExpanded = payload;
    },

    setMainLabel(payload: string) {
      this.sidebar_main_route_label = payload;
    },
    toggleFilter(payload: string) {
      this.selectedFilter = payload;
    },
  },
});
