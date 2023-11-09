<script setup>
    import ScrollHandAnimation from '../animations/ScrollHandAnimation.vue';
    import { reactive, onMounted } from 'vue';
    import { useI18n } from 'vue-i18n';
    import { useUserNavigationStore } from '../../stores/userNavigationStore';
    import { useTutorialStore } from '../../stores/tutorialStore';

    const { t } = useI18n();
    const userNavigationStore = useUserNavigationStore();
    const tutorialStore = useTutorialStore();

    let state = reactive({
        showScrollHint: false
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

    const startTutorialConnectionCreation = () => {
        userNavigationStore.setTutorial(true);
        userNavigationStore.setShowNavigationButtons(false);
        tutorialStore.setCurrentTutorialToConnectionTutorial();
        tutorialStore.restartTutorial();
    }
</script>

<template>
    <div class="lesson-header font-large font-light text-uppercase">{{ t("steps.user.connection.title") }}</div>
    <div class="lesson-text">
        <ScrollHandAnimation id="scrollHint" v-if="state.showScrollHint"/>
        <p class="font-medium font-light">{{ t("steps.user.connection.paragraph1") }}</p>
        <p class="font-medium font-light mt-4">{{ t("steps.user.connection.paragraph2") }}</p>
        <p class="font-medium font-light mt-4">{{ t("steps.user.connection.paragraph3") }}</p>
        <div @click="startTutorialConnectionCreation" class="btn button-outline-primary p-3 mt-4 d-flex justify-content-between">{{ t("tutorial.create_connection.title") }} <font-awesome-icon v-if="tutorialStore.getConnectionTutorialFinished" class="font-large" icon="circle-check" /></div>
    </div>
</template>