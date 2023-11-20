import { defineStore } from 'pinia'
import i18n from '../i18n';

export const useUserDemoStore = defineStore('userDemoStore', {
  state: () => ({
        currentStep: 0,
        steps: [i18n.global.t('steps.user.introduction.title'), i18n.global.t('navigation.user.step2'), i18n.global.t('navigation.user.step3'), i18n.global.t('navigation.user.step4'), i18n.global.t('navigation.user.step5'), i18n.global.t('navigation.user.step6'), i18n.global.t('navigation.user.step7')],
        tutorial: false,
        showNavigationButtons: true,
        descriptionActive: true,
        tabMode: false
  }),
  getters: {
        getCurrentStep: (state) => state.currentStep,
        getSteps: (state) => state.steps,
        getStepsLength: (state) => state.steps.length,
        getDescriptionActive: (state) => state.descriptionActive,
        getTabMode: (state) => state.tabMode,
        getTutorial: (state) => state.tutorial,
        getShowNavigationButtons: (state) => state.showNavigationButtons
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
    },
    setTabMode(value) {
        this.tabMode = value;
    },
    setTutorial(value) {
        this.tutorial = value;
    },
    setShowNavigationButtons(value) {
        this.showNavigationButtons = value;
    },
    resetCurrentStep() {
        this.currentStep = 0; 
        this.descriptionActive = true;
        this.showRole = false;
        this.tutorial = false;
        this.showNavigationButtons = true;
    }
  }
})