import { defineStore } from 'pinia'

export const useFocusStore = defineStore('focusStore', {
  state: () => ({
    userActive: true
  }),
  getters: {
    getUserActive: (state) => state.userActive
  },
  actions: {
    toggleUserActive(value) {
      this.userActive = value;
    },
  }
})
