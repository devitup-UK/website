<template>
  <div class="404">
    <page-title title="Page Not Found">It appears you've stumbled upon a page that doesn't exist, don't worry - just use the navigation to find your way back to civilisation, no need for a map.</page-title>
    <b-container>
        <not-found></not-found>
    </b-container>
  </div>
</template>

<script>
import PageTitle from '@/components/page-title/page-title.component.vue'
import NotFound from '@/components/errors/not-found/not-found.component.vue'

export default {
  name: '404',
  components: {
      PageTitle,
      NotFound
  },
  data() {
    return {
      data: {
      }
    }
  }
}
</script>