import Box from '../box/box.component.vue'

export default {
    name: 'Guarantee',
    props: {
      msg: String
    },
    components: {
      Box
    },
    data() {
      return {
        data: {
          boxes: [
            {
              id: 1,
              outline: true,
              icon: {
                name: ['far', 'clock'],
                size: '3x'
              },
              content: '<p>Allocated time to your projects.</p>'
            },
            {
              id: 2,
              outline: true,
              icon: {
                name: 'code',
                size: '3x'
              },
              content: '<p>Latest technologies for your solution.</p>'
            },
            {
              id: 3,
              outline: true,
              icon: {
                name: 'phone',
                size: '3x'
              },
              content: '<p>Live updates on progress of your project.</p>'
            }
          ]
        }
      }
    }
  }