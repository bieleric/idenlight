<script setup>
import { reactive } from 'vue'
import { useI18n } from 'vue-i18n'
import { useWebhookStore } from '../../../../stores/webhookStore'

const { t } = useI18n()
const webhookStore = useWebhookStore()

const state = reactive({
  showOverlay: true,
  showSpinner: true,
  showVerifyText: true,
  showLoadingText: false,
  values: ['', '', '']
})

setTimeout(() => {
  state.showVerifyText = false
  state.showLoadingText = true
}, 2000)

setTimeout(() => {
  state.showSpinner = false
  state.showOverlay = false
  state.showLoadingText = false
  state.values[0] = t('verifiable_credential.computer_science')
  state.values[1] = t('verifiable_credential.bachelor')
  state.values[2] = t('verifiable_credential.17')
}, 4000)
</script>

<template>
  <div class="employer-website-body p-4" data-type="employerWebsiteContainer">
    <div
      v-if="state.showSpinner"
      class="spinner-container d-flex flex-column justify-items-center align-items-center"
    >
      <div class="spinner-border text-brown" role="status"></div>
      <div>
        <span v-if="state.showVerifyText" class="font-light font-small text-light">{{
          t('tutorial.employer_website.check_signature')
        }}</span>
        <span v-if="state.showLoadingText" class="font-light font-small text-light">{{
          t('tutorial.employer_website.load_data')
        }}</span>
      </div>
    </div>
    <div class="title font-large mb-4">{{ t('tutorial.employer_website.applicants') }}</div>
    <div class="card">
      <div class="card-body" data-type="verifyCard">
        <h5 class="card-title">{{ t('tutorial.employer_website.applicant') }}</h5>
        <h6 class="card-subtitle mb-2 text-muted">{{ t('tutorial.employer_website.diploma') }}</h6>
        <div class="card-text">
          <ul>
            <li>
              {{ t('tutorial.employer_website.course') }}:
              <i v-if="!state.showLoadingText && webhookStore.getPresentationStatusVerified">{{
                state.values[0]
              }}</i>
            </li>
            <li>
              {{ t('tutorial.employer_website.degree') }}:
              <i v-if="!state.showLoadingText && webhookStore.getPresentationStatusVerified">{{
                state.values[1]
              }}</i>
            </li>
            <li>
              {{ t('tutorial.employer_website.grade') }}:
              <i v-if="!state.showLoadingText && webhookStore.getPresentationStatusVerified">{{
                state.values[2]
              }}</i>
            </li>
          </ul>
        </div>
        <p>
          {{ t('tutorial.employer_website.verified') }}:
          <font-awesome-icon
            v-if="!state.showVerifyText && webhookStore.getPresentationStatusVerified"
            class="text-green"
            icon="check"
          />
          <font-awesome-icon v-else class="text-red" icon="xmark" />
        </p>
        <a href="#" class="card-link">{{ t('tutorial.employer_website.cover_letter') }}</a>
        <a href="#" class="card-link">{{ t('tutorial.employer_website.cv') }}</a>
      </div>
    </div>
  </div>
</template>
