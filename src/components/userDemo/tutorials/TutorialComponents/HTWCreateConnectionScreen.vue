<script setup>
    import { ref, reactive, onMounted } from 'vue';
    import QrcodeVue from 'qrcode.vue'
    import { useI18n } from 'vue-i18n';
    import { useWebhookStore } from '../../../../stores/webhookStore';
    import { createInvitation } from '../../../../services/acapyRequests';

    const { t } = useI18n();
    const webhookStore = useWebhookStore();
    const connectionContainer = ref(null);

    const state = reactive({
        size: 280,
    })

    onMounted(() => {
        const websiteWidth = connectionContainer.value.offsetWidth;
        state.size = websiteWidth < 500 ? websiteWidth - (websiteWidth * 0.2) : 280;

        createInvitation("HTW Dresden");
    })
</script>


<template>
    <div ref="connectionContainer" class="w-100" data-type="HTWCreateConnectionContainer">
        <div class="font-large mb-3">{{ t("tutorial.htw_website.create_connection") }}</div>
        <div class="mb-3"><a :href="webhookStore.getInvitationURL">{{ t("tutorial.htw_website.create_connection") }}</a></div>
        <div class="d-flex justify-content-center"><QrcodeVue class="mx-auto" :value="webhookStore.getInvitationURL" :size="state.size" level="H" data-type="ConnectionQRCode" /></div>
    </div>
</template>