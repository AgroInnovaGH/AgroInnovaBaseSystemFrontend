import type { CampaignFields } from '@/views/Dashboard/CRM/Campaigns/types';
import { defineStore } from 'pinia';
import { toast } from 'vue3-toastify';

interface State {
  upcomingCampaigns: CampaignFields[];
  completedCampaigns: CampaignFields[];
  cancelledCampaigns: CampaignFields[];
}

export const useCampaignsState = defineStore('campaignsState', {
  state: (): State => ({
    upcomingCampaigns: [
      {
        day: '20',
        month: 'DEC',
        title: 'Tour to the Volta Region',
        time: '11:30am - 12:30pm',
        personnel: 'Mr Kizito',
        date_color: 'blue',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.',
        id: 1,
      },
      {
        day: '30',
        month: 'DEC',
        title: 'Admin Design Concept',
        time: '10:00am - 12:00pm',
        date_color: 'orange',
        personnel: 'Mr Edem',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.',
        id: 2,
      },
      {
        day: '17',
        month: 'DEC',
        title: 'Standup Team Meeting',
        time: '8:00am - 9:00am',
        date_color: 'green',
        personnel: 'Mr Edward',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.',
        id: 3,
      },
    ],

    completedCampaigns: [
      {
        day: '30',
        month: 'DEC',
        title: 'Admin Design Concept',
        time: '10:00am - 12:00pm',
        date_color: 'orange',
        personnel: 'Mr Edem',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.',
        id: 1,
      },
    ],

    cancelledCampaigns: [
      {
        day: '30',
        month: 'DEC',
        title: 'Admin Design Concept',
        time: '10:00am - 12:00pm',
        date_color: 'orange',
        personnel: 'Mr Edem',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.',
        id: 1,
      },
    ],
  }),

  actions: {
    addToCompletedCampaigns(campaign: CampaignFields) {
      this.completedCampaigns.push(campaign);
      toast.success(`${campaign.title} has been completed!`, {
        hideProgressBar : true
      });
    },

    addToCancelledCampaigns(campaign: CampaignFields) {
      this.cancelledCampaigns.push(campaign);
      toast.error(`${campaign.title} has been cancelled!` , {
        hideProgressBar : true
      });
    },
  },
});
