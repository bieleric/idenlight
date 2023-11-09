import { defineStore } from 'pinia'

export const useTutorialStore = defineStore('tutorialStore', {
    state: () => ({
        currentStep: 1,
        steps: 3,
        currentTutorial: null,
        connectionTutorialFinished: false
    }),
    getters: {
        getCurrentStep: (state) => state.currentStep,
        getSteps: (state) => state.steps,
        getCurrentTutorial: (state) => state.currentTutorial,
        getConnectionTutorialFinished: (state) => state.connectionTutorialFinished
    },
    actions: {
        increment() {
            if(this.currentStep <= this.steps) {
              this.currentStep++;
            }
        },
        decrement() {
            if(this.currentStep >= 1) {
              this.currentStep--;
            }  
        },
        setCurrentTutorialToConnectionTutorial() {
            this.currentTutorial = "Connection Tutorial"
        },
        setConnectionTutorialFinished() { 
            this.connectionTutorialFinished = true;
        },
        restartTutorial() {
            this.currentStep = 1;
            this.connectionTutorialFinished = false;
        }
    }
})