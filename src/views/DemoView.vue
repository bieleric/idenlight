<script setup>
  import LessonTemplate from '../components/LessonTemplate.vue'
  import NavigationButtons from '../components/NavigationButtons.vue';
  import { useNavigationStore } from '../stores/navigationStore';
  import { useI18n } from 'vue-i18n'

  const { t } = useI18n();
  const navigationStore = useNavigationStore();

</script>

<template>
  <RouterLink to="/home">
    <div id="header" class="col-md-2 col-4 mx-auto mt-3">
      <img src="/idenlight_dark.png" alt="IDEnlight" class="w-100" />
    </div>
  </RouterLink>

  <LessonTemplate v-if="navigationStore.getCurrentStep===0" :title="t('introduction.title')" :fact="t('introduction.fact')" :paragraph_one="t('introduction.paragraph_one')" :paragraph_two="t('introduction.paragraph_two')"></LessonTemplate>

  <LessonTemplate v-if="navigationStore.getCurrentStep===1" :focus="true" :title="t('focus.title')"></LessonTemplate>

  <NavigationButtons></NavigationButtons>


</template>

<style></style>
