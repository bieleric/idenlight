<script setup>
    import FocusButtons from '../components/FocusButtons.vue';
    import { useI18n } from 'vue-i18n';
    import { useFocusStore } from '../stores/focusStore';
    import { useUserNavigationStore } from '../stores/userNavigationStore';
    import { useTutorialStore } from '../stores/tutorialStore';
    
    const { t } = useI18n();
    const focusStore = useFocusStore();
    const userNavigationStore = useUserNavigationStore();
    const tutorialStore = useTutorialStore();

    const resetSteps = () => {
        userNavigationStore.resetCurrentStep();
        tutorialStore.restartTutorial();
    }
</script>
 
<template> 
    <div class="col-md-4 col-10 h-100 mx-auto d-flex flex-column justify-content-center align-items-center">
        <div class="col-12 text-light h1 text-center mb-4">{{ t('focus.title') }}</div>
        <FocusButtons :user_title="t('focus.user_title')" :developer_title="t('focus.developer_title')"></FocusButtons>
        <div class="w-100 d-flex justify-content-end">
            <RouterLink v-if="focusStore.getUserActive" to="/demoUser">
                <div @click="resetSteps" class="navigation-button btn button-primary"><font-awesome-icon icon="chevron-right" /></div>
            </RouterLink>
            <RouterLink v-else to="/demoDeveloper">
                <div class="navigation-button btn button-primary"><font-awesome-icon icon="chevron-right" /></div>
            </RouterLink>
        </div>
    </div>
</template>