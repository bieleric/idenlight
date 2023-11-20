<script setup>
    import { useI18n } from 'vue-i18n';
    import { useUserNavigationStore } from '../../../stores/userNavigationStore';
    import { useTutorialStore } from '../../../stores/tutorialStore';
    import TutorialRoleTemplate from './TutorialRoleTemplate.vue';
    import TutorialInstructionTemplate from './TutorialInstructionTemplate.vue';
    import HTWDresdenWebsiteTemplate from './HTWDresdenWebsiteTemplate.vue';
    import PhoneAcceptCredentialScreen from './TutorialComponents/PhoneAcceptCredentialScreen.vue';
    import EmployerWebsiteTemplate from './EmployerWebsiteTemplate.vue';

    const { t } = useI18n();
    const userNavigationStore = useUserNavigationStore();
    const tutorialStore = useTutorialStore();

    const increment = () => {
        if(tutorialStore.getCurrentTutorial === tutorialStore.getConnectionTutorialName) {
            tutorialStore.incrementConnectionTutorial();
        }
        else if(tutorialStore.getCurrentTutorial === tutorialStore.getIssueTutorialName) {
            tutorialStore.incrementIssueTutorial();
        } 
        else if(tutorialStore.getCurrentTutorial === tutorialStore.getPresentTutorialName) {
            tutorialStore.incrementPresentTutorial();
        } 
    }

    const decrement = () => {
        tutorialStore.decrement();
    }

    const finishTutorial = () => {
        userNavigationStore.setShowNavigationButtons(true);
        userNavigationStore.setTutorial(false);
        if(tutorialStore.getCurrentTutorial === tutorialStore.getConnectionTutorialName) {
            tutorialStore.setConnectionTutorialFinished(); 
        }
        else if(tutorialStore.getCurrentTutorial === tutorialStore.getIssueTutorialName) {
            tutorialStore.setIssueTutorialFinished();
        }
        else if(tutorialStore.getCurrentTutorial === tutorialStore.getPresentTutorialName) {
            tutorialStore.setPresentTutorialFinished();
        }
    }
    
</script>

<template>
    <div class="tutorial">
        <div class="tutorial-header mb-3 text-light font-italic text-center font-light">
            <font-awesome-icon @click="decrement" v-if="tutorialStore.getCurrentStep!==1" class="tutorial-navigation font-large" icon="chevron-left" />
            <div class="tutorial-title">
                <span v-if="tutorialStore.getCurrentTutorial===tutorialStore.getConnectionTutorialName" class="font-italic">{{ t("tutorial.create_connection.title") }}</span>
                <span v-if="tutorialStore.getCurrentTutorial===tutorialStore.getIssueTutorialName" class="font-italic">{{ t("tutorial.issue_credential.title") }}</span>
                <span v-if="tutorialStore.getCurrentTutorial===tutorialStore.getPresentTutorialName" class="font-italic">{{ t("tutorial.present_proof.title") }}</span>
            </div>
            <font-awesome-icon @click="increment" v-if="tutorialStore.getCurrentStep!==tutorialStore.getCurrentTutorialSteps" class="tutorial-navigation font-large" icon="chevron-right" />
            <font-awesome-icon @click="finishTutorial" v-if="tutorialStore.getCurrentStep===tutorialStore.getCurrentTutorialSteps" class="tutorial-navigation font-large" icon="xmark" />
        </div>
        <TutorialRoleTemplate v-if="tutorialStore.getCurrentStep===1" />
        <TutorialInstructionTemplate v-if="tutorialStore.getCurrentStep===2" />
        <HTWDresdenWebsiteTemplate v-if="tutorialStore.getCurrentStep===3 && (tutorialStore.getCurrentTutorial===tutorialStore.getConnectionTutorialName || tutorialStore.getCurrentTutorial===tutorialStore.getIssueTutorialName)" />
        <EmployerWebsiteTemplate v-if="(tutorialStore.getCurrentStep===3 || tutorialStore.getCurrentStep===6) && tutorialStore.getCurrentTutorial===tutorialStore.getPresentTutorialName" />
        <TutorialRoleTemplate v-if="tutorialStore.getCurrentStep===4 && (tutorialStore.getCurrentTutorial===tutorialStore.getPresentTutorialName || tutorialStore.getCurrentTutorial===tutorialStore.getIssueTutorialName)" />
        <TutorialInstructionTemplate v-if="tutorialStore.getCurrentStep===5" />
        <PhoneAcceptCredentialScreen v-if="tutorialStore.getCurrentStep===6 && tutorialStore.getCurrentTutorial===tutorialStore.getIssueTutorialName" />
    </div>
</template>