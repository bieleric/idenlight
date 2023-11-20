<script setup>
    const props = defineProps({
        text: String
    })
</script>

<template>
    <div class="alert alert-warning alert-dismissible fade show my-3" role="alert">
        {{ props.text }}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
</template>