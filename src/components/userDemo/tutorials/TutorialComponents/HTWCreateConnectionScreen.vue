<script setup>
    import axios from 'axios'
    import { ref, reactive, onMounted } from 'vue';
    import QrcodeVue from 'qrcode.vue'
    import { useSSIStore } from '../../../../stores/ssiStore';
    import { useI18n } from 'vue-i18n';
    import config from '../../../../../config.json'

    const { t } = useI18n();
    const ssiStore = useSSIStore();
    const connectionContainer = ref(null);

    const state = reactive({
        invitation_url: "",
        size: 280,
    })

    const createInvitation = () => {
        setTimeout(() => {
            axios.post(`${config.acapy_api}/connections/create-invitation`, {
                "my_label": "HTW Dresden",
                "service_endpoint": config.acapy_service_endpoint
                //"service_endpoint": "https://0b3e-2-206-28-54.ngrok-free.app/"
            })
            .then(response => {
                if(response.status === 200 && response.statusText === "OK") {
                    state.invitation_url = response.data.invitation_url
                    ssiStore.setConnectionID(response.data.connection_id)
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

    onMounted(() => {
        const websiteWidth = connectionContainer.value.offsetWidth;
        state.size = websiteWidth < 500 ? websiteWidth - (websiteWidth * 0.2) : 280;

        createInvitation();
    })
</script>


<template>
    <div ref="connectionContainer" class="w-100" data-type="HTWCreateConnectionContainer">
        <div class="font-large mb-3">{{ t("tutorial.htw_website.create_connection") }}</div>
        <div class="mb-3"><a :href="state.invitation_url">{{ t("tutorial.htw_website.create_connection") }}</a></div>
        <div class="d-flex justify-content-center"><QrcodeVue class="mx-auto" :value="state.invitation_url" :size="state.size" level="H" data-type="ConnectionQRCode" /></div>
    </div>
</template>