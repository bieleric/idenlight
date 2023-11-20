<script setup>
    import { useI18n } from 'vue-i18n';
    import { useDemoTutorialStore } from '../../../stores/demoTutorialStore';

    const { t } = useI18n();
    const demoTutorialStore = useDemoTutorialStore();  
</script>

<template>
    <div class="roles text-light">
        <div class="role-text">
            <div class="font-large font-light">
                <span>{{ t("tutorial.roles.youarenow") }}</span>
            </div>
            <div class="font-extra-large text-uppercase">
                <span v-if="(demoTutorialStore.getCurrentTutorial===demoTutorialStore.getConnectionTutorialName && demoTutorialStore.currentStep===1) || (demoTutorialStore.getCurrentTutorial===demoTutorialStore.getIssueTutorialName && demoTutorialStore.currentStep===4) || (demoTutorialStore.getCurrentTutorial===demoTutorialStore.getPresentTutorialName && demoTutorialStore.currentStep===1)">{{ t("tutorial.roles.alumni") }}</span>
                <span v-if="demoTutorialStore.getCurrentTutorial===demoTutorialStore.getIssueTutorialName && demoTutorialStore.currentStep===1">{{ t("tutorial.roles.htw") }}</span>
                <span v-if="demoTutorialStore.getCurrentTutorial===demoTutorialStore.getPresentTutorialName && demoTutorialStore.currentStep===4">{{ t("tutorial.roles.employer") }}</span>
            </div>
        </div>
        <div class="role-image-container">
            <img v-if="(demoTutorialStore.getCurrentTutorial===demoTutorialStore.getConnectionTutorialName && demoTutorialStore.currentStep===1) || (demoTutorialStore.getCurrentTutorial===demoTutorialStore.getIssueTutorialName && demoTutorialStore.currentStep===4) || (demoTutorialStore.getCurrentTutorial===demoTutorialStore.getPresentTutorialName && demoTutorialStore.currentStep===1)" src="/trust_triangle_focus_alumni.png" class="role-image"/>
            <img v-if="demoTutorialStore.getCurrentTutorial===demoTutorialStore.getIssueTutorialName && demoTutorialStore.currentStep===1" src="/trust_triangle_focus_htw.png" class="role-image"/>
            <img v-if="demoTutorialStore.getCurrentTutorial===demoTutorialStore.getPresentTutorialName && demoTutorialStore.currentStep===4" src="/trust_triangle_focus_employer.png" class="role-image"/>
        </div>
    </div>
</template>../../../stores/demoTutorialStore