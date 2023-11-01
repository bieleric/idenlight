<script setup>
    import FocusButtons from './FocusButtons.vue';
    import { useI18n } from 'vue-i18n';
    import { useFocusStore } from '../stores/focusStore';

    const props = defineProps({
        title: String,
        fact: String,
        paragraph_one: String,
        paragraph_two: String,
        focus: Boolean
    });
    
    const { t } = useI18n();
    const focusStore = useFocusStore();

</script>
 
<template>
    <div id="lesson-template" class="col-10 mx-auto d-flex flex-lg-row flex-column mt-5 mb-3">
        <div id="text-box" class="d-flex align-items-center col-lg-7 col-12 mx-auto bg-color-secondary text-light p-lg-5 p-3 overflow-scroll">
            <div class="h-100 w-100">
                <div class="lesson-header h1 text-uppercase">{{ props.title }}</div>

                <div v-if="!props.focus" class="lesson-body h4 mt-5">
                    <div v-if="props.fact" class="lesson-fact h2 mb-4 font-italic">{{ props.fact }}</div>
                    <p v-if="props.paragraph_one" class="mb-4">{{ props.paragraph_one }}</p>
                    <p v-if="props.paragraph_two">{{ props.paragraph_two }}</p>
                </div>
                <div v-if="props.focus" id="focus-body" class="h-80 d-flex align-content-between mt-5">
                    <FocusButtons :concept_title="t('focus.concept.title')" :concept_text="t('focus.concept.text')" :concept_target_group="t('focus.concept.target_group')" :technology_title="t('focus.technology.title')" :technology_text="t('focus.technology.text')" :technology_target_group="t('focus.technology.target_group')"/>
                </div>

            </div>
        </div>
        <div id="image-box" class="col-lg-5 col-12 mx-auto bg-color-third text-light h-100 d-flex justify-content-center align-items-center">
            <img v-if="props.focus && focusStore.getConceptActive" src="General_Trust_Triangle_General.png" class="w-75" />
            <img v-if="props.focus && !focusStore.getConceptActive" src="Focus_JSON.png" class="w-75" />
        </div>
    </div>
</template>