<script setup>
    import { useTutorialStore } from '../../stores/tutorialStore';
    import { useI18n } from 'vue-i18n';
    import HTWIssueCredentialScreen from './TutorialScreens/HTWIssueCredentialScreen.vue';
    import HTWCreateConnectionScreen from './TutorialScreens/HTWCreateConnectionScreen.vue';

    const { t } = useI18n();
    const tutorialStore = useTutorialStore();
</script>


<template>
    <div class="htw-website bg-light">
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
                <li v-if="tutorialStore.getCurrentTutorial===tutorialStore.getConnectionTutorialName" class="breadcrumb-item" aria-current="page">{{ t("tutorial.htw_website.create_connection") }}</li>
                <li v-if="tutorialStore.getCurrentTutorial===tutorialStore.getIssueTutorialName" class="breadcrumb-item" aria-current="page">{{ t("tutorial.htw_website.issue_credential") }}</li>
            </ol>
        </nav>
        <div class="htw-body p-4">
            <HTWCreateConnectionScreen v-if="tutorialStore.getCurrentTutorial===tutorialStore.getConnectionTutorialName" />
            <HTWIssueCredentialScreen v-if="tutorialStore.getCurrentTutorial===tutorialStore.getIssueTutorialName" />
        </div>
    </div>
</template>