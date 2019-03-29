<template>
  <div class="home">
    <banner></banner>
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from '@/components/banner/banner.component.vue'

export default {
  name: 'home',
  components: {
    Banner
  }
}
</script>
