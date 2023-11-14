<script setup>
    import { useI18n } from 'vue-i18n';
    import { useTutorialStore } from '../../stores/tutorialStore';

    const { t } = useI18n();
    const tutorialStore = useTutorialStore();  
</script>

<template>
    <div class="instruction-text mx-auto mt-5">
        <div class="font-large font-light text-light">
            <span v-if="tutorialStore.getCurrentTutorial===tutorialStore.getConnectionTutorialName && tutorialStore.currentStep===2">{{ t("tutorial.create_connection.instruction") }}</span>
            <span v-if="tutorialStore.getCurrentTutorial===tutorialStore.getIssueTutorialName && tutorialStore.currentStep===2">{{ t("tutorial.issue_credential.instruction1") }}</span>
            <span v-if="tutorialStore.getCurrentTutorial===tutorialStore.getIssueTutorialName && tutorialStore.currentStep===5">{{ t("tutorial.issue_credential.instruction2") }}</span>
            <span v-if="tutorialStore.getCurrentTutorial===tutorialStore.getPresentTutorialName && tutorialStore.currentStep===2">{{ t("tutorial.present_proof.instruction1") }}</span>
        </div>
    </div>
</template>