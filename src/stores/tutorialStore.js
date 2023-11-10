import { defineStore } from 'pinia'

export const useTutorialStore = defineStore('tutorialStore', {
    state: () => ({
        connectionTutorialName: "Connection Tutorial",
        issueTutorialName: "Issue Tutorial",
        currentStep: 1,
        connectionTutorialSteps: 3,
        issueTutorialSteps: 4,
        currentTutorial: null,
        connectionTutorialFinished: false,
        issueTutorialFinished: false
    }),
    getters: {
        getConnectionTutorialName: (state) => state.connectionTutorialName,
        getIssueTutorialName: (state) => state.issueTutorialName,
        getCurrentStep: (state) => state.currentStep,
        getCurrentTutorial: (state) => state.currentTutorial,
        getCurrentTutorialSteps: (state) => {
          if(state.currentTutorial === state.connectionTutorialName) {
            return state.connectionTutorialSteps;
          }
          else if(state.currentTutorial === state.issueTutorialName) {
            return state.issueTutorialSteps;
          }
        },
        getConnectionTutorialSteps: (state) => state.connectionTutorialSteps,
        getIssueTutorialSteps: (state) => state.issueTutorialSteps,
        getConnectionTutorialFinished: (state) => state.connectionTutorialFinished,
        getIssueTutorialFinished: (state) => state.issueTutorialFinished
    },
    actions: {
        incrementConnectionTutorial() {
            if(this.currentStep <= this.connectionTutorialSteps) {
              this.currentStep++;
            }
        },
        incrementIssueTutorial() {
          if(this.currentStep <= this.issueTutorialSteps) {
            this.currentStep++;
          }
      },
        decrement() {
            if(this.currentStep >= 1) {
              this.currentStep--;
            }  
        },
        setCurrentTutorialToConnectionTutorial() {
            this.currentTutorial = this.connectionTutorialName
        },
        setCurrentTutorialToIssueTutorial() {
          this.currentTutorial = this.issueTutorialName
        },
        setConnectionTutorialFinished() { 
            this.connectionTutorialFinished = true;
        },
        setIssueTutorialFinished() { 
          this.issueTutorialFinished = true;
        },
        restartTutorial() {
            this.currentStep = 1;
        }
    }
})