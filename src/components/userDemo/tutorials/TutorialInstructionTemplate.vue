<script setup>
    import { useI18n } from 'vue-i18n';
    import { useDemoTutorialStore } from '../../../stores/demoTutorialStore';

    const { t } = useI18n();
    const demoTutorialStore = useDemoTutorialStore();  
</script>

<template>
    <div class="instruction-text mx-auto mt-5" data-type="instructionTextContainer">
        <div class="font-large font-light text-light">
            <span v-if="demoTutorialStore.getCurrentTutorial===demoTutorialStore.getConnectionTutorialName && demoTutorialStore.currentStep===2" data-type="connectionInstruction">{{ t("tutorial.create_connection.instruction") }}</span>
            <span v-if="demoTutorialStore.getCurrentTutorial===demoTutorialStore.getIssueTutorialName && demoTutorialStore.currentStep===2" data-type="issueInstruction1">{{ t("tutorial.issue_credential.instruction1") }}</span>
            <span v-if="demoTutorialStore.getCurrentTutorial===demoTutorialStore.getIssueTutorialName && demoTutorialStore.currentStep===5" data-type="issueInstruction2">{{ t("tutorial.issue_credential.instruction2") }}</span>
            <span v-if="demoTutorialStore.getCurrentTutorial===demoTutorialStore.getPresentTutorialName && demoTutorialStore.currentStep===2" data-type="presentInstruction1">{{ t("tutorial.present_proof.instruction1") }}</span>
            <span v-if="demoTutorialStore.getCurrentTutorial===demoTutorialStore.getPresentTutorialName && demoTutorialStore.currentStep===5" data-type="presentInstruction2">{{ t("tutorial.present_proof.instruction2") }}</span>
        </div>
    </div>
</template>