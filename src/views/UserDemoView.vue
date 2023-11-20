<script setup>
  import DemoHeader from '../components/DemoHeader.vue';
  import NavigationButtons from '../components/NavigationButtons.vue';
  import DemoLessonTemplate from '../components/DemoLessonTemplate.vue';
  import { useUserDemoStore } from '../stores/userDemoStore';
  import TutorialTemplate from '../components/userDemo/tutorials/TutorialTemplate.vue';

  const userDemoStore = useUserDemoStore();
</script>

<template>
  <div id="regions" class="h-100 col-9 mx-auto">
      <DemoHeader></DemoHeader>

      <div id="content">
          <DemoLessonTemplate v-if="!userDemoStore.getTutorial"></DemoLessonTemplate>
          <TutorialTemplate v-else></TutorialTemplate>
      </div>
      
      <div id="footer">
          <NavigationButtons v-if="userDemoStore.getShowNavigationButtons"></NavigationButtons>
      </div>
  </div>



</template>

<style></style>../stores/userDemoStore