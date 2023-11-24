<script setup>
    import axios from 'axios'
    import { ref, onMounted, reactive } from 'vue';
    import { useSSIStore } from '../../../../stores/ssiStore';
    import QrcodeVue from 'qrcode.vue';
    // import { md5 } from 'js-md5';
    import { useI18n } from 'vue-i18n';
    import config from '../../../../../config.json'


    const { t } = useI18n();
    const ssiStore = useSSIStore();
    const employerWebsite = ref(null);

    const state = reactive({
        proof_request: null,
        proof_request_url: "",
        shortened_request_url: null,
        didcomm_proof_request_url: "",
        hash_of_url: "",
        size: 280,
        invitation_url: "",
        showCreatePresentationButton: false
    });

    const createInvitation = () => {
        setTimeout(() => {
            axios.post(`${config.acapy_api}/connections/create-invitation`, {
                "my_label": "Arbeitgeber",
                "service_endpoint": config.acapy_service_endpoint
                //"service_endpoint": "https://0b3e-2-206-28-54.ngrok-free.app/"
            })
            .then(response => {
                if(response.status === 200 && response.statusText === "OK") {
                    state.invitation_url = response.data.invitation_url
                    ssiStore.setConnectionIDForEmployer(response.data.connection_id)
                    state.showCreatePresentationButton = true;
                }
                else {
                    console.log("Fehler")
                }
            })
            .catch(e => {
                console.log(e)
            })
        }, 200)
    }

    const createPresentationRequest = () => {
        axios.post(`${config.acapy_api}/present-proof/send-request`, {
            "auto_verify": true,
            "comment": "string",
            "connection_id": ssiStore.getConnectionIDForEmployer,
            "proof_request": {
                "name": "Hochschulzeugnis",
                "nonce": "1",
                "requested_attributes": {
                    "0_studiengang_uuid": {
                        "name": "Studiengang",
                        "restrictions": [
                            {
                                "cred_def_id": ssiStore.getCredentialDefinitionID
                            }
                        ]
                    },
                    "0_abschluss_uuid": {
                        "name": "Abschluss",
                        "restrictions": [
                            {
                                "cred_def_id": ssiStore.getCredentialDefinitionID
                            }
                        ]
                    },
                    "0_note_uuid": {
                        "name": "Note",
                        "restrictions": [
                            {
                                "cred_def_id": ssiStore.getCredentialDefinitionID
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
                        ssiStore.getVerkey
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
            else {
                state.creating = false
            }
        })
        .catch(e => {
            console.log(e)
        })
    }

    /*const shortenUrl = async(url, hash) => {
        axios.get(`${config.yourls_api}/yourls-api.php?signature=${config.yourls_api_token}&action=shorturl&url=${encodeURIComponent(url)}&format=json&keyword=${hash}`)
        .then(response => {
            if(response.status === 200) {
                state.shortened_request_url = response.data.shorturl
            }
        })
        .catch(e => {
            console.log(e)
        })
    }*/

    onMounted(() => {
        const websiteWidth = employerWebsite.value.offsetWidth;
        state.size = websiteWidth < 500 ? websiteWidth - (websiteWidth * 0.4) : 280;

        createInvitation();
    })

</script>


<template>
    <div ref="employerWebsite" class="employer-website-body p-4" data-type="employerWebsiteContainer">
        <div class="accordion" id="accordionExample">
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                    <font-awesome-icon icon="circle-check" />&nbsp;{{ t("tutorial.employer_website.cover_letter") }}
                </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample"></div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <font-awesome-icon icon="circle-check" />&nbsp;{{ t("tutorial.employer_website.cv") }}
                </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample"></div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                <button class="accordion-button" type="button" aria-expanded="true" aria-controls="collapseThree">
                    {{ t("tutorial.employer_website.digital_diploma") }}
                </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse p-4" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div class="d-flex justify-content-center flex-column">
                        <div><a :href=state.invitation_url>{{ t("tutorial.employer_website.create_connection") }}</a></div>
                        <QrcodeVue class="mx-auto mt-3" :value=state.invitation_url :size=state.size level="H" data-type="presentQRCode" />
                        <div v-if="state.showCreatePresentationButton && ssiStore.getConnectionIDForEmployer" @click="createPresentationRequest()" class="btn employer-button mt-3 col-md-3 col-12 mx-auto">{{ t("tutorial.employer_website.present_digital_diploma") }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>