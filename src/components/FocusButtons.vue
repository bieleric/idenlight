<script setup>
    import { reactive } from 'vue';
    import { useFocusStore } from '../stores/focusStore';

    const props = defineProps({
        concept_title: String,
        concept_text: String,
        concept_target_group: String,
        technology_title: String,
        technology_text: String,
        technology_target_group: String
    })

    const focusStore = useFocusStore();

    function activate(e)  {
        const clickedElementID = e.currentTarget.id
        if(clickedElementID === "focus-concept") {
            document.getElementById(clickedElementID).classList.add("active-focus");
            document.getElementById("focus-technology").classList.remove("active-focus");
            state.conceptActive = true;
            focusStore.toggleConceptActive(true)
        }
        else if(clickedElementID === "focus-technology") {
            document.getElementById(clickedElementID).classList.add("active-focus");
            document.getElementById("focus-concept").classList.remove("active-focus");
            state.conceptActive = false;
            focusStore.toggleConceptActive(false)
        }
    }

    let state = reactive({
        conceptActive: true,
    })

</script>
 
<template>
    <div v-if="!props.title" class="d-flex flex-column col-10 mx-auto">
        <div @click="activate" id="focus-concept" class="focus d-flex col-12 p-3 mb-3 active-focus">
            <div id="focus-text" class="col-10">
                <div id="focus-title" class="h4 mb-3">{{ props.concept_title }}</div>
                <div id="focus-body" class="h5">{{ props.concept_text }}</div>
                <div id="focus-target-group" class="font-italic">{{ props.concept_target_group }}</div>
            </div>
            <div id="focus-check" class="col-2 d-flex justify-content-center align-items-center">
                <font-awesome-icon v-if="state.conceptActive" icon="check" class="h1" />
            </div>   
        </div>
        <div @click="activate" id="focus-technology" class="focus d-flex col-12 p-3 mb-3">
            <div id="focus-text" class="col-10">
                <div id="focus-title" class="h4 mb-3">{{ props.technology_title }}</div>
                <div id="focus-body" class="h5">{{ props.technology_text }}</div>
                <div id="focus-target-group" class="font-italic">{{ props.technology_target_group }}</div>
            </div>
            <div id="focus-check" class="col-2 d-flex justify-content-center align-items-center">
                <font-awesome-icon v-if="!state.conceptActive" icon="check" class="h1" />
            </div>   
        </div>
    </div>
</template>