<template>
  <div id="app">
    <navigation></navigation>
    <router-view/>
  </div>
</template>

<script>
import Navigation from '@/components/navigation/navigation.component.vue'

export default {
  name: 'app',
  components: {
    Navigation
  }
}
</script>

<style lang="scss">
@import './assets/styles/app.scss';
</style>
