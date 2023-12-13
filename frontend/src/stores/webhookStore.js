import { defineStore } from 'pinia'

export const useWebhookStore = defineStore('webhookStore', {
  state: () => ({
    invitationURL: '',
    connectionIDForHTW: '',
    connectionIDForEmployer: '',
    revocation: {
      threadID: '',
      revocationRegistryID: '',
      credentialRevocationID: '',
      credentialExchangeID: ''
    },
    connectionStatusWithHTWActive: false,
    connectionStatusWithEmployerActive: false,
    issuanceStatusOffered: false,
    issuanceStatusIssued: false,
    presentationStatusVerified: false,
    revocationStatusRevoked: false
  }),
  getters: {
    getInvitationURL: (state) => state.invitationURL,
    getConnectionIDForHTW: (state) => state.connectionIDForHTW,
    getConnectionIDForEmployer: (state) => state.connectionIDForEmployer,
    getConnectionWithHTWActive: (state) => state.connectionStatusWithHTWActive,
    getConnectionWithEmployerActive: (state) => state.connectionStatusWithEmployerActive,
    getIssuanceStatusOffered: (state) => state.issuanceStatusOffered,
    getIssuanceStatusIssued: (state) => state.issuanceStatusIssued,
    getPresentationStatusVerified: (state) => state.presentationStatusVerified,
    getRevocation: (state) => state.revocation,
    getRevocationStatusRevoked: (state) => state.revocationStatusRevoked
  },
  actions: {
    setInvitationURL(invitationURL) {
      this.invitationURL = invitationURL
    },
    setConnectionIDForHTW(connectionID) {
      this.connectionIDForHTW = connectionID
    },
    setConnectionIDForEmployer(connectionID) {
      this.connectionIDForEmployer = connectionID
    },
    setRevocation(revocationObject) {
      this.revocation.threadID = revocationObject.thread_id
      this.revocation.revocationRegistryID = revocationObject.revoc_reg_id
      this.revocation.credentialRevocationID = revocationObject.revocation_id
      this.revocation.credentialExchangeID = revocationObject.credential_exchange_id
    },
    setConnectionStatusWithHTWActive() {
      this.connectionStatusWithHTWActive = true
    },
    setConnectionStatusWithEmployerActive() {
      this.connectionStatusWithEmployerActive = true
    },
    setIssuanceStatusOffered() {
      this.issuanceStatusOffered = true
    },
    setIssuanceStatusIssued() {
      this.issuanceStatusIssued = true
    },
    setPresentationStatusVerified() {
      this.presentationStatusVerified = true
    },
    setPresentationStatusNotVerified() {
      this.presentationStatusVerified = false
    },
    setRevocationStatusRevoked() {
      this.revocationStatusRevoked = true
    }
  }
})
