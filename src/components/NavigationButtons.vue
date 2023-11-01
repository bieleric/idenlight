<script setup>
import { useNavigationStore } from '../stores/navigationStore';

const navigationStore = useNavigationStore();

const incrementStep = () => {
    if(navigationStore.getCurrentStep < navigationStore.getStepsLength) {
        navigationStore.increase();
    }
}

const decrementStep = () => {
    if(navigationStore.getCurrentStep > 0) {
        navigationStore.reduce();
    }
}

</script>

<template>
    <div id="navigation-buttons" class="d-flex justify-content-end col-10 mx-auto">
        <div class="px-2">
            <div v-if="navigationStore.getCurrentStep > 0" @click="decrementStep()" class="navigation-button btn button-outline-primary">
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