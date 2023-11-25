<script setup>
    import { useDemoTutorialStore } from '../../../stores/demoTutorialStore';
    import { useI18n } from 'vue-i18n';
    import HTWIssueCredentialScreen from './TutorialComponents/HTWIssueCredentialScreen.vue';
    import HTWCreateConnectionScreen from './TutorialComponents/HTWCreateConnectionScreen.vue';
    import HTWRevokeCredentialScreen from './TutorialComponents/HTWRevokeCredentialScreen.vue';

    const { t } = useI18n();
    const demoTutorialStore = useDemoTutorialStore();
</script>


<template>
    <div class="htw-website bg-light" data-type="HTWWebsite">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">
                <img src="/htw-dresden-logo.png" style="height:30px" class="d-inline-block align-top" alt="">
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">{{ t("tutorial.htw_website.home") }}</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">{{ t("tutorial.htw_website.teach") }}</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">{{ t("tutorial.htw_website.research") }}</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">{{ t("tutorial.htw_website.service") }}</a>
                    </li>
                </ul>
            </div>
        </nav>
        <nav class="htw-breadcrumb" aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item" aria-current="page">{{ t("tutorial.htw_website.service") }}</li>
                <li class="breadcrumb-item" aria-current="page">{{ t("tutorial.htw_website.digital_credentials") }}</li>
                <li v-if="demoTutorialStore.getCurrentTutorial===demoTutorialStore.getConnectionTutorialName" class="breadcrumb-item" aria-current="page">{{ t("tutorial.htw_website.create_connection") }}</li>
                <li v-if="demoTutorialStore.getCurrentTutorial===demoTutorialStore.getIssueTutorialName" class="breadcrumb-item" aria-current="page">{{ t("tutorial.htw_website.issue_credential") }}</li>
                <li v-if="demoTutorialStore.getCurrentTutorial===demoTutorialStore.getRevokeTutorialName" class="breadcrumb-item" aria-current="page">{{ t("tutorial.htw_website.revoke_credential") }}</li>
            </ol>
        </nav>
        <div class="htw-body p-4">
            <HTWCreateConnectionScreen v-if="demoTutorialStore.getCurrentTutorial===demoTutorialStore.getConnectionTutorialName" data-type="HTWCreateConnectionScreen"/>
            <HTWIssueCredentialScreen v-if="demoTutorialStore.getCurrentTutorial===demoTutorialStore.getIssueTutorialName" data-type="HTWIssueCredentialScreen"/>
            <HTWRevokeCredentialScreen v-if="demoTutorialStore.getCurrentTutorial===demoTutorialStore.getRevokeTutorialName" data-type="HTWRevokeCredentialScreen"/>
        </div>
    </div>
</template>