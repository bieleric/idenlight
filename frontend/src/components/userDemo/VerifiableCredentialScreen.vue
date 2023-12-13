<script setup>
import ScrollHandAnimation from '../animations/ScrollHandAnimation.vue'
import { ref, reactive, onMounted } from 'vue'
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
  <div
    class="lesson-header font-large font-light text-uppercase"
    data-type="verifiableCredentialTitle"
  >
    {{ t('steps.user.verifiable_credential.title') }}
  </div>
  <div ref="lessonTextContainer" class="lesson-text" data-type="lessonTextContainer">
    <ScrollHandAnimation
      id="scrollHint"
      v-if="state.showScrollHint"
      data-type="scrollHandAnimation"
    />
    <p class="font-medium font-light">{{ t('steps.user.verifiable_credential.paragraph1') }}</p>
    <p class="font-medium font-light mt-4">
      {{ t('steps.user.verifiable_credential.paragraph2') }}
    </p>
    <p class="font-medium font-light mt-4">
      {{ t('steps.user.verifiable_credential.paragraph3') }}
      <i> {{ t('steps.user.verifiable_credential.actions.issue') }}, </i>
      <i> {{ t('steps.user.verifiable_credential.actions.store') }}, </i>
      <i> {{ t('steps.user.verifiable_credential.actions.present') }}, </i>
      <i> {{ t('steps.user.verifiable_credential.actions.proof') }} </i>
    </p>
  </div>
</template>
