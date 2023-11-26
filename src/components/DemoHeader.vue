<script setup>
import StepProgress from 'vue-step-progress'
import '../assets/progressbar.css'
import { useUserDemoStore } from '../stores/userDemoStore'

const userDemoStore = useUserDemoStore()
</script>

<template>
  <div id="header">
    <div id="logo" class="col-md-1 col-2 mx-auto py-md-3 py-2">
      <RouterLink to="/home"
        ><img src="/idenlight_dark.png" alt="IDEnlight" class="w-100"
      /></RouterLink>
    </div>
    <StepProgress
      class="col-12 col-md-9"
      :steps="userDemoStore.getSteps"
      :current-step="userDemoStore.getCurrentStep"
      icon-class="fa fa-check"
    ></StepProgress>
  </div>
</template>
