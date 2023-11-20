<script setup>
    import ScrollHandAnimation from '../animations/ScrollHandAnimation.vue';
    import { reactive, onMounted } from 'vue';
    import { useI18n } from 'vue-i18n';
    import { useUserDemoStore } from '../../stores/userDemoStore';
    import { useDemoTutorialStore } from '../../stores/demoTutorialStore';
    import WarningAlert from '../alerts/WarningAlert.vue';

    const { t } = useI18n();
    const userDemoStore = useUserDemoStore();
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

    const startTutorialPresentProof = (e) => {
        if(!demoTutorialStore.getIssueTutorialFinished) {
            state.showWarning = true;
            e.preventDefault();
        }
        else {
            userDemoStore.setTutorial(true);
            userDemoStore.setShowNavigationButtons(false);
            demoTutorialStore.setCurrentTutorialToPresentTutorial();
            demoTutorialStore.restartTutorial();
        }

    }
</script>

<template>
    <div class="lesson-header font-large font-light text-uppercase">{{ t("steps.user.present.title") }}</div>
    <div class="lesson-text">
        <ScrollHandAnimation id="scrollHint" v-if="state.showScrollHint"/>
        <p class="font-medium font-light">{{ t("steps.user.present.paragraph1") }}</p>
        <p class="font-medium font-light">{{ t("steps.user.present.paragraph2") }}</p>
        <p class="font-medium font-light"><i>{{ t("steps.user.present.paragraph3") }}</i></p>
        <WarningAlert v-if="state.showWarning" :text="t('alert_messages.doIssueTutorial')" />
        <div @click="startTutorialPresentProof" class="btn button-outline-primary p-3 mt-4 d-flex justify-content-between">{{ t("tutorial.present_proof.title") }} <font-awesome-icon v-if="demoTutorialStore.getPresentTutorialFinished" class="font-large" icon="circle-check" /></div>
    </div>
</template>