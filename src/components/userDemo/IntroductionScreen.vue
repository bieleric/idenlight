<script setup>
    import { ref, reactive, onMounted } from 'vue';
    import ScrollHandAnimation from '../animations/ScrollHandAnimation.vue';
    import { useI18n } from 'vue-i18n';

    const { t } = useI18n();
    const lessonTextContainer = ref(null);

    let state = reactive({
        showScrollHint: false
    })

    onMounted(() => {
        if(lessonTextContainer.value.scrollHeight > lessonTextContainer.value.clientHeight) {
            state.showScrollHint = true;
        }
        else {
            state.showScrollHint = false;
        }

        lessonTextContainer.value.addEventListener("scroll", () => {
            state.showScrollHint = false;
        });
    })
</script>

<template>
    <div class="lesson-header font-large font-light text-uppercase" data-type="introductionTitle">{{ t("steps.user.introduction.title") }}</div>
    <div ref="lessonTextContainer" class="lesson-text" data-type="lessonTextContainer">
        <ScrollHandAnimation id="scrollHint" v-if="state.showScrollHint" data-type="scrollHandAnimation" />
        <p class="font-medium font-light">{{ t("steps.user.introduction.paragraph1") }}</p>
        <p class="font-medium font-light mt-4">{{ t("steps.user.introduction.paragraph2") }}</p>
        <p class="font-medium font-light mt-4">{{ t("steps.user.introduction.paragraph3") }}</p>
        <p class="font-medium font-light mt-4">{{ t("steps.user.introduction.paragraph4") }}</p>
        <p class="font-medium font-light mt-4">{{ t("steps.user.introduction.paragraph5") }}</p>
    </div>
</template>