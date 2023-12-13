<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useUserDemoStore } from '../../../stores/userDemoStore'
import { useDemoTutorialStore } from '../../../stores/demoTutorialStore'
import { useWebhookStore } from '../../../stores/webhookStore'
import TutorialRoleTemplate from './TutorialRoleTemplate.vue'
import TutorialInstructionTemplate from './TutorialInstructionTemplate.vue'
import HTWDresdenWebsiteTemplate from './HTWDresdenWebsiteTemplate.vue'
import PhoneAcceptCredentialScreen from './TutorialComponents/PhoneAcceptCredentialScreen.vue'
import EmployerWebsiteTemplate from './EmployerWebsiteTemplate.vue'

const { t } = useI18n()
const userDemoStore = useUserDemoStore()
const demoTutorialStore = useDemoTutorialStore()
const webhookStore = useWebhookStore()

const classObject = computed(() => ({
  pulse_animation:
    demoTutorialStore.getCurrentStep === 1 ||
    (webhookStore.getConnectionWithHTWActive &&
      demoTutorialStore.getCurrentTutorial === demoTutorialStore.getConnectionTutorialName &&
      demoTutorialStore.getCurrentStep === 3) ||
    (webhookStore.getIssuanceStatusOffered &&
      demoTutorialStore.getCurrentTutorial === demoTutorialStore.getIssueTutorialName &&
      demoTutorialStore.getCurrentStep === 3) ||
    (webhookStore.getIssuanceStatusIssued &&
      demoTutorialStore.getCurrentTutorial === demoTutorialStore.getIssueTutorialName &&
      demoTutorialStore.getCurrentStep === 6) ||
    (!webhookStore.getRevocationStatusRevoked &&
      webhookStore.getPresentationStatusVerified &&
      demoTutorialStore.getCurrentTutorial === demoTutorialStore.getPresentTutorialName &&
      demoTutorialStore.getCurrentStep === 3) ||
    (webhookStore.getRevocationStatusRevoked &&
      !webhookStore.getPresentationStatusVerified &&
      demoTutorialStore.getCurrentTutorial === demoTutorialStore.getPresentTutorialName &&
      demoTutorialStore.getCurrentStep === 3) ||
    (webhookStore.getRevocationStatusRevoked &&
      demoTutorialStore.getCurrentTutorial === demoTutorialStore.getRevokeTutorialName &&
      demoTutorialStore.getCurrentStep === 3)
      ? true
      : false
}))

const increment = () => {
  if (demoTutorialStore.getCurrentTutorial === demoTutorialStore.getConnectionTutorialName) {
    demoTutorialStore.incrementConnectionTutorial()
  } else if (demoTutorialStore.getCurrentTutorial === demoTutorialStore.getIssueTutorialName) {
    demoTutorialStore.incrementIssueTutorial()
  } else if (demoTutorialStore.getCurrentTutorial === demoTutorialStore.getPresentTutorialName) {
    demoTutorialStore.incrementPresentTutorial()
  } else if (demoTutorialStore.getCurrentTutorial === demoTutorialStore.getRevokeTutorialName) {
    demoTutorialStore.incrementPresentTutorial()
  }
}

const decrement = () => {
  demoTutorialStore.decrement()
}

const finishTutorial = () => {
  userDemoStore.setShowNavigationButtons(true)
  userDemoStore.setTutorial(false)
  if (demoTutorialStore.getCurrentTutorial === demoTutorialStore.getConnectionTutorialName) {
    demoTutorialStore.setConnectionTutorialFinished()
  } else if (demoTutorialStore.getCurrentTutorial === demoTutorialStore.getIssueTutorialName) {
    demoTutorialStore.setIssueTutorialFinished()
  } else if (demoTutorialStore.getCurrentTutorial === demoTutorialStore.getPresentTutorialName) {
    demoTutorialStore.setPresentTutorialFinished()
  } else if (demoTutorialStore.getCurrentTutorial === demoTutorialStore.getRevokeTutorialName) {
    demoTutorialStore.setRevokeTutorialFinished()
  }
}
</script>

<template>
  <div class="tutorial" data-type="tutorialContainer">
    <div class="tutorial-header mb-3 text-light font-italic text-center font-light">
      <div
        @click="decrement"
        v-if="demoTutorialStore.getCurrentStep !== 1"
        class="btn button-outline-secondary"
        data-type="decrementButton"
      >
        <font-awesome-icon class="tutorial-navigation font-large" icon="chevron-left" />
      </div>
      <div class="tutorial-title" data-type="tutorialTitle">
        <span
          v-if="
            demoTutorialStore.getCurrentTutorial === demoTutorialStore.getConnectionTutorialName
          "
          class="font-italic"
          >{{ t('tutorial.create_connection.title') }}</span
        >
        <span
          v-if="demoTutorialStore.getCurrentTutorial === demoTutorialStore.getIssueTutorialName"
          class="font-italic"
          >{{ t('tutorial.issue_credential.title') }}</span
        >
        <span
          v-if="demoTutorialStore.getCurrentTutorial === demoTutorialStore.getPresentTutorialName"
          class="font-italic"
          >{{ t('tutorial.present_proof.title') }}</span
        >
        <span
          v-if="demoTutorialStore.getCurrentTutorial === demoTutorialStore.getRevokeTutorialName"
          class="font-italic"
          >{{ t('tutorial.revoke_credential.title') }}</span
        >
      </div>
      <div
        @click="increment"
        v-if="demoTutorialStore.getCurrentStep !== demoTutorialStore.getCurrentTutorialSteps"
        :class="{ 'pulse-animation': classObject.pulse_animation, 'btn button-secondary': true }"
        data-type="incrementButton"
      >
        <font-awesome-icon class="tutorial-navigation font-large" icon="chevron-right" />
      </div>
      <div
        @click="finishTutorial"
        v-if="demoTutorialStore.getCurrentStep === demoTutorialStore.getCurrentTutorialSteps"
        :class="{ 'pulse-animation': classObject.pulse_animation, 'btn button-secondary': true }"
        data-type="closeButton"
      >
        <font-awesome-icon class="tutorial-navigation font-large" icon="xmark" />
      </div>
    </div>
    <TutorialRoleTemplate
      v-if="
        demoTutorialStore.getCurrentStep === 1 ||
        (demoTutorialStore.getCurrentStep === 4 &&
          (demoTutorialStore.getCurrentTutorial === demoTutorialStore.getPresentTutorialName ||
            demoTutorialStore.getCurrentTutorial === demoTutorialStore.getIssueTutorialName))
      "
    />
    <TutorialInstructionTemplate
      v-if="
        demoTutorialStore.getCurrentStep === 2 ||
        demoTutorialStore.getCurrentStep === 5 ||
        (demoTutorialStore.getCurrentStep === 4 &&
          demoTutorialStore.getCurrentTutorial === demoTutorialStore.getRevokeTutorialName)
      "
    />
    <HTWDresdenWebsiteTemplate
      v-if="
        demoTutorialStore.getCurrentStep === 3 &&
        (demoTutorialStore.getCurrentTutorial === demoTutorialStore.getConnectionTutorialName ||
          demoTutorialStore.getCurrentTutorial === demoTutorialStore.getIssueTutorialName ||
          demoTutorialStore.getCurrentTutorial === demoTutorialStore.getRevokeTutorialName)
      "
    />
    <EmployerWebsiteTemplate
      v-if="
        (demoTutorialStore.getCurrentStep === 3 || demoTutorialStore.getCurrentStep === 6) &&
        demoTutorialStore.getCurrentTutorial === demoTutorialStore.getPresentTutorialName
      "
    />
    <PhoneAcceptCredentialScreen
      v-if="
        demoTutorialStore.getCurrentStep === 6 &&
        demoTutorialStore.getCurrentTutorial === demoTutorialStore.getIssueTutorialName
      "
    />
  </div>
</template>
