<template>
  <main id="app">
    <navigation></navigation>
    <router-view/>
    <DevItUpFooter></DevItUpFooter>
  </main>
</template>

<script>
import Navigation from '@/components/navigation/navigation.component.vue'
import DevItUpFooter from '@/components/footer/footer.component.vue'

export default {
  name: 'app',
  components: {
    Navigation,
    DevItUpFooter
  }
}
</script>

<style lang="scss">
@import './assets/styles/app.scss';
</style>
