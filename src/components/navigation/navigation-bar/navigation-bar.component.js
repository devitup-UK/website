import NavigationItem from '../navigation-item/navigation-item.component.vue'

export default {
    name: 'NavigationBar',
    components: {
      NavigationItem
    },
    props: {
      classes: Array | String
    },
    data() {
      return {
        data: {
          items: [
            {
              to: '/',
              label: 'HOME'
            },
            {
              to: '/about',
              label: 'ABOUT US'
            },
            {
              to: '/services',
              label: 'SERVICES'
            },
            {
              to: '/projects',
              label: 'PROJECTS'
            },
            {
              to: '/contact',
              label: 'CONTACT US'
            }
          ]
        }
      }
    }
  }