<script setup>
import { computed } from "vue";
import router from "../router";
import { useUserDemoStore } from '../stores/userDemoStore';
import { useDemoTutorialStore } from "../stores/demoTutorialStore";

const userDemoStore = useUserDemoStore();
const demoTutorialStore = useDemoTutorialStore();

const resetTabs = () => {
    if(userDemoStore.getTabMode) {
        userDemoStore.toggleDescription(true);
        const desciptionTab = document.getElementById("description-tab");
        const graphicTab = document.getElementById("graphic-tab");

        if(!desciptionTab.classList.contains("active-tab") || graphicTab.classList.contains("active-tab")) {
            desciptionTab.classList.add("active-tab");
            graphicTab.classList.remove("active-tab");
        }
    }
}

const classObject = computed(() => ({
    tutorialFinished: (demoTutorialStore.getConnectionTutorialFinished && userDemoStore.getCurrentStep === 3) || (demoTutorialStore.getIssueTutorialFinished && userDemoStore.getCurrentStep === 4) || (demoTutorialStore.getPresentTutorialFinished && userDemoStore.getCurrentStep === 5) ? true : false
}))

const incrementStep = () => {
    if(userDemoStore.getCurrentStep < userDemoStore.getStepsLength-1) {
        userDemoStore.increase();
        userDemoStore.setTutorial(false);
        resetTabs();
    }
    // last step: go back to home screen
    else if(userDemoStore.getCurrentStep === userDemoStore.getStepsLength-1) {
        resetTabs();
        router.push({ path: 'home' })
    }
}

const decrementStep = () => {
    if(userDemoStore.getCurrentStep > 0) {
        userDemoStore.reduce();
        userDemoStore.setTutorial(false);
        resetTabs();
    }
}

</script>

<template>
    <div id="navigation-buttons" class="d-flex justify-content-end col-12 mx-auto">
        <div class="px-2">
            <div v-if="userDemoStore.getCurrentStep > 0" @click="decrementStep()" class="navigation-button btn button-outline-primary">
                <font-awesome-icon icon="chevron-left" />
            </div>
        </div>
        <div class="">
            <div @click="incrementStep()" :class="{'pulse-animation': classObject.tutorialFinished, 'navigation-button btn button-primary': true}">
                <font-awesome-icon v-if="userDemoStore.getCurrentStep < userDemoStore.getStepsLength-1" icon="chevron-right" />
                <font-awesome-icon v-if="userDemoStore.getCurrentStep === userDemoStore.getStepsLength-1" icon="xmark" />
            </div>
        </div>
    </div>
</template>../stores/userDemoStore