<script setup>
    import { useI18n } from 'vue-i18n';
    import { useUserNavigationStore } from '../../../stores/userNavigationStore';
    import { useDemoTutorialStore } from '../../../stores/demoTutorialStore';
    import TutorialRoleTemplate from './TutorialRoleTemplate.vue';
    import TutorialInstructionTemplate from './TutorialInstructionTemplate.vue';
    import HTWDresdenWebsiteTemplate from './HTWDresdenWebsiteTemplate.vue';
    import PhoneAcceptCredentialScreen from './TutorialComponents/PhoneAcceptCredentialScreen.vue';
    import EmployerWebsiteTemplate from './EmployerWebsiteTemplate.vue';

    const { t } = useI18n();
    const userNavigationStore = useUserNavigationStore();
    const demoTutorialStore = useDemoTutorialStore();

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
        userNavigationStore.setShowNavigationButtons(true);
        userNavigationStore.setTutorial(false);
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
    <div class="tutorial">
        <div class="tutorial-header mb-3 text-light font-italic text-center font-light">
            <font-awesome-icon @click="decrement" v-if="demoTutorialStore.getCurrentStep!==1" class="tutorial-navigation font-large" icon="chevron-left" />
            <div class="tutorial-title">
                <span v-if="demoTutorialStore.getCurrentTutorial===demoTutorialStore.getConnectionTutorialName" class="font-italic">{{ t("tutorial.create_connection.title") }}</span>
                <span v-if="demoTutorialStore.getCurrentTutorial===demoTutorialStore.getIssueTutorialName" class="font-italic">{{ t("tutorial.issue_credential.title") }}</span>
                <span v-if="demoTutorialStore.getCurrentTutorial===demoTutorialStore.getPresentTutorialName" class="font-italic">{{ t("tutorial.present_proof.title") }}</span>
            </div>
            <font-awesome-icon @click="increment" v-if="demoTutorialStore.getCurrentStep!==demoTutorialStore.getCurrentTutorialSteps" class="tutorial-navigation font-large" icon="chevron-right" />
            <font-awesome-icon @click="finishTutorial" v-if="demoTutorialStore.getCurrentStep===demoTutorialStore.getCurrentTutorialSteps" class="tutorial-navigation font-large" icon="xmark" />
        </div>
        <TutorialRoleTemplate v-if="demoTutorialStore.getCurrentStep===1" />
        <TutorialInstructionTemplate v-if="demoTutorialStore.getCurrentStep===2" />
        <HTWDresdenWebsiteTemplate v-if="demoTutorialStore.getCurrentStep===3 && (demoTutorialStore.getCurrentTutorial===demoTutorialStore.getConnectionTutorialName || demoTutorialStore.getCurrentTutorial===demoTutorialStore.getIssueTutorialName)" />
        <EmployerWebsiteTemplate v-if="(demoTutorialStore.getCurrentStep===3 || demoTutorialStore.getCurrentStep===6) && demoTutorialStore.getCurrentTutorial===demoTutorialStore.getPresentTutorialName" />
        <TutorialRoleTemplate v-if="demoTutorialStore.getCurrentStep===4 && (demoTutorialStore.getCurrentTutorial===demoTutorialStore.getPresentTutorialName || demoTutorialStore.getCurrentTutorial===demoTutorialStore.getIssueTutorialName)" />
        <TutorialInstructionTemplate v-if="demoTutorialStore.getCurrentStep===5" />
        <PhoneAcceptCredentialScreen v-if="demoTutorialStore.getCurrentStep===6 && demoTutorialStore.getCurrentTutorial===demoTutorialStore.getIssueTutorialName" />
    </div>
</template>../../../stores/demoTutorialStore