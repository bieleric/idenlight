<script setup>
import { useUserNavigationStore } from '../stores/userNavigationStore';

const userNavigationStore = useUserNavigationStore();

const incrementStep = () => {
    if(userNavigationStore.getCurrentStep < userNavigationStore.getStepsLength) {
        userNavigationStore.increase();
    }
}

const decrementStep = () => {
    if(userNavigationStore.getCurrentStep > 0) {
        userNavigationStore.reduce();
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