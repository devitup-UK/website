<template>
  <div class="contact">
    <page-title title="Get In Touch">We like to hear from you, whether it be to simply check in on how we are doing or if you would like a free quote on a project you have in mind, we promise to reply as soon as possible.</page-title>
    <b-container>
        <b-row>
            <b-col lg="4" order="2" order-lg="1" class="box-wrapper">
                <box :content="box.content" :icon="{ name: box.icon.name, size: box.icon.size }" :outline="box.outline" :dashed="box.dashed" :dark="box.dashed" :condensed="box.condensed" v-for="box in data.boxes" v-bind:data="box" v-bind:key="box.id"></box>
            </b-col>
            <b-col lg="8" order="1" order-lg="2">
              <contact-form></contact-form>
            </b-col>
        </b-row>
    </b-container>
    <b-container fluid>
        <b-row>
          <b-col class="p-0">
            <map-location></map-location>
          </b-col>
        </b-row>
    </b-container>
  </div>
</template>

<script>
import PageTitle from '@/components/page-title/page-title.component.vue'
import Box from '@/components/box/box.component.vue'
import ContactForm from '@/components/contact-form/contact-form.component.vue'
import MapLocation from '@/components/map-location/map-location.component.vue'

export default {
  components: {
    PageTitle,
    Box,
    ContactForm,
    MapLocation
  },
  data() {
    return {
        data: {
          boxes: [
            {
              id: 1,
              outline: true,
              dashed: true,
              dark: true,
              condensed: true,
              icon: {
                name: 'map-marker-alt',
                size: '3x'
              },
              content: `<p>Find us in Fareham, just off junction 11, use the map below to find out exactly where we are.</p>
                        <address>
                          8 Clarendon Crescent,<br>
                          Fareham,<br>
                          PO14 4RE
                        </address>`
            },
            {
              id: 2,
              outline: true,
              dashed: true,
              dark: true,
              condensed: true,
              icon: {
                name: 'envelope',
                size: '3x'
              },
              content: `<p>We have a range of email addresses you can use to reach different subject matters.</p>
                        <ul>
                          <li>
                            <a href="mailto:admin@devitup.co.uk">admin@devitup.co.uk</a>
                          </li>
                          <li>
                            <a href="mailto:support@devitup.co.uk">support@devitup.co.uk</a>
                          </li>
                          <li>
                            <a href="mailto:enquiries@devitup.co.uk">enquiries@devitup.co.uk</a>
                          </li>
                          <li>
                            <a href="mailto:complaints@devitup.co.uk">complaints@devitup.co.uk</a>
                          </li>
                        </ul>`
            },
            {
              id: 3,
              outline: true,
              dashed: true,
              dark: true,
              condensed: true,
              icon: {
                name: 'share-alt',
                size: '3x'
              },
              content: `<p>Keep up to date using our social media profiles, we try to keep them up to date with our ongoing projects...</p>
                        <ul class="socials-list">
                          <li class="socials-list__item socials-list__item--twitter">
                            <a href="https://www.twitter.com/DevItUpUK" target="_blank">@DevItUpUK</a>
                          </li>
                          <li class="socials-list__item socials-list__item--instagram">
                            <a href="https://www.instagram.com/devitup/" target="_blank">@DevItUp</a>
                          </li>
                          <li class="socials-list__item socials-list__item--pinterest">
                            <a href="https://www.pinterest.co.uk/devitup/" target="_blank">@DevItUp</a>
                          </li>
                        </ul>`
            }
          ]
        }
      }
  }
}
</script>
