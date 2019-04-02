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
              outline: true,
              icon: {
                name: ['far', 'clock'],
                size: '3x'
              },
              content: 'Allocated time to your projects.'
            },
            {
              outline: true,
              icon: {
                name: 'code',
                size: '3x'
              },
              content: 'Latest technologies for your solution.'
            },
            {
              outline: true,
              icon: {
                name: 'phone',
                size: '3x'
              },
              content: 'Live updates on progress of your project.'
            }
          ]
        }
      }
    }
  }