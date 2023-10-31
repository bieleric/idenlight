<script setup>
  import { useI18n } from 'vue-i18n';
  
  const { t } = useI18n()
</script>

<template>
  <div class="h-100 d-flex align-items-center">
    <div class="col-lg-6 col-10 mx-auto">
      <p class="display-6 text-light">{{ t("home.welcome_to") }}</p>
      <img src="/idenlight_dark.png" class="col-11 mb-5"/>
      <RouterLink to="/demo"><div class="btn btn-primary">{{ t("home.lets_go") }}</div></RouterLink>
    </div>
  </div>
</template>
