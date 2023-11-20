import { reactive } from "vue"
import { io } from 'socket.io-client'
import config from '../../config.json'


export const state = reactive({
    connected: false,
    invitationStatus: [],
})

export const socket = io(config.webhook_service)

socket.on("connect", function() {
    /* console.log("connected")
    const sessionID = this.id
    console.log(sessionID) */
})

/* socket.on("reconnect", function() {
    console.log("reconnected")
    const sessionID = this.id
    console.log(sessionID)
})
  
socket.on("disconnect", () => {
    console.log("disconnected")
})

socket.on("invitationStatus", (message) => {
    if(message === "active") {
        console.log("active")
    }
})

socket.on("issuanceStatus", (message) => {
    if(message === "offer_sent") {
        console.log("offered")
    }
    else if(message === "credential_issued") {
        console.log("issued")
    }
})

socket.on("presentationStatus", (message) => {
    if(message === "verified") {
        console.log("verified")
    }
}) */