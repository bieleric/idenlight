<script setup>
import ScrollHandAnimation from '../animations/ScrollHandAnimation.vue'
import { ref, reactive, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useUserDemoStore } from '../../stores/userDemoStore'
import { useDemoTutorialStore } from '../../stores/demoTutorialStore'

const { t } = useI18n()
const userDemoStore = useUserDemoStore()
const demoTutorialStore = useDemoTutorialStore()
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

const startTutorialConnectionCreation = () => {
  userDemoStore.setTutorial(true)
  userDemoStore.setShowNavigationButtons(false)
  demoTutorialStore.setCurrentTutorialToConnectionTutorial()
  demoTutorialStore.restartTutorial()
}
</script>

<template>
  <div class="lesson-header font-large font-light text-uppercase" data-type="connectionTitle">
    {{ t('steps.user.connection.title') }}
  </div>
  <div ref="lessonTextContainer" class="lesson-text" data-type="lessonTextContainer">
    <ScrollHandAnimation
      id="scrollHint"
      v-if="state.showScrollHint"
      data-type="scrollHandAnimation"
    />
    <p class="font-medium font-light">{{ t('steps.user.connection.paragraph1') }}</p>
    <p class="font-medium font-light mt-4">{{ t('steps.user.connection.paragraph2') }}</p>
    <p class="font-medium font-light mt-4">{{ t('steps.user.connection.paragraph3') }}</p>
    <div
      @click="startTutorialConnectionCreation"
      class="tutorial-button btn button-outline-primary p-3 mt-4 d-flex justify-content-between"
      data-type="startConnectionTutorialButton"
    >
      <span></span>
      {{ t('tutorial.create_connection.title') }}
      &nbsp;<font-awesome-icon
        v-if="demoTutorialStore.getConnectionTutorialFinished"
        class="font-large"
        icon="circle-check"
      />
    </div>
  </div>
</template>
