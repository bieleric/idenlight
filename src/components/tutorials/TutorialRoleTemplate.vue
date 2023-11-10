<script setup>
    import { useI18n } from 'vue-i18n';
    import { useTutorialStore } from '../../stores/tutorialStore';

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
                <span v-if="tutorialStore.getCurrentTutorial===tutorialStore.getConnectionTutorialName">{{ t("tutorial.roles.alumni") }}</span>
                <span v-if="tutorialStore.getCurrentTutorial===tutorialStore.getIssueTutorialName">{{ t("tutorial.roles.htw") }}</span>
            </div>
        </div>
        <div class="role-image-container">
            <img v-if="tutorialStore.getCurrentTutorial===tutorialStore.getConnectionTutorialName" src="/trust_triangle_focus_alumni.png" class="role-image"/>
            
        </div>
    </div>
</template>