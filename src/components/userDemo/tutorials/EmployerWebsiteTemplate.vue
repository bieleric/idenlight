<script setup>
    import { useDemoTutorialStore } from '../../../stores/demoTutorialStore';
    import { useI18n } from 'vue-i18n';
    import EmployerPresentScreen from './TutorialComponents/EmployerPresentScreen.vue';
    import EmployerVerifyScreen from './TutorialComponents/EmployerVerifyScreen.vue';

    const { t } = useI18n();
    const demoTutorialStore = useDemoTutorialStore();
</script>


<template>
    <div class="employer-website bg-light" data-type="employerWebsite">
        <div class="p-2 bg-color-brown text-light text-uppercase font-large d-flex justify-content-center">
            {{ t("tutorial.employer_website.applicant_portal") }}
        </div>
        <div class="d-flex justify-content-center bg-color-beige">
            <img src="/employer_banner.png" style="max-height: 75px; max-width: 100%;">
        </div>
        <EmployerPresentScreen v-if="demoTutorialStore.currentStep===3" data-type="presentScreen"/>
        <EmployerVerifyScreen v-if="demoTutorialStore.currentStep===6" data-type="verifyScreen"/>
    </div>
</template>