<script setup>
    import { ref, onMounted, reactive } from 'vue';
    import { useWebhookStore } from '../../../../stores/webhookStore';
    import QrcodeVue from 'qrcode.vue';
    import { useI18n } from 'vue-i18n';
    import { createInvitation } from '../../../../services/acapyRequests';
    import { createPresentationRequest } from '../../../../services/acapyRequests';


    const { t } = useI18n();
    const webhookStore = useWebhookStore();
    const employerWebsite = ref(null);

    const state = reactive({
        size: 280,
    });

    onMounted(() => {
        const websiteWidth = employerWebsite.value.offsetWidth;
        state.size = websiteWidth < 500 ? websiteWidth - (websiteWidth * 0.4) : 280;

        if(!webhookStore.getRevocationStatusRevoked) {
            createInvitation("Arbeitgeber")
        }
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
                    <div v-if="!webhookStore.getRevocationStatusRevoked" class="d-flex justify-content-center flex-column">
                        <div><a :href=state.invitation_url>{{ t("tutorial.employer_website.create_connection") }}</a></div>
                        <QrcodeVue class="mx-auto mt-3" :value=webhookStore.getInvitationURL :size=state.size level="H" data-type="presentQRCode" />
                    </div>
                    <div v-else class="d-flex justify-content-center flex-column">
                        <div @click="createPresentationRequest()" class="btn employer-button">{{ t("tutorial.employer_website.present_digital_diploma_again") }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>