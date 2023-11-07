<script setup>
import { RouterView } from 'vue-router'
// import '../css/all.min.css'
import AppHeader from './components/HeaderApp.vue'
</script>

<template>
  <div class="app">
    <AppHeader />
    <RouterView />
    <!-- <BAlert variant="success" :model-value="true">Success Alert</BAlert> -->
  </div>
</template>
<style>
.app {
  background-color: var(#8080802e);
  /* position: /; */
}
</style>
<script>
export default {
  component: AppHeader,
  name: 'App'
}
</script>

