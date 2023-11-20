<script setup>
    import { useI18n } from 'vue-i18n';
    import { useDemoTutorialStore } from '../../../stores/demoTutorialStore';

    const { t } = useI18n();
    const demoTutorialStore = useDemoTutorialStore();  
</script>

<template>
    <div class="instruction-text mx-auto mt-5">
        <div class="font-large font-light text-light">
            <span v-if="demoTutorialStore.getCurrentTutorial===demoTutorialStore.getConnectionTutorialName && demoTutorialStore.currentStep===2">{{ t("tutorial.create_connection.instruction") }}</span>
            <span v-if="demoTutorialStore.getCurrentTutorial===demoTutorialStore.getIssueTutorialName && demoTutorialStore.currentStep===2">{{ t("tutorial.issue_credential.instruction1") }}</span>
            <span v-if="demoTutorialStore.getCurrentTutorial===demoTutorialStore.getIssueTutorialName && demoTutorialStore.currentStep===5">{{ t("tutorial.issue_credential.instruction2") }}</span>
            <span v-if="demoTutorialStore.getCurrentTutorial===demoTutorialStore.getPresentTutorialName && demoTutorialStore.currentStep===2">{{ t("tutorial.present_proof.instruction1") }}</span>
            <span v-if="demoTutorialStore.getCurrentTutorial===demoTutorialStore.getPresentTutorialName && demoTutorialStore.currentStep===5">{{ t("tutorial.present_proof.instruction2") }}</span>
        </div>
    </div>
</template>../../../stores/demoTutorialStore