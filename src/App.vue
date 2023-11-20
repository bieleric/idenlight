<script setup>
import { RouterView } from 'vue-router'
import { socket } from './services/socketService'

socket.connect();
</script>

<template>
  <RouterView />
</template>

<style scoped></style>
