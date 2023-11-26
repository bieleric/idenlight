import { createPinia, setActivePinia } from "pinia";
import { beforeEach, describe, expect, test } from "vitest";
import { useWebhookStore } from "../../../stores/webhookStore";

describe("Webhook Store", () => {
    beforeEach(() => {
        setActivePinia(createPinia())
    })

    test("Check defaults on initialization", () => {
        const ssiStore = useWebhookStore()

        expect(ssiStore.connectionIDForHTW).toBe("")
        expect(ssiStore.connectionIDForEmployer).toBe("")
        expect(ssiStore.invitationURL).toBe("")
        expect(ssiStore.revocation).toStrictEqual({
            threadID: "",
            revocationRegistryID: "",
            credentialRevocationID: "",
            credentialExchangeID: ""
        })
        expect(ssiStore.connectionStatusWithHTWActive).toBe(false)
        expect(ssiStore.connectionStatusWithEmployerActive).toBe(false)
        expect(ssiStore.issuanceStatusOffered).toBe(false)
        expect(ssiStore.issuanceStatusIssued).toBe(false)
        expect(ssiStore.presentationStatusVerified).toBe(false)
        expect(ssiStore.revocationStatusRevoked).toBe(false)
    })

    test("Check getters and setters", () => {
        const webhookStore = useWebhookStore()
        
        webhookStore.setInvitationURL("a")
        webhookStore.setConnectionIDForHTW("b")
        webhookStore.setConnectionIDForEmployer("c")
        webhookStore.setIssuanceStatusOffered()
        webhookStore.setIssuanceStatusIssued()
        webhookStore.setPresentationStatusVerified()
        webhookStore.setRevocation({
            thread_id: "a",
            revoc_reg_id: "b",
            revocation_id: "c",
            credential_exchange_id: "d",
        })
        webhookStore.setConnectionStatusWithEmployerActive()
        webhookStore.setConnectionStatusWithHTWActive()
        webhookStore.setRevocationStatusRevoked()

        expect(webhookStore.getInvitationURL).toBe("a")
        expect(webhookStore.getConnectionIDForHTW).toBe("b")
        expect(webhookStore.getConnectionIDForEmployer).toBe("c")
        expect(webhookStore.getIssuanceStatusOffered).toBe(true)
        expect(webhookStore.getIssuanceStatusIssued).toBe(true)
        expect(webhookStore.getPresentationStatusVerified).toBe(true)
        expect(webhookStore.getRevocation).toStrictEqual({
            threadID: "a",
            revocationRegistryID: "b",
            credentialRevocationID: "c",
            credentialExchangeID: "d"
        })
        expect(webhookStore.getConnectionWithEmployerActive).toBe(true)
        expect(webhookStore.getConnectionWithHTWActive).toBe(true)
        expect(webhookStore.getRevocationStatusRevoked).toBe(true)

        webhookStore.setPresentationStatusNotVerified()
        expect(webhookStore.getPresentationStatusVerified).toBe(false)
    })
})