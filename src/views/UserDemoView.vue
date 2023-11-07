<script setup>
  import DemoHeader from '../components/DemoHeader.vue';
  import NavigationButtons from '../components/NavigationButtons.vue';
  import IntroductionScreen from '../components/userDemo/IntroductionScreen.vue';
  import { useUserNavigationStore } from '../stores/userNavigationStore';

  const userNavigationStore = useUserNavigationStore();
</script>

<template>
  <div id="regions" class="h-100 col-9 mx-auto">
      <DemoHeader></DemoHeader>

      <div id="content">
          <IntroductionScreen v-if="userNavigationStore.getCurrentStep===0"></IntroductionScreen>
      </div>
      
      <div id="footer">
          <NavigationButtons></NavigationButtons>
      </div>
  </div>



</template>

<style></style>
../stores/userNavigationStore