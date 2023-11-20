import { defineStore } from 'pinia'

export const useSSIStore = defineStore('ssiStore', {
    state: () => ({
        connectionID: "",
        credentialDefinitionID: "CzrQJjwXxFNitzCuiWAWT2:3:CL:102506:Abschlusszeugnis",
        credentialSchemaID: "PLEVLDPJQMJvPLyX3LgB6S:2:Abschlusszeugnis:1.0",
        schemaIssuerDID: "PLEVLDPJQMJvPLyX3LgB6S",
        issuerDID: "CzrQJjwXxFNitzCuiWAWT2",
        verkey: "7YGFFq7WXNMsEr82fP8WsQkecZWLATL6z9Lpy8dD1K1r",
        schemaName: "Abschlusszeugnis"
    }),
    getters: {
        getConnectionID: (state) => state.connectionID,
        getCredentialDefinitionID: (state) => state.credentialDefinitionID,
        getCredentialSchemaID: (state) => state.credentialSchemaID,
        getSchemaIssuerDID: (state) => state.schemaIssuerDID,
        getIssuerDID: (state) => state.issuerDID,
        getVerkey: (state) => state.verkey,
        getSchemaName: (state) => state.schemaName
    },
    actions: {
        setConnectionID(connectionID) {
            this.connectionID = connectionID
        }
    }
})