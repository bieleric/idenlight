import { defineStore } from 'pinia'

export const useNavigationStore = defineStore('navigationStore', {
  state: () => ({
        currentStep: 0,
        steps: ["Step 1", "Step 2", "Step 3"]
  }),
  getters: {
        getCurrentStep: (state) => state.currentStep,
        getSteps: (state) => state.steps,
        getStepsLength: (state) => state.steps.length
  },
  actions: {
    increase() {
        this.currentStep++;
    },
    reduce() {
        this.currentStep--;
    }
  }
})