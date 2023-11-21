import { defineStore } from 'pinia'

export const useDemoTutorialStore = defineStore('demoTutorialStore', {
    state: () => ({
        connectionTutorialName: "Connection Tutorial",
        issueTutorialName: "Issue Tutorial",
        presentTutorialName: "Present Tutorial",
        currentStep: 1,
        connectionTutorialSteps: 3,
        issueTutorialSteps: 6,
        presentTutorialSteps: 6,
        currentTutorial: null,
        connectionTutorialFinished: false,
        issueTutorialFinished: false,
        presentTutorialFinished: false,
    }),
    getters: {
        getConnectionTutorialName: (state) => state.connectionTutorialName,
        getIssueTutorialName: (state) => state.issueTutorialName,
        getPresentTutorialName: (state) => state.presentTutorialName,
        getCurrentStep: (state) => state.currentStep,
        getCurrentTutorial: (state) => state.currentTutorial,
        getCurrentTutorialSteps: (state) => {
          if(state.currentTutorial === state.connectionTutorialName) {
            return state.connectionTutorialSteps;
          }
          else if(state.currentTutorial === state.issueTutorialName) {
            return state.issueTutorialSteps;
          }
          else if(state.currentTutorial === state.presentTutorialName) {
            return state.presentTutorialSteps;
          }
        },
        getConnectionTutorialSteps: (state) => state.connectionTutorialSteps,
        getIssueTutorialSteps: (state) => state.issueTutorialSteps,
        getPresentTutorialSteps: (state) => state.presentTutorialSteps,
        getConnectionTutorialFinished: (state) => state.connectionTutorialFinished,
        getIssueTutorialFinished: (state) => state.issueTutorialFinished,
        getPresentTutorialFinished: (state) => state.presentTutorialFinished
    },
    actions: {
        incrementConnectionTutorial() {
            if(this.currentStep < this.connectionTutorialSteps) {
              this.currentStep++;
            }
        },
        incrementIssueTutorial() {
          if(this.currentStep < this.issueTutorialSteps) {
            this.currentStep++;
          }
        },
        incrementPresentTutorial() {
          if(this.currentStep < this.presentTutorialSteps) {
            this.currentStep++;
          }
        },
        decrement() {
            if(this.currentStep > 1) {
              this.currentStep--;
            }  
        },
        setCurrentTutorialToConnectionTutorial() {
            this.currentTutorial = this.connectionTutorialName;
        },
        setCurrentTutorialToIssueTutorial() {
          this.currentTutorial = this.issueTutorialName;
        },
        setCurrentTutorialToPresentTutorial() {
          this.currentTutorial = this.presentTutorialName;
        },
        setConnectionTutorialFinished() { 
            this.connectionTutorialFinished = true;
        },
        setIssueTutorialFinished() { 
          this.issueTutorialFinished = true;
        },
        setPresentTutorialFinished() { 
          this.presentTutorialFinished = true;
        },
        restartTutorial() {
            this.currentStep = 1;
        }
    }
})