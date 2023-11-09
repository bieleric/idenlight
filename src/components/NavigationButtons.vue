<script setup>
import { useUserNavigationStore } from '../stores/userNavigationStore';

const userNavigationStore = useUserNavigationStore();

const resetTabs = () => {
    if(userNavigationStore.getTabMode) {
        userNavigationStore.toggleDescription(true);
        const desciptionTab = document.getElementById("description-tab");
        const schemeTab = document.getElementById("scheme-tab");

        if(!desciptionTab.classList.contains("active-tab") || schemeTab.classList.contains("active-tab")) {
            desciptionTab.classList.add("active-tab");
            schemeTab.classList.remove("active-tab");
        }
    }
}

const incrementStep = () => {
    if(userNavigationStore.getCurrentStep < userNavigationStore.getStepsLength) {
        userNavigationStore.increase();
        userNavigationStore.setTutorial(false);
        resetTabs();
    }
}

const decrementStep = () => {
    if(userNavigationStore.getCurrentStep > 0) {
        userNavigationStore.reduce();
        userNavigationStore.setTutorial(false);
        resetTabs();
    }
}

</script>

<template>
    <div id="navigation-buttons" class="d-flex justify-content-end col-12 mx-auto">
        <div class="px-2">
            <div v-if="userNavigationStore.getCurrentStep > 0" @click="decrementStep()" class="navigation-button btn button-outline-primary">
                <font-awesome-icon icon="chevron-left" />
            </div>
        </div>
        <div class="">
            <div @click="incrementStep()" class="navigation-button btn button-primary">
                <font-awesome-icon icon="chevron-right" />
            </div>
        </div>
    </div>
</template>