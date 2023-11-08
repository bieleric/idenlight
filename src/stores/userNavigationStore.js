import { defineStore } from 'pinia'
import i18n from '../i18n';

export const useUserNavigationStore = defineStore('userNavigationStore', {
  state: () => ({
        currentStep: 0,
        steps: [i18n.global.t('steps.user.introduction.title'), i18n.global.t('navigation.user.step2'), i18n.global.t('navigation.user.step3'), i18n.global.t('navigation.user.step4'), i18n.global.t('navigation.user.step5'), i18n.global.t('navigation.user.step6'), i18n.global.t('navigation.user.step7'), i18n.global.t('navigation.user.step8')],
        descriptionActive: true
  }),
  getters: {
        getCurrentStep: (state) => state.currentStep,
        getSteps: (state) => state.steps,
        getStepsLength: (state) => state.steps.length,
        getDescriptionActive: (state) => state.descriptionActive
  },
  actions: {
    increase() {
        this.currentStep++;
    },
    reduce() {
        this.currentStep--;
    },
    toggleDescription(value) {
        this.descriptionActive = value;
    }
  }
})