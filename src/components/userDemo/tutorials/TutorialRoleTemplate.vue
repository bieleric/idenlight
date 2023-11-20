<script setup>
    import { useI18n } from 'vue-i18n';
    import { useTutorialStore } from '../../../stores/tutorialStore';

    const { t } = useI18n();
    const tutorialStore = useTutorialStore();  
</script>

<template>
    <div class="roles text-light">
        <div class="role-text">
            <div class="font-large font-light">
                <span>{{ t("tutorial.roles.youarenow") }}</span>
            </div>
            <div class="font-extra-large text-uppercase">
                <span v-if="(tutorialStore.getCurrentTutorial===tutorialStore.getConnectionTutorialName && tutorialStore.currentStep===1) || (tutorialStore.getCurrentTutorial===tutorialStore.getIssueTutorialName && tutorialStore.currentStep===4) || (tutorialStore.getCurrentTutorial===tutorialStore.getPresentTutorialName && tutorialStore.currentStep===1)">{{ t("tutorial.roles.alumni") }}</span>
                <span v-if="tutorialStore.getCurrentTutorial===tutorialStore.getIssueTutorialName && tutorialStore.currentStep===1">{{ t("tutorial.roles.htw") }}</span>
                <span v-if="tutorialStore.getCurrentTutorial===tutorialStore.getPresentTutorialName && tutorialStore.currentStep===4">{{ t("tutorial.roles.employer") }}</span>
            </div>
        </div>
        <div class="role-image-container">
            <img v-if="(tutorialStore.getCurrentTutorial===tutorialStore.getConnectionTutorialName && tutorialStore.currentStep===1) || (tutorialStore.getCurrentTutorial===tutorialStore.getIssueTutorialName && tutorialStore.currentStep===4) || (tutorialStore.getCurrentTutorial===tutorialStore.getPresentTutorialName && tutorialStore.currentStep===1)" src="/trust_triangle_focus_alumni.png" class="role-image"/>
            <img v-if="tutorialStore.getCurrentTutorial===tutorialStore.getIssueTutorialName && tutorialStore.currentStep===1" src="/trust_triangle_focus_htw.png" class="role-image"/>
            <img v-if="tutorialStore.getCurrentTutorial===tutorialStore.getPresentTutorialName && tutorialStore.currentStep===4" src="/trust_triangle_focus_employer.png" class="role-image"/>
        </div>
    </div>
</template>