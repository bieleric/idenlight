import config from '../../config.json'
import axios from 'axios'
import { useWebhookStore } from '../stores/webhookStore'

export const createInvitation = (label) => {
    const webhookStore = useWebhookStore();
    axios.post(`${config.acapy_api}/connections/create-invitation`, {
        "my_label": label,
        "service_endpoint": config.acapy_service_endpoint
        //"service_endpoint": "https://0b3e-2-206-28-54.ngrok-free.app/"
    })
    .then(response => {
        if(response.status === 200 && response.statusText === "OK") {
            if(label === "Arbeitgeber") {
                if(!webhookStore.getConnectionIDForEmployer) {
                    webhookStore.setInvitationURL(response.data.invitation_url)
                    webhookStore.setConnectionIDForEmployer(response.data.connection_id)
                }
            }
            else if(label === "HTW Dresden") {
                if(!webhookStore.getConnectionWithHTWActive) {
                    webhookStore.setInvitationURL(response.data.invitation_url)
                    webhookStore.setConnectionIDForHTW(response.data.connection_id)
                }
            }
        }
    })
    .catch(e => {
        console.log(e)
    })
}

export const issueCredential = (values) => {
    const webhookStore = useWebhookStore();
    axios.post(`${config.acapy_api}/issue-credential/send`, {
        "auto_remove": true,
        "comment": "Dein digitales Abschlusszeugnis",
        "connection_id": webhookStore.getConnectionIDForHTW,
        "cred_def_id": config.credential.credentialDefinitionID,
        "credential_proposal": {
            "@type": "issue-credential/1.0/credential-preview",
            "attributes": [
                {
                    "mime-type": "image/text",
                    "name": "Name",
                    "value": values[0]
                },
                {
                    "mime-type": "image/text",
                    "name": "Geburtsort",
                    "value": values[1]
                },
                {
                    "mime-type": "image/text",
                    "name": "Geburtsdatum",
                    "value": values[2]
                },
                {
                    "mime-type": "image/text",
                    "name": "Abschluss",
                    "value": values[3]
                },
                {
                    "mime-type": "image/text",
                    "name": "Studiengang",
                    "value": values[4]
                },
                {
                    "mime-type": "image/text",
                    "name": "Hochschule",
                    "value": "Hochschule für Technik und Wirtschaft Dresden"
                },
                {
                    "mime-type": "image/text",
                    "name": "Note",
                    "value": values[5]
                },
            ]
        },
        "issuer_did": config.credential.issuerDID,
        "schema_id": config.credential.credentialSchemaID,
        "schema_issuer_did": config.credential.schemaIssuerDID,
        "schema_name": config.credential.schemaName,
        "schema_version": "1.0",
        "trace": true
    })
    .then(response => {
        if(response.status === 200 && response.statusText === "OK") {
            // OK
        }
    })
    .catch(e => {
        console.log(e)
    })
}

export const createPresentationRequest = () => {
    const webhookStore = useWebhookStore();
    axios.post(`${config.acapy_api}/present-proof/send-request`, {
        "auto_verify": true,
        "comment": "string",
        "connection_id": webhookStore.getConnectionIDForEmployer,
        "proof_request": {
            "non_revoked": {
                "from": Math.floor(Date.now() / 1000) - (24 * 60 * 60 * 60),
                "to": Math.floor(Date.now() / 1000)
            },
            "name": "Hochschulzeugnis",
            "nonce": "1",
            "requested_attributes": {
                "0_studiengang_uuid": {
                    "name": "Studiengang",
                    "restrictions": [
                        {
                            "cred_def_id": config.credential.credentialDefinitionID
                        }
                    ]
                },
                "0_abschluss_uuid": {
                    "name": "Abschluss",
                    "restrictions": [
                        {
                            "cred_def_id": config.credential.credentialDefinitionID
                        }
                    ]
                },
                "0_note_uuid": {
                    "name": "Note",
                    "restrictions": [
                        {
                            "cred_def_id": config.credential.credentialDefinitionID
                        }
                    ]
                },
            },
            "requested_predicates": {},
            "version": "1.0"
        },
        "trace": false
    })
    .then(response => {
        if(response.status === 200 && response.statusText === "OK") {
            // This could be used for connectionless presentation
            /*let proof_request_tmp = response.data.presentation_request_dict;
            proof_request_tmp["~service"] = {
                "recipientKeys": [
                    config.credential.verkey
                ],
                "routingKeys": null,
                "serviceEndpoint": config.acapy_service_endpoint
            }
            state.proof_request = JSON.stringify(proof_request_tmp);
            const encoded_proof_request = btoa(state.proof_request);
            state.proof_request_url = `${config.acapy_service_endpoint}/?c_i=${encoded_proof_request}`;
            state.didcomm_proof_request_url = `didcomm://launch?c_i=${encoded_proof_request}`;
            state.hash_of_url = md5.create().update(state.proof_request_url).hex();
            state.shortened_request_url = shortenUrl(state.proof_request_url, state.hash_of_url)*/
        }
    })
    .catch(e => {
        console.log(e)
    })
}

export const revokeCredential = () => {
    const webhookStore = useWebhookStore();
    axios.post(`${config.acapy_api}/revocation/revoke`, {
        "comment": "Revoke Credential",
        "connection_id": webhookStore.getConnectionIDForHTW,
        "cred_ex_id": webhookStore.getRevocation.credentialExchangeID,
        "notify": true,
        "notify_version": "v1_0",
        "publish": true,
        "thread_id": webhookStore.getRevocation.threadID
    })
    .then(response => {
        if(response.status === 200 && response.statusText === "OK") {
            webhookStore.setRevocationStatusRevoked();
        }
    })
    .catch(e => {
        console.log(e)
    })
}

/* deprecated: For connectionless presentation you have to short the URL */
/* const shortenUrl = async(url, hash) => {
    axios.get(`${config.yourls_api}/yourls-api.php?signature=${config.yourls_api_token}&action=shorturl&url=${encodeURIComponent(url)}&format=json&keyword=${hash}`)
    .then(response => {
        if(response.status === 200) {
            state.shortened_request_url = response.data.shorturl
        }
    })
    .catch(e => {
        console.log(e)
    })
} */