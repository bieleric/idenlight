import { defineStore } from 'pinia'

export const useSSIStore = defineStore('ssiStore', {
    state: () => ({
        connectionID: "",
        credentialDefinitionID: "PLEVLDPJQMJvPLyX3LgB6S:3:CL:102506:Abschlusszeugnis",
        credentialSchemaID: "PLEVLDPJQMJvPLyX3LgB6S:2:Abschlusszeugnis:1.0",
        issuerDID: "PLEVLDPJQMJvPLyX3LgB6S",
        schemaName: "Abschlusszeugnis"
    }),
    getters: {
        getConnectionID: (state) => state.connectionID,
        getCredentialDefinitionID: (state) => state.credentialDefinitionID,
        getCredentialSchemaID: (state) => state.credentialSchemaID,
        getIssuerDID: (state) => state.issuerDID,
        getSchemaName: (state) => state.schemaName
    },
    actions: {
        setConnectionID(connectionID) {
            this.connectionID = connectionID
        }
    }
})