<script setup>
    import { useI18n } from 'vue-i18n';
    import { useUserNavigationStore } from '../../stores/userNavigationStore';
    import { useTutorialStore } from '../../stores/tutorialStore';
    import TutorialRoleTemplate from './TutorialRoleTemplate.vue';
    import TutorialInstructionTemplate from './TutorialInstructionTemplate.vue';
    import HTWDresdenTemplate from './HTWDresdenTemplate.vue';

    const { t } = useI18n();
    const userNavigationStore = useUserNavigationStore();
    const tutorialStore = useTutorialStore();

    const increment = () => {
        tutorialStore.increment();
    }

    const decrement = () => {
        tutorialStore.decrement();
    }

    const finishTutorial = () => {
        userNavigationStore.setShowNavigationButtons(true);
        userNavigationStore.setTutorial(false);
        tutorialStore.setConnectionTutorialFinished();
    }
    
</script>

<template>
    <div class="tutorial">
        <div class="tutorial-header mb-3 text-light font-italic text-center font-light">
            <font-awesome-icon @click="decrement" v-if="tutorialStore.getCurrentStep!==1" class="tutorial-navigation font-large" icon="chevron-left" />
            <div class="tutorial-title">
                <span v-if="tutorialStore.getCurrentTutorial==='Connection Tutorial'" class="font-italic">{{ t("tutorial.create_connection.title") }}</span>
            </div>
            <font-awesome-icon @click="increment" v-if="tutorialStore.getCurrentStep!==tutorialStore.getSteps" class="tutorial-navigation font-large" icon="chevron-right" />
            <font-awesome-icon @click="finishTutorial" v-if="tutorialStore.getCurrentStep===tutorialStore.getSteps" class="tutorial-navigation font-large" icon="xmark" />
        </div>
        <TutorialRoleTemplate v-if="tutorialStore.getCurrentStep===1" />
        <TutorialInstructionTemplate v-if="tutorialStore.getCurrentStep===2" />
        <HTWDresdenTemplate v-if="tutorialStore.getCurrentStep===3" />
    </div>
</template>