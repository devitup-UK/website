<template>
  <div class="services">
    <page-title title="Services">We offer a variety of digital services to all types of organisations, from graphical design to complete software solutions. Browse through our available range of design and development skills and find what service best fits your needs. </page-title>
    <services-area></services-area>
  </div>
</template>

<script>
import PageTitle from '@/components/page-title/page-title.component.vue'
import ServicesArea from '@/components/services-area/services-area.component.vue'

export default {
  name: 'services',
  components: {
    PageTitle,
    ServicesArea
  }
}
</script>