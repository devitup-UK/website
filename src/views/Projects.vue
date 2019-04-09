<template>
  <div class="projects">
    <page-title title="Projects">Take a look at our range of past and currently ongoing projects, whether it be a simple website, an application or a business wide software solution, we will help you bring your idea into the real world.</page-title>
    <projects-area :projects="data.projects"></projects-area>
  </div>
</template>

<script>
  import GrainImage from '@/assets/img/projects/grain.jpg'

  import PageTitle from '@/components/page-title/page-title.component.vue'
  import ProjectsArea from '@/components/projects-area/projects-area.component.vue'

  export default {
    name: 'Projects',
    components: {
      PageTitle,
      ProjectsArea
    },
    data() {
      return {
        data: {
          projects: [
            {
              title: 'Grain',
              img: GrainImage,
              description: 'Grain is an application devoted to connecting film photographers around the world, with the ability to connect to one another through the use of a mobile application alone.'
            }
          ]
        }
      }
    }
  }
</script>
