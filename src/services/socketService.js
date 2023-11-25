import { io } from 'socket.io-client'
import config from '../../config.json'
import { useWebhookStore } from "../stores/webhookStore"
import { createPresentationRequest } from './acapyRequests'


export const socket = io(config.webhook_service)
const webhookStore = useWebhookStore();

socket.on("connect", function() {

})

socket.on("reconnect", function() {

})
  
socket.on("disconnect", () => {

})

socket.on("connection_status", (message) => {
    if(message.state === "active" && webhookStore.getConnectionIDForHTW === message.connection_id) {
        webhookStore.setConnectionStatusWithHTWActive();
    }
    else if(message.state === "active" && webhookStore.getConnectionIDForEmployer === message.connection_id) {
        webhookStore.setConnectionStatusWithEmployerActive();
        createPresentationRequest();
    }
})

socket.on("issuance_status", (message) => {
    if(message.state === "offer_sent" && webhookStore.getConnectionIDForHTW === message.connection_id) {
        webhookStore.setIssuanceStatusOffered();
    }
    else if(message.state === "credential_issued" && webhookStore.getConnectionIDForHTW === message.connection_id) {
        webhookStore.setIssuanceStatusIssued();
        webhookStore.setRevocation(message);
    }
})

socket.on("presentation_status", (message) => {
    if(message.state === "verified" && webhookStore.getConnectionIDForEmployer === message.connection_id) {
        if(message.verified === "true") {
            webhookStore.setPresentationStatusVerified();
        }
        else if(message.verified === "false") {
            webhookStore.setPresentationStatusNotVerified();
        }
    }
})