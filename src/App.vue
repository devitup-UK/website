<template>
  <div id="app">
    <navigation></navigation>
    <main>
      <router-view/>
    </main>
    <DevItUpFooter></DevItUpFooter>
    <copyright></copyright>
  </div>
</template>

<script>
import Navigation from '@/components/navigation/navigation.component.vue'
import DevItUpFooter from '@/components/footer/footer.component.vue'
import Copyright from '@/components/footer/copyright/copyright.component.vue'

export default {
  name: 'app',
  components: {
    Navigation,
    DevItUpFooter,
    Copyright
  }
}
</script>

<style lang="scss">
  @import './assets/styles/app.scss';
</style>
