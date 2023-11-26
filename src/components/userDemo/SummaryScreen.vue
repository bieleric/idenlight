<script setup>
import ScrollHandAnimation from '../animations/ScrollHandAnimation.vue'
import WarningAlert from '../alerts/WarningAlert.vue'
import { ref, reactive, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useUserDemoStore } from '../../stores/userDemoStore'
import { useDemoTutorialStore } from '../../stores/demoTutorialStore'

const { t } = useI18n()
const userDemoStore = useUserDemoStore()
const demoTutorialStore = useDemoTutorialStore()
const lessonTextContainer = ref(null)

let state = reactive({
  showScrollHint: false,
  showWarning: false
})

onMounted(() => {
  state.showScrollHint =
    lessonTextContainer.value.scrollHeight > lessonTextContainer.value.clientHeight ? true : false

  lessonTextContainer.value.addEventListener('scroll', () => {
    state.showScrollHint = false
  })
})

const startTutorialRevokeCredential = (e) => {
  if (
    !demoTutorialStore.getConnectionTutorialFinished &&
    !demoTutorialStore.getIssueTutorialFinished &&
    !demoTutorialStore.getPresentTutorialFinished
  ) {
    state.showWarning = true
    e.preventDefault()
  } else {
    userDemoStore.setTutorial(true)
    userDemoStore.setShowNavigationButtons(false)
    demoTutorialStore.setCurrentTutorialToRevokeTutorial()
    demoTutorialStore.restartTutorial()
  }
}
</script>

<template>
  <div class="lesson-header font-large font-light text-uppercase" data-type="summaryTitle">
    {{ t('steps.user.summary.title') }}
  </div>
  <div ref="lessonTextContainer" class="lesson-text" data-type="lessonTextContainer">
    <ScrollHandAnimation
      id="scrollHint"
      v-if="state.showScrollHint"
      data-type="scrollHandAnimation"
    />
    <p class="font-medium font-light">{{ t('steps.user.summary.paragraph1') }}</p>
    <p class="font-medium font-light">{{ t('steps.user.summary.paragraph2') }}</p>
    <p class="font-medium font-light">
      <i>{{ t('steps.user.summary.paragraph3') }}</i>
    </p>
    <WarningAlert
      v-if="state.showWarning"
      :text="t('alert_messages.doOtherTutorials')"
      data-type="warningAlert"
    />
    <div
      @click="startTutorialRevokeCredential"
      class="tutorial-button btn button-outline-primary p-3 mt-4 d-flex justify-content-between"
      data-type="startRevocationTutorialButton"
    >
      <span></span>
      Bonus: {{ t('tutorial.revoke_credential.title') }} &nbsp;<font-awesome-icon
        v-if="demoTutorialStore.getRevokeTutorialFinished"
        class="font-large"
        icon="circle-check"
      />
    </div>
  </div>
</template>
