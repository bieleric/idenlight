<script setup>
    import { reactive } from 'vue';
    import { useFocusStore } from '../stores/focusStore';

    const props = defineProps({
        user_title: String,
        developer_title: String,
    })

    const focusStore = useFocusStore();

    function activate(e)  {
        const clickedElementID = e.currentTarget.id
        if(clickedElementID === "focus-user") {
            document.getElementById(clickedElementID).classList.add("active-focus");
            document.getElementById("focus-developer").classList.remove("active-focus");
            state.userActive = true;
            focusStore.toggleUserActive(true)
        }
        else if(clickedElementID === "focus-developer") {
            document.getElementById(clickedElementID).classList.add("active-focus");
            document.getElementById("focus-user").classList.remove("active-focus");
            state.developerActive = false;
            focusStore.toggleUserActive(false)
        }
    }

    let state = reactive({
        conceptActive: true,
    })

</script>
 
<template>
    <div class="d-flex flex-column col-12 mx-auto">
        <div @click="activate" id="focus-user" class="focus d-flex col-12 p-2 mb-3 active-focus">
            <div id="user-button" class="col-12 d-flex justify-content-between align-items-center text-light">
                <div class="focus-image-container h-100">
                    <img src="/user.png" class="focus-image" />
                </div>
                <div class="focus-title h1 text-right col-6">{{ props.user_title }}</div>
            </div>
        </div>
        <div @click="activate" id="focus-developer" class="focus d-flex col-12 p-2 mb-3">
            <div id="user-button" class="w-100 d-flex justify-content-between align-items-center text-light">
                <div class="focus-image-container h-100">
                    <img src="/developer.png" class="focus-image" />
                </div>
                <div class="focus-title h1 text-right col-6">{{ props.developer_title }}</div>
            </div>
        </div>
    </div>
</template>