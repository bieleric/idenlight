<script setup>
import LessonTemplate from '../components/LessonTemplate.vue'
import { useI18n } from 'vue-i18n'
import { reactive } from 'vue'

const { t } = useI18n()

const steps = ["Introduction", "Focus"]

let state = reactive({
    currentStep: 0,
})

const incrementStep = (lastStep) => {
    if(lastStep) {
        state.summary = true
    }
    state.currentStep >= steps.length ? state.currentStep = steps.length : state.currentStep++;
}

const decrementStep = () => {
    state.currentStep === 0 ? state.currentStep = state.currentStep : state.currentStep--;
}

</script>

<template>
  <RouterLink to="/home">
    <div id="header" class="col-md-2 col-4 mx-auto mt-3">
      <img src="/idenlight_dark.png" alt="IDEnlight" class="w-100" />
    </div>
  </RouterLink>

  <LessonTemplate v-if="state.currentStep===0" :title="t('introduction.title')" :fact="t('introduction.fact')" :paragraph_one="t('introduction.paragraph_one')" :paragraph_two="t('introduction.paragraph_two')"></LessonTemplate>

  <LessonTemplate v-if="state.currentStep===1" :focus="true" :title="t('focus.title')"></LessonTemplate>

  <div id="navigation-buttons" class="d-flex justify-content-end col-10 mx-auto">
      <div class="px-2">
          <div v-if="state.currentStep > 0" @click="decrementStep()" class="btn btn-primary">Zurück</div>
      </div>
      <div class="">
          <div @click="incrementStep()" class="btn btn-primary">Weiter</div>
      </div>
  </div>


</template>

<style></style>
