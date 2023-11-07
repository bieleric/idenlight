<script setup>
    import { useI18n } from 'vue-i18n';

    const { t } = useI18n();
</script>

<template>
    <div class="lesson col-12 mx-auto d-flex flex-lg-row flex-column">
        <div class="text-box d-flex align-items-center col-lg-7 col-12 mx-auto bg-color-secondary text-light p-lg-5 p-3 overflow-scroll">
            <div class="h-100 w-100">
                {{ t("steps.user.introduction.title") }}

            </div>
        </div>
        <div class="image-box col-lg-5 col-12 mx-auto bg-color-third text-light h-100 d-flex justify-content-center align-items-center">
            <!--<img v-if="props.focus && focusStore.getConceptActive" src="General_Trust_Triangle_General.png" class="w-75" />
            <img v-if="props.focus && !focusStore.getConceptActive" src="Focus_JSON.png" class="w-75" />-->
        </div>
    </div>
</template>