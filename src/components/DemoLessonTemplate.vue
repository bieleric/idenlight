<script setup>
import { onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useFocusStore } from '../stores/focusStore'
import { useUserDemoStore } from '../stores/userDemoStore'
import { useDeveloperDemoStore} from '../stores/developerDemoStore'
import IntroductionScreen from './userDemo/IntroductionScreen.vue'
import DevIntroductionScreen from './developerDemo/DevIntroductionScreen.vue'
import TrustTriangleAnimation from './animations/TrustTriangleAnimation.vue'
import VerifiableCredentialScreen from './userDemo/VerifiableCredentialScreen.vue'
import WalletScreen from './userDemo/WalletScreen.vue'
import WalletAnimation from './animations/WalletAnimation.vue'
import ConnectionScreen from './userDemo/ConnectionScreen.vue'
import ConnectionAnimation from './animations/ConnectionAnimation.vue'
import IssueCredentialScreen from './userDemo/IssueCredentialScreen.vue'
import IssuanceAnimation from './animations/IssuanceAnimation.vue'
import PresentProofScreen from './userDemo/PresentProofScreen.vue'
import PresentProofAnimation from './animations/PresentProofAnimation.vue'
import SummaryScreen from './userDemo/SummaryScreen.vue'

const { t } = useI18n()
const focusStore = useFocusStore()
const userDemoStore = useUserDemoStore()
const developerDemoStore = useDeveloperDemoStore()

const switchBox = (box) => {
  if (box === 'description') {
    userDemoStore.toggleDescription(true)
  } else if (box === 'graphic') {
    userDemoStore.toggleDescription(false)
  }
}

onMounted(() => {
  if (window.innerWidth < 992) {
    userDemoStore.setTabMode(true)
  }

  window.addEventListener('resize', () => {
    if (window.innerWidth < 992) {
      userDemoStore.setTabMode(true)
    } else {
      userDemoStore.setTabMode(false)
    }
  })
})
</script>

<template>
  <div class="lesson col-12 mx-auto d-flex flex-lg-row flex-column" data-type="lessonContainer">
    <ul v-if="userDemoStore.getTabMode" class="lesson-tabs nav nav-tabs">
      <li @click="switchBox('description')" class="lesson-tab-item nav-item">
        <a
          id="description-tab"
          :class="{
            'lesson-tab-item-link nav-link': true,
            'active-tab': userDemoStore.getDescriptionActive
          }"
          >{{ t('steps.general.description') }}</a
        >
      </li>
      <li @click="switchBox('graphic')" class="lesson-tab-item nav-item">
        <a
          id="graphic-tab"
          :class="{
            'lesson-tab-item-link nav-link': true,
            'active-tab': !userDemoStore.getDescriptionActive
          }"
          >{{ t('steps.general.graphic') }}</a
        >
      </li>
    </ul>
    <div
      v-if="
        !userDemoStore.getTabMode ||
        (userDemoStore.getTabMode && userDemoStore.getDescriptionActive)
      "
      class="text-box d-flex flex-column col-lg-7 col-12 mx-auto bg-color-secondary text-light"
    >
      <IntroductionScreen v-if="focusStore.getUserActive && userDemoStore.getCurrentStep === 0" />
      <DevIntroductionScreen v-if="!focusStore.getUserActive && developerDemoStore.getCurrentStep === 0" />
      <VerifiableCredentialScreen v-if="focusStore.getUserActive && userDemoStore.getCurrentStep === 1" />
      <WalletScreen v-if="focusStore.getUserActive && userDemoStore.getCurrentStep === 2" />
      <ConnectionScreen v-if="focusStore.getUserActive && userDemoStore.getCurrentStep === 3" />
      <IssueCredentialScreen v-if="focusStore.getUserActive && userDemoStore.getCurrentStep === 4" />
      <PresentProofScreen v-if="focusStore.getUserActive && userDemoStore.getCurrentStep === 5" />
      <SummaryScreen v-if="focusStore.getUserActive && userDemoStore.getCurrentStep === 6" />
    </div>
    <div
      v-if="
        !userDemoStore.getTabMode ||
        (userDemoStore.getTabMode && !userDemoStore.getDescriptionActive)
      "
      class="image-box col-lg-5 col-12 mx-auto bg-color-third text-light h-100 d-flex justify-content-center align-items-center"
    >
      <TrustTriangleAnimation v-if="focusStore.getUserActive && userDemoStore.getCurrentStep === 0" />
      <img
        v-if="focusStore.getUserActive && userDemoStore.getCurrentStep === 1"
        src="/userDemo/verifiable_credential.png"
        style="width: 60%"
      />
      <WalletAnimation v-if="focusStore.getUserActive && userDemoStore.getCurrentStep === 2" />
      <ConnectionAnimation v-if="focusStore.getUserActive && userDemoStore.getCurrentStep === 3" />
      <IssuanceAnimation v-if="focusStore.getUserActive && userDemoStore.getCurrentStep === 4" />
      <PresentProofAnimation v-if="focusStore.getUserActive && userDemoStore.getCurrentStep === 5" />
      <TrustTriangleAnimation v-if="focusStore.getUserActive && userDemoStore.getCurrentStep === 6" />
    </div>
  </div>
</template>
