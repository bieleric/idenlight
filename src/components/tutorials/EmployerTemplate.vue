<script setup>
    import { useTutorialStore } from '../../stores/tutorialStore';
    import { useI18n } from 'vue-i18n';
    import EmployerPresentScreen from './TutorialScreens/EmployerPresentScreen.vue';
    import EmployerVerifyScreen from './TutorialScreens/EmployerVerifyScreen.vue';

    const { t } = useI18n();
    const tutorialStore = useTutorialStore();
</script>


<template>
    <div class="employer-website bg-light">
        <div class="p-2 bg-color-brown text-light text-uppercase font-large d-flex justify-content-center">
            {{ t("tutorial.employer_website.applicant_portal") }}
        </div>
        <div class="d-flex justify-content-center bg-color-beige">
            <img src="/employer_banner.png" style="max-height: 75px; max-width: 100%;">
        </div>
        <EmployerPresentScreen v-if="tutorialStore.currentStep===3" />
        <EmployerVerifyScreen v-if="tutorialStore.currentStep===6" />
    </div>
</template>