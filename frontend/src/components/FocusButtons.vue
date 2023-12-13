<script setup>
import { reactive } from 'vue'
import { useFocusStore } from '../stores/focusStore'

const focusStore = useFocusStore()

defineProps({
  user_title: String,
  developer_title: String
})

function activate(e) {
  const clickedElementID = e.currentTarget.id
  if (clickedElementID === 'focus-user') {
    state.userActive = true
    focusStore.toggleUserActive(true)
  } else if (clickedElementID === 'focus-developer') {
    state.userActive = false
    focusStore.toggleUserActive(false)
  }
}

let state = reactive({
  userActive: true
})
</script>

<template>
  <div class="d-flex flex-column col-12 mx-auto">
    <div
      @click="activate"
      data-type="activateUser"
      id="focus-user"
      :class="{ 'focus d-flex col-12 p-2 mb-3': true, 'active-focus': state.userActive }"
    >
      <div
        id="user-button"
        class="col-12 d-flex justify-content-between align-items-center text-light"
      >
        <div class="focus-image-container h-100">
          <img src="/user.png" class="focus-image" />
        </div>
        <div class="focus-title h1 text-right col-6">{{ user_title }}</div>
      </div>
    </div>
    <div
      @click="activate"
      data-type="activateDeveloper"
      id="focus-developer"
      :class="{ 'focus d-flex col-12 p-2 mb-3': true, 'active-focus': !state.userActive }"
    >
      <div
        id="user-button"
        class="w-100 d-flex justify-content-between align-items-center text-light"
      >
        <div class="focus-image-container h-100">
          <img src="/developer.png" class="focus-image" />
        </div>
        <div class="focus-title h1 text-right col-6">{{ developer_title }}</div>
      </div>
    </div>
  </div>
</template>
