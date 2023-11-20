<script setup>
    import ScrollHandAnimation from '../animations/ScrollHandAnimation.vue';
    import { reactive, onMounted } from 'vue';
    import { useI18n } from 'vue-i18n';
    import { useUserNavigationStore } from '../../stores/userNavigationStore';
    import { useDemoTutorialStore } from '../../stores/demoTutorialStore';
    import WarningAlert from '../alerts/WarningAlert.vue';

    const { t } = useI18n();
    const userNavigationStore = useUserNavigationStore();
    const demoTutorialStore = useDemoTutorialStore();

    let state = reactive({
        showScrollHint: false,
        showWarning: false
    })

    onMounted(() => {
        const lessonContainer = document.getElementsByClassName("lesson-text")[0];
        if(lessonContainer.scrollHeight > lessonContainer.clientHeight) {
            state.showScrollHint = true;
        }
        else {
            state.showScrollHint = false;
        }

        lessonContainer.addEventListener("scroll", () => {
            document.getElementById("scrollHint").style.display = "none";
        });
    })

    const startTutorialIssueCredential = (e) => {
        if(!demoTutorialStore.getConnectionTutorialFinished) {
            state.showWarning = true;
            e.preventDefault();
        }
        else {
            userNavigationStore.setTutorial(true);
            userNavigationStore.setShowNavigationButtons(false);
            demoTutorialStore.setCurrentTutorialToIssueTutorial();
            demoTutorialStore.restartTutorial();
        }

    }
</script>

<template>
    <div class="lesson-header font-large font-light text-uppercase">{{ t("steps.user.issue.title") }}</div>
    <div class="lesson-text">
        <ScrollHandAnimation id="scrollHint" v-if="state.showScrollHint"/>
        <p class="font-medium font-light">{{ t("steps.user.issue.paragraph1") }}</p>
        <WarningAlert v-if="state.showWarning" :text="t('alert_messages.doConnectionTutorial')" />
        <div @click="startTutorialIssueCredential" class="btn button-outline-primary p-3 mt-4 d-flex justify-content-between">{{ t("tutorial.issue_credential.title") }} <font-awesome-icon v-if="demoTutorialStore.getIssueTutorialFinished" class="font-large" icon="circle-check" /></div>
    </div>
</template>