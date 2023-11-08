<script setup>
    import ScrollHandAnimation from '../animations/ScrollHandAnimation.vue';
    import { reactive, onMounted } from 'vue';
    import { useI18n } from 'vue-i18n';

    const { t } = useI18n();

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
</script>

<template>
    <div class="lesson-header font-large font-light text-uppercase">{{ t("steps.user.verifiable_credential.title") }}</div>
    <div class="lesson-text">
        <ScrollHandAnimation id="scrollHint" v-if="state.showScrollHint"/>
        <p class="font-medium font-light">{{ t("steps.user.verifiable_credential.paragraph1") }}</p>
        <p class="font-medium font-light mt-4">{{ t("steps.user.verifiable_credential.paragraph2") }}</p>
        <p class="font-medium font-light mt-4">{{ t("steps.user.verifiable_credential.paragraph3") }}</p>
        <div class="cards my-5">
            <div class="vc-card my-2">{{ t("steps.user.verifiable_credential.actions.issue") }}</div>
            <div class="vc-card my-2">{{ t("steps.user.verifiable_credential.actions.store") }}</div>
            <div class="vc-card my-2">{{ t("steps.user.verifiable_credential.actions.present") }}</div>
            <div class="vc-card my-2">{{ t("steps.user.verifiable_credential.actions.proof") }}</div>
        </div>
    </div>
</template>