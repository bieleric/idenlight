<script setup>
    import { onMounted } from 'vue';
    import { useI18n } from 'vue-i18n';
    import { useUserNavigationStore } from '../stores/userNavigationStore';
    import IntroductionScreen from './userDemo/IntroductionScreen.vue';
    import TrustTriangleAnimation from './animations/TrustTriangleAnimation.vue'
    import VerifiableCredentialScreen from './userDemo/VerifiableCredentialScreen.vue'
    import WalletScreen from './userDemo/WalletScreen.vue'
    import WalletAnimation from './animations/WalletAnimation.vue';
    import ConnectionScreen from './userDemo/ConnectionScreen.vue';
    import ConnectionAnimation from './animations/ConnectionAnimation.vue';
import IssueCredentialScreen from './userDemo/IssueCredentialScreen.vue';

    const { t } = useI18n();
    const userNavigationStore = useUserNavigationStore();

    window.addEventListener("resize", () => {
        if(window.innerWidth < 992) {
            userNavigationStore.setTabMode(true)
        }
        else {
            userNavigationStore.setTabMode(false)
        }
    });

    const switchBox = (box) => {
        if(box === "description") {
            userNavigationStore.toggleDescription(true);
            document.getElementById("description-tab").classList.add("active-tab");
            document.getElementById("scheme-tab").classList.remove("active-tab");
        }
        else if(box === "scheme"){
            userNavigationStore.toggleDescription(false);
            document.getElementById("scheme-tab").classList.add("active-tab");
            document.getElementById("description-tab").classList.remove("active-tab");
        }
    };

    onMounted(() => {
        if(window.innerWidth < 992) {
            userNavigationStore.setTabMode(true);
        }
    });
</script>

<template>
    <div class="lesson col-12 mx-auto d-flex flex-lg-row flex-column">
        <ul v-if="userNavigationStore.getTabMode" class="lesson-tabs nav nav-tabs">
            <li @click="switchBox('description')" class="lesson-tab-item nav-item">
                <a id="description-tab" class="lesson-tab-item-link nav-link active-tab">{{ t("steps.general.description") }}</a>
            </li>
            <li @click="switchBox('scheme')" class="lesson-tab-item nav-item">
                <a id="scheme-tab" class="lesson-tab-item-link nav-link">{{ t("steps.general.scheme") }}</a>
            </li>
        </ul>
        <div v-if="!userNavigationStore.getTabMode || (userNavigationStore.getTabMode && userNavigationStore.getDescriptionActive)" class="text-box d-flex flex-column col-lg-7 col-12 mx-auto bg-color-secondary text-light">
            <IntroductionScreen v-if="userNavigationStore.getCurrentStep===0" />
            <VerifiableCredentialScreen v-if="userNavigationStore.getCurrentStep===1" />
            <WalletScreen v-if="userNavigationStore.getCurrentStep===2" />
            <ConnectionScreen v-if="userNavigationStore.getCurrentStep===3" />
            <IssueCredentialScreen v-if="userNavigationStore.getCurrentStep===4" />
        </div>
        <div v-if="!userNavigationStore.getTabMode || (userNavigationStore.getTabMode && !userNavigationStore.getDescriptionActive)" class="image-box col-lg-5 col-12 mx-auto bg-color-third text-light h-100 d-flex justify-content-center align-items-center">
            <TrustTriangleAnimation v-if="userNavigationStore.getCurrentStep===0" />
            <img v-if="userNavigationStore.getCurrentStep===1" src="/userDemo/verifiable_credential.png" style="width: 60%;"/>
            <WalletAnimation v-if="userNavigationStore.getCurrentStep===2" />
            <ConnectionAnimation v-if="userNavigationStore.getCurrentStep===3" />
        </div>
    </div>
</template>