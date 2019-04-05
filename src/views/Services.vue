<template>
  <div class="services">
    <page-title title="Services">We offer a variety of digital services to all types of organisations, from graphical design to complete software solutions. Browse through our available range of design and development skills and find what service best fits your needs. </page-title>
    <services-area :services="data.services"></services-area>
  </div>
</template>

<script>
import PageTitle from '@/components/page-title/page-title.component.vue'
import ServicesArea from '@/components/services-area/services-area.component.vue'

import WebsiteDevelopmentImage from '@/assets/img/website-development.png'
import ApplicationDevelopmentImage from '@/assets/img/application-development.png'
import GraphicDesignImage from '@/assets/img/graphic-design.png'

export default {
  name: 'services',
  components: {
    PageTitle,
    ServicesArea
  },
  data() {
    return {
      data: {
        services: [
          {
            img: WebsiteDevelopmentImage,
            title: 'Website Development',
            description: 'Website development to fit your desired needs, from Single Page Applications to fully fledged web solutions to achieve your personal workflow.',
            icon: {
              name: 'laptop-code',
              size: '5x'
            }
          },
          {
            img: ApplicationDevelopmentImage,
            title: 'Application Development',
            description: 'Need an application to reach more customers? Have the next big app idea? We can build it for you, using the latest technologies available, we can bring your mobile application to life!',
            icon: {
              name: 'mobile-alt',
              size: '5x'
            }
          },
          {
            img: GraphicDesignImage,
            title: 'Graphic Design',
            description: 'Designs to fit your specifications, we pride ourselves on our ability to design a website or application before building it, we can even simply design your solution and let you bring it to life.',
            icon: {
              name: 'paint-brush',
              size: '5x'
            }
          }
        ]
      }
    }
  }
}
</script>