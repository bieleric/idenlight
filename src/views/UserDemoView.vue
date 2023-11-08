<script setup>
  import DemoHeader from '../components/DemoHeader.vue';
  import NavigationButtons from '../components/NavigationButtons.vue';
  import DemoLessonTemplate from '../components/DemoLessonTemplate.vue';
</script>

<template>
  <div id="regions" class="h-100 col-9 mx-auto">
      <DemoHeader></DemoHeader>

      <div id="content">
          <DemoLessonTemplate></DemoLessonTemplate>
      </div>
      
      <div id="footer">
          <NavigationButtons></NavigationButtons>
      </div>
  </div>



</template>

<style></style>