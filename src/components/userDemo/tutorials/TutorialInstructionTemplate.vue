<script setup>
    import { useI18n } from 'vue-i18n';
    import { useDemoTutorialStore } from '../../../stores/demoTutorialStore';
    import { useWebhookStore } from '../../../stores/webhookStore';

    const { t } = useI18n();
    const demoTutorialStore = useDemoTutorialStore();  
    const webhookStore = useWebhookStore();
</script>

<template>
    <div class="instruction-text mx-auto mt-5" data-type="instructionTextContainer">
        <div class="font-large font-light text-light">
            <span v-if="demoTutorialStore.getCurrentTutorial===demoTutorialStore.getConnectionTutorialName && demoTutorialStore.currentStep===2" data-type="connectionInstruction">{{ t("tutorial.create_connection.instruction") }}</span>
            <span v-if="demoTutorialStore.getCurrentTutorial===demoTutorialStore.getIssueTutorialName && demoTutorialStore.currentStep===2" data-type="issueInstruction1">{{ t("tutorial.issue_credential.instruction1") }}</span>
            <span v-if="demoTutorialStore.getCurrentTutorial===demoTutorialStore.getIssueTutorialName && demoTutorialStore.currentStep===5" data-type="issueInstruction2">{{ t("tutorial.issue_credential.instruction2") }}</span>
            <span v-if="demoTutorialStore.getCurrentTutorial===demoTutorialStore.getPresentTutorialName && demoTutorialStore.currentStep===2 && !webhookStore.getRevocationStatusRevoked" data-type="presentInstruction1">{{ t("tutorial.present_proof.instruction1") }}</span>
            <span v-if="demoTutorialStore.getCurrentTutorial===demoTutorialStore.getPresentTutorialName && demoTutorialStore.currentStep===2 && webhookStore.getRevocationStatusRevoked" data-type="presentInstruction1_2">{{ t("tutorial.present_proof.instruction1_2") }}</span>
            <span v-if="demoTutorialStore.getCurrentTutorial===demoTutorialStore.getPresentTutorialName && demoTutorialStore.currentStep===5" data-type="presentInstruction2">{{ t("tutorial.present_proof.instruction2") }}</span>
            <span v-if="demoTutorialStore.getCurrentTutorial===demoTutorialStore.getRevokeTutorialName && demoTutorialStore.currentStep===2" data-type="revokeInstruction1">{{ t("tutorial.revoke_credential.instruction1") }}</span>
            <span v-if="demoTutorialStore.getCurrentTutorial===demoTutorialStore.getRevokeTutorialName && demoTutorialStore.currentStep===4" data-type="revokeInstruction2">{{ t("tutorial.revoke_credential.instruction2") }}</span>
        </div>
    </div>
</template>