<script setup>
  import DemoHeader from '../components/DemoHeader.vue';
  import NavigationButtons from '../components/NavigationButtons.vue';
  import DemoLessonTemplate from '../components/DemoLessonTemplate.vue';
  import { useUserNavigationStore } from '../stores/userNavigationStore';
  import TutorialTemplate from '../components/userDemo/tutorials/TutorialTemplate.vue';

  const userNavigationStore = useUserNavigationStore();
</script>

<template>
  <div id="regions" class="h-100 col-9 mx-auto">
      <DemoHeader></DemoHeader>

      <div id="content">
          <DemoLessonTemplate v-if="!userNavigationStore.getTutorial"></DemoLessonTemplate>
          <TutorialTemplate v-else></TutorialTemplate>
      </div>
      
      <div id="footer">
          <NavigationButtons v-if="userNavigationStore.getShowNavigationButtons"></NavigationButtons>
      </div>
  </div>



</template>

<style></style>