import { defineStore } from 'pinia';

export type Data = {
  id: number;
  goalLabel: string;
};

export const useGoalsStore = defineStore('goals', {
  state: () => ({
    goals: [
      {
        id: 10,
        goalLabel: 'Buying Chickens',
      },
      {
        id: 20,
        goalLabel: 'Buying Eggs',
      },
    ],
    isActive: false
  }),
  actions: {
    addGoal(goalLabel: string) {
      this.goals.push({
        id: this.goals.length + 1,
        goalLabel: goalLabel,
      });
    },
    toggleModal(value: boolean) {
      this.isActive = value
    },
    removeGoal(id: number) {
      this.goals = this.goals.filter(goal => goal.id !== id)
    }
  },
});
