<template>
  <div class="projects">
    <page-title title="Projects">Take a look at our range of past and currently ongoing projects, whether it be a simple website, an application or a business wide software solution, we will help you bring your idea into the real world.</page-title>
    <projects-area :projects="data.projects"></projects-area>
  </div>
</template>

<script>
  import EatHappyImage from '@/assets/img/projects/eathappy.jpg'
  import DevItUpBlogImage from '@/assets/img/projects/devitup-blog.jpg'

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
              title: 'DevItUp: Blog',
              img: DevItUpBlogImage,
              description: 'The DevItUp Blog is a Vue.JS frontend driven using WordPress as a backend API, each team member of DevItUp is a verified author of the DevItUp Blog. Visit the blog by clicking <a href="https://blog.devitup.co.uk" target="_blank">here</a>.'
            },
            // {
            //   title: 'eatHappy',
            //   img: EatHappyImage,
            //   description: 'Watching what you eat is important, but keeping track of how what you eat impacts you is even more important. eatHappy is a simple app in development that allows you to build a profile that understands your health and how your food treats you.'
            // }
          ]
        }
      }
    }
  }
</script>
