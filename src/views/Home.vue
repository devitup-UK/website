<template>
  <div class="home">
    <banner></banner>
    <guarantee></guarantee>
    <process></process>
    <blog></blog>
  </div>
</template>

<script>
import Banner from '@/components/banner/banner.component.vue'
import Guarantee from '@/components/guarantee/guarantee.component.vue'
import Process from '@/components/process/process.component.vue'
import Blog from '@/components/blog/blog.component.vue'

export default {
  name: 'home',
  components: {
    Banner,
    Guarantee,
    Process,
    Blog
  }
}
</script>
