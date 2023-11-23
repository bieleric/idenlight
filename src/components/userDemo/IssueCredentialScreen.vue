<script setup>
    import ScrollHandAnimation from '../animations/ScrollHandAnimation.vue';
    import { ref, reactive, onMounted } from 'vue';
    import { useI18n } from 'vue-i18n';
    import { useUserDemoStore } from '../../stores/userDemoStore';
    import { useDemoTutorialStore } from '../../stores/demoTutorialStore';
    import WarningAlert from '../alerts/WarningAlert.vue';

    const { t } = useI18n();
    const userDemoStore = useUserDemoStore();
    const demoTutorialStore = useDemoTutorialStore();
    const lessonTextContainer = ref(null);

    let state = reactive({
        showScrollHint: false,
        showWarning: false
    })

    onMounted(() => {
        state.showScrollHint = lessonTextContainer.value.scrollHeight > lessonTextContainer.value.clientHeight ? true : false;

        lessonTextContainer.value.addEventListener("scroll", () => {
            state.showScrollHint = false;
        });
    })

    const startTutorialIssueCredential = (e) => {
        if(!demoTutorialStore.getConnectionTutorialFinished) {
            state.showWarning = true;
            e.preventDefault();
        }
        else {
            userDemoStore.setTutorial(true);
            userDemoStore.setShowNavigationButtons(false);
            demoTutorialStore.setCurrentTutorialToIssueTutorial();
            demoTutorialStore.restartTutorial();
        }

    }
</script>

<template>
    <div class="lesson-header font-large font-light text-uppercase" data-type="issueCredentialTitle">{{ t("steps.user.issue.title") }}</div>
    <div ref="lessonTextContainer" class="lesson-text" data-type="lessonTextContainer">
        <ScrollHandAnimation id="scrollHint" v-if="state.showScrollHint" data-type="scrollHandAnimation" />
        <p class="font-medium font-light">{{ t("steps.user.issue.paragraph1") }}</p>
        <WarningAlert v-if="state.showWarning" :text="t('alert_messages.doConnectionTutorial')" data-type="warningAlert" />
        
        <div @click="startTutorialIssueCredential" class="tutorial-button btn button-outline-primary mt-4 d-flex justify-content-between" data-type="startIssueCredentialButton">
            <span></span> 
            {{ t("tutorial.issue_credential.title") }}
            <font-awesome-icon v-if="demoTutorialStore.getIssueTutorialFinished" class="font-large" icon="circle-check" />
        </div>
    </div>
</template>