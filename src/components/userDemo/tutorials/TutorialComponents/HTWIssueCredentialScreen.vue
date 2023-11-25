<script setup>
    import { reactive } from 'vue';
    import { useI18n } from 'vue-i18n';
    import { issueCredential } from '../../../../services/acapyRequests';
    import { useWebhookStore } from '../../../../stores/webhookStore';

    const { t } = useI18n();
    const webhookStore = useWebhookStore();

    const state = reactive({
        showOverlay: true,
        showSpinner: true,
        showLoadingText: true,
        showCalculationText: false,
        values: ["","","","","",""]
    });

    setTimeout(() => {
        state.showLoadingText =false;
        state.showCalculationText =true;
        state.values[0] = t("verifiable_credential.max_mustermann");
        state.values[1] = t("verifiable_credential.musterstadt");
        state.values[2] = t("verifiable_credential.01012000");
        state.values[3] = t("verifiable_credential.bachelor");
        state.values[4] = t("verifiable_credential.computer_science");
    }, 2000)

    setTimeout(() => {
        state.showSpinner = false;
        state.showOverlay = false;
        state.values[5] = t("verifiable_credential.17");
    }, 4000)

</script>

<template>
    <div data-type="issueCredentialContainer">
        <div v-if="state.showSpinner" class="spinner-container d-flex flex-column justify-items-center align-items-center">
            <div class="spinner-border text-orange" role="status"></div>
            <div>
                <span v-if="state.showLoadingText" class="font-light font-small text-light">{{ t("tutorial.htw_website.load_data_of_max_mustermann") }}</span>
                <span v-if="state.showCalculationText" class="font-light font-small text-light">{{ t("tutorial.htw_website.calculate_grade") }}</span>
            </div>
        </div>
        <div class="font-large mb-3">{{ t("tutorial.htw_website.issue_credential") }}</div>
        <div class="row" data-type="issueCredentialForm">
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
        <button @click="issueCredential(state.values)" class="btn htw-button mt-3 col-12 col-md-3" data-type="issueCredentialButton">
            <span>{{ t("tutorial.htw_website.issue_digital_diploma") }}
                &nbsp;<font-awesome-icon v-if="webhookStore.getIssuanceStatusOffered" class="text-white" icon="check" />
            </span>
        </button>
    </div>
</template>