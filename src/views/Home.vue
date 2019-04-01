<template>
  <div class="home">
    <banner></banner>
    <guarantee></guarantee>
  </div>
</template>

<script>
import Banner from '@/components/banner/banner.component.vue'
import Guarantee from '@/components/guarantee/guarantee.component.vue'

export default {
  name: 'home',
  components: {
    Banner,
    Guarantee
  }
}
</script>
