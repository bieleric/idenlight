<script setup>
import { ref, reactive, onMounted } from 'vue'
import ScrollHandAnimation from '../animations/ScrollHandAnimation.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const lessonTextContainer = ref(null)

let state = reactive({
  showScrollHint: false
})

onMounted(() => {
  state.showScrollHint =
    lessonTextContainer.value.scrollHeight > lessonTextContainer.value.clientHeight ? true : false

  lessonTextContainer.value.addEventListener('scroll', () => {
    state.showScrollHint = false
  })
})
</script>

<template>
  <div class="lesson-header font-large font-light text-uppercase" data-type="introductionTitle">
    {{ t('steps.developer.introduction.title') }}
  </div>
  <div ref="lessonTextContainer" class="lesson-text" data-type="lessonTextContainer">
    <ScrollHandAnimation
      id="scrollHint"
      v-if="state.showScrollHint"
      data-type="scrollHandAnimation"
    />
    <p class="font-medium font-light">{{ t('steps.developer.introduction.paragraph1') }}</p>
  </div>
</template>
