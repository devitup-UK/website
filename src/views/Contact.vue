<template>
  <div class="contact">
    <page-title title="Get In Touch">We like to hear from you, whether it be to simply check in on how we are doing or if you would like a free quote on a project youhave in mind, we promise to reply as soon as possible.</page-title>
    <b-container>
        <b-row class="justify-content-center">
            <b-col md="4" lg="3" class="box-wrapper">
                <box :content="box.content" :icon="{ name: box.icon.name, size: box.icon.size }" :outline="box.outline" v-for="box in data.boxes" v-bind:data="box" v-bind:key="box.id"></box>
            </b-col>
        </b-row>
    </b-container>
  </div>
</template>

<script>
import PageTitle from '@/components/page-title/page-title.component.vue'
import Box from '@/components/box/box.component.vue'

export default {
  components: {
    PageTitle,
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
              content: 'Allocated time to your projects.'
            },
            {
              id: 2,
              outline: true,
              icon: {
                name: 'code',
                size: '3x'
              },
              content: 'Latest technologies for your solution.'
            },
            {
              id: 3,
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
</script>
