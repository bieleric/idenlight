<script setup>
    import axios from 'axios';
    import { reactive } from 'vue';
    import { useI18n } from 'vue-i18n';
    import { useSSIStore } from '../../../stores/ssiStore';

    const { t } = useI18n();
    const ssiStore = useSSIStore();

    const state = reactive({
        showOverlay: true,
        showSpinner: true,
        showLoadingText: true,
        showCalculationText: false,
        values: ["","","","","",""],
        creating: true
    });

    setTimeout(() => {
        state.showLoadingText =false;
        state.showCalculationText =true;
        state.values[0] = "Max Mustermann"
        state.values[1] = "Musterstadt"
        state.values[2] = "01.01.2000"
        state.values[3] = "Bachelor of Science"
        state.values[4] = "Informatik"
    }, 2000)

    setTimeout(() => {
        state.showSpinner = false;
        state.showOverlay = false;
        state.values[5] = "1.7"
    }, 4000)

    const issueCredential = () => {
        if(ssiStore.getConnectionID === "") {
            console.log("Error! Complete Tutorial: Create Connection first")
        }
        else {
            setTimeout(() => {
                axios.post("http://185.237.14.115:11000/issue-credential/send", {
                //axios.post("http://127.0.0.1:11000/issue-credential/send", {
                    "auto_remove": true,
                    "comment": "Dein digitales Abschlusszeugnis",
                    "connection_id": ssiStore.getConnectionID,
                    "cred_def_id": ssiStore.getCredentialDefinitionID,
                    "credential_proposal": {
                        "@type": "issue-credential/1.0/credential-preview",
                        "attributes": [
                            {
                                "mime-type": "image/text",
                                "name": "Name",
                                "value": state.values[0]
                            },
                            {
                                "mime-type": "image/text",
                                "name": "Geburtsort",
                                "value": state.values[1]
                            },
                            {
                                "mime-type": "image/text",
                                "name": "Geburtsdatum",
                                "value": state.values[2]
                            },
                            {
                                "mime-type": "image/text",
                                "name": "Abschluss",
                                "value": state.values[3]
                            },
                            {
                                "mime-type": "image/text",
                                "name": "Studiengang",
                                "value": state.values[4]
                            },
                            {
                                "mime-type": "image/text",
                                "name": "Hochschule",
                                "value": "Hochschule für Technik und Wirtschaft Dresden"
                            },
                            {
                                "mime-type": "image/text",
                                "name": "Note",
                                "value": state.values[5]
                            },
                        ]
                    },
                    "issuer_did": ssiStore.getIssuerDID,
                    "schema_id": ssiStore.getCredentialSchemaID,
                    "schema_issuer_did": ssiStore.getIssuerDID,
                    "schema_name": ssiStore.getSchemaName,
                    "schema_version": "1.0",
                    "trace": true
                })
                .then(response => {
                    if(response.status === 200 && response.statusText === "OK") {
                        state.creating = false
                        
                    }
                    else {
                        state.creating = false
                        
                    }
                })
                .catch(e => {
                    console.log(e)
                    state.creating = false
                })
            }, 200)
        }
    }
</script>

<template>
    <div>
        <div v-if="state.showSpinner" class="spinner-container d-flex flex-column justify-items-center align-items-center">
            <div class="spinner-border text-orange" role="status"></div>
            <div>
                <span v-if="state.showLoadingText" class="font-light font-small text-light">{{ t("tutorial.htw_website.load_data_of_max_mustermann") }}</span>
                <span v-if="state.showCalculationText" class="font-light font-small text-light">{{ t("tutorial.htw_website.calculate_grade") }}</span>
            </div>
        </div>
        <div class="font-large mb-3">{{ t("tutorial.htw_website.issue_credential") }}</div>
        <div class="row ">
            <div class="form-group col-md-10">
                <label for="inputName">{{ t("tutorial.htw_website.name") }}</label>
                <input type="text" class="form-control" id="inputName" :value="state.values[0]" disabled>
            </div>
            <div class="form-group col-md-5">
                <label for="inputBirthplace">{{ t("tutorial.htw_website.birthplace") }}</label>
                <input type="text" class="form-control" id="inputBirthplace" :value="state.values[1]" disabled>
            </div>
            <div class="form-group col-md-5">
                <label for="inputBirthdate">{{ t("tutorial.htw_website.birthdate") }}</label>
                <input type="text" class="form-control" id="inputBirthdate" :value="state.values[2]" disabled>
            </div>
            <div class="form-group col-md-5">
                <label for="inputDegree">{{ t("tutorial.htw_website.degree") }}</label>
                <input type="text" class="form-control" id="inputDegree" :value="state.values[3]" disabled>
            </div>
            <div class="form-group col-md-5">
                <label for="inputCourse">{{ t("tutorial.htw_website.course") }}</label>
                <input type="text" class="form-control" id="inputCourse" :value="state.values[4]" disabled>
            </div>
            <div class="form-group col-md-5">
                <label for="inputGrade">{{ t("tutorial.htw_website.grade") }}</label>
                <input type="text" class="form-control" id="inputGrade" :value="state.values[5]" disabled>
            </div>
        </div>
        <button @click="issueCredential" class="btn htw-button mt-3">{{ t("tutorial.htw_website.issue_digital_diploma") }}</button>
    </div>
</template>