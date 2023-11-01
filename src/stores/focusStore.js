import { defineStore } from 'pinia'

export const useFocusStore = defineStore('focusStore', {
  state: () => ({
    conceptActive: true
  }),
  getters: {
    getConceptActive: (state) => state.conceptActive
  },
  actions: {
    toggleConceptActive(value) {
      this.conceptActive = value;
    },
  }
})
