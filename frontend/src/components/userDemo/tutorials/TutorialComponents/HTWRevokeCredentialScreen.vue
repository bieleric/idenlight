<script setup>
import { reactive } from 'vue'
import { useI18n } from 'vue-i18n'
import { useWebhookStore } from '../../../../stores/webhookStore'
import { revokeCredential } from '../../../../services/acapyRequests'

const { t } = useI18n()
const webhookStore = useWebhookStore()

const state = reactive({
  name: 'Max Mustermann',
  revocationRequested: null
})

const setRevocationRequested = () => {
  state.revocationRequested = true
}
</script>

<template>
  <div data-type="revokeCredentialContainer">
    <div class="font-large mb-3">{{ t('tutorial.htw_website.revoke_credential') }}</div>
    <div class="row" data-type="issueCredentialForm">
      <div class="form-group col-md-10">
        <label for="inputName">{{ t('tutorial.htw_website.name') }}</label>
        <input type="text" class="form-control" id="inputName" :value="state.name" disabled />
      </div>
    </div>
    <button
      @click="
        revokeCredential();
        setRevocationRequested()
      "
      class="btn htw-button mt-3 col-12 col-md-3"
      data-type="revokeCredentialButton"
    >
      <span
        >{{ t('tutorial.htw_website.revoke_diploma_credential') }}&nbsp;
        <font-awesome-icon
          v-if="webhookStore.getRevocationStatusRevoked"
          class="text-white"
          icon="check"
        />
        <font-awesome-icon
          v-if="!webhookStore.getRevocationStatusRevoked && state.revocationRequested"
          class="text-white"
          icon="xmark"
        />
      </span>
    </button>
  </div>
</template>
