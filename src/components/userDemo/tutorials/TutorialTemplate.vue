<script setup>
    import { computed } from 'vue';
    import { useI18n } from 'vue-i18n';
    import { useUserDemoStore } from '../../../stores/userDemoStore';
    import { useDemoTutorialStore } from '../../../stores/demoTutorialStore';
    import TutorialRoleTemplate from './TutorialRoleTemplate.vue';
    import TutorialInstructionTemplate from './TutorialInstructionTemplate.vue';
    import HTWDresdenWebsiteTemplate from './HTWDresdenWebsiteTemplate.vue';
    import PhoneAcceptCredentialScreen from './TutorialComponents/PhoneAcceptCredentialScreen.vue';
    import EmployerWebsiteTemplate from './EmployerWebsiteTemplate.vue';

    const { t } = useI18n();
    const userDemoStore = useUserDemoStore();
    const demoTutorialStore = useDemoTutorialStore();

    const classObject = computed(() => ({
        firstStep: demoTutorialStore.getCurrentStep === 1 ? true : false
    }))

    const increment = () => {
        if(demoTutorialStore.getCurrentTutorial === demoTutorialStore.getConnectionTutorialName) {
            demoTutorialStore.incrementConnectionTutorial();
        }
        else if(demoTutorialStore.getCurrentTutorial === demoTutorialStore.getIssueTutorialName) {
            demoTutorialStore.incrementIssueTutorial();
        } 
        else if(demoTutorialStore.getCurrentTutorial === demoTutorialStore.getPresentTutorialName) {
            demoTutorialStore.incrementPresentTutorial();
        } 
    }

    const decrement = () => {
        demoTutorialStore.decrement();
    }

    const finishTutorial = () => {
        userDemoStore.setShowNavigationButtons(true);
        userDemoStore.setTutorial(false);
        if(demoTutorialStore.getCurrentTutorial === demoTutorialStore.getConnectionTutorialName) {
            demoTutorialStore.setConnectionTutorialFinished(); 
        }
        else if(demoTutorialStore.getCurrentTutorial === demoTutorialStore.getIssueTutorialName) {
            demoTutorialStore.setIssueTutorialFinished();
        }
        else if(demoTutorialStore.getCurrentTutorial === demoTutorialStore.getPresentTutorialName) {
            demoTutorialStore.setPresentTutorialFinished();
        }
    }
    
</script>

<template>
    <div class="tutorial" data-type="tutorialContainer">
        <div class="tutorial-header mb-3 text-light font-italic text-center font-light">
            <div @click="decrement" v-if="demoTutorialStore.getCurrentStep!==1" class="btn button-outline-secondary" data-type="decrementButton">
                <font-awesome-icon class="tutorial-navigation font-large" icon="chevron-left" />
            </div>
            <div class="tutorial-title" data-type="tutorialTitle">
                <span v-if="demoTutorialStore.getCurrentTutorial===demoTutorialStore.getConnectionTutorialName" class="font-italic">{{ t("tutorial.create_connection.title") }}</span>
                <span v-if="demoTutorialStore.getCurrentTutorial===demoTutorialStore.getIssueTutorialName" class="font-italic">{{ t("tutorial.issue_credential.title") }}</span>
                <span v-if="demoTutorialStore.getCurrentTutorial===demoTutorialStore.getPresentTutorialName" class="font-italic">{{ t("tutorial.present_proof.title") }}</span>
            </div>
            <div @click="increment" v-if="demoTutorialStore.getCurrentStep!==demoTutorialStore.getCurrentTutorialSteps" :class="{  'pulse-animation': classObject.firstStep, 'btn button-secondary': true}" data-type="incrementButton">
                <font-awesome-icon class="tutorial-navigation font-large" icon="chevron-right" />
            </div>
            <div @click="finishTutorial" v-if="demoTutorialStore.getCurrentStep===demoTutorialStore.getCurrentTutorialSteps" class="btn button-secondary" data-type="closeButton">
                <font-awesome-icon class="tutorial-navigation font-large" icon="xmark" />
            </div>
        </div>
        <TutorialRoleTemplate v-if="demoTutorialStore.getCurrentStep===1" />
        <TutorialInstructionTemplate v-if="demoTutorialStore.getCurrentStep===2" />
        <HTWDresdenWebsiteTemplate v-if="demoTutorialStore.getCurrentStep===3 && (demoTutorialStore.getCurrentTutorial===demoTutorialStore.getConnectionTutorialName || demoTutorialStore.getCurrentTutorial===demoTutorialStore.getIssueTutorialName)" />
        <EmployerWebsiteTemplate v-if="(demoTutorialStore.getCurrentStep===3 || demoTutorialStore.getCurrentStep===6) && demoTutorialStore.getCurrentTutorial===demoTutorialStore.getPresentTutorialName" />
        <TutorialRoleTemplate v-if="demoTutorialStore.getCurrentStep===4 && (demoTutorialStore.getCurrentTutorial===demoTutorialStore.getPresentTutorialName || demoTutorialStore.getCurrentTutorial===demoTutorialStore.getIssueTutorialName)" />
        <TutorialInstructionTemplate v-if="demoTutorialStore.getCurrentStep===5" />
        <PhoneAcceptCredentialScreen v-if="demoTutorialStore.getCurrentStep===6 && demoTutorialStore.getCurrentTutorial===demoTutorialStore.getIssueTutorialName" />
    </div>
</template>