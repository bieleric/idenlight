<script setup>
    import { useI18n } from 'vue-i18n';
    import { useTutorialStore } from '../../stores/tutorialStore';

    const { t } = useI18n();
    const tutorialStore = useTutorialStore();  
</script>

<template>
    <div class="instruction-text mx-auto mt-5">
        <div class="font-large font-light text-light">
            <span v-if="tutorialStore.getCurrentTutorial==='Connection Tutorial'">{{ t("tutorial.create_connection.instruction") }}</span>
        </div>
    </div>
</template>