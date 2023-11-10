<script setup>
    import axios from 'axios'
    import { onMounted, reactive } from 'vue';
    import QrcodeVue from 'qrcode.vue'

    const state = reactive({
        invitation_url: null,
        size: 280
    })

    const websiteWidth = document.getElementById("content").offsetWidth
    state.size = websiteWidth < 500 ? websiteWidth - (websiteWidth * 0.2) : 280

    const createInvitation = () => {
        console.log("create invitation")
        setTimeout(() => {
            axios.post("http://185.237.14.115:11000/connections/create-invitation", {
                "my_label": "HTW Dresden",
                "service_endpoint": "http://185.237.14.115:8000/"
                //"service_endpoint": "https://0b3e-2-206-28-54.ngrok-free.app/"
            })
            .then(response => {
                if(response.status === 200 && response.statusText === "OK") {
                    state.invitation_url = response.data.invitation_url
                    console.log(state.invitation_url)
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

    createInvitation();
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
                        <a class="nav-link" href="#">Startseite</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Lehre</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Forschung</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Service</a>
                    </li>
                </ul>
            </div>
        </nav>
        <nav class="htw-breadcrumb" aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item" aria-current="page">Service</li>
                <li class="breadcrumb-item" aria-current="page">Digitale Nachweise</li>
                <li class="breadcrumb-item" aria-current="page">Kontakt herstellen</li>
            </ol>
        </nav>
        <div class="htw-body p-4">
            <div class="font-large mb-3">Kontakt herstellen</div>
            <div class="mb-3"><a :href="state.invitation_url">Kontakt herstellen</a></div>
            <div class="d-flex justify-content-center"><QrcodeVue class="mx-auto" :value="state.invitation_url" :size="state.size" level="H"/></div>
        </div>
    </div>
</template>