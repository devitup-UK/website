<template>
  <div class="about">
    <page-title title="About Us">We want you to understand who we are, where we came from and what we believe makes DevItUp stand out amongst the crowd of digital agencies out there. Allow us to introduce ourselves...</page-title>
    <b-container>
      <div class="team-members">
        <team-member v-for="member in data.members" :name="member.name" :role="member.role" :photo="member.photo" :about="member.about" v-bind:data="member.role" v-bind:key="member.name"></team-member>
      </div>
    </b-container>
  </div>
</template>

<script>
import Image from '@/assets/img/team/tom.png'
import PageTitle from '@/components/page-title/page-title.component.vue'
import TeamMember from '@/components/team-member/team-member.component.vue'

export default {
  name: 'about',
  components: {
    PageTitle,
    TeamMember
  },
  data() {
    return {
      data: {
        members: [
          {
            name: 'Thomas Alderson',
            photo: Image,
            role: 'Founder & CEO',
            about: 'I am a hardworking 24 year old Graduate Web Developer, based in Fareham, Hampshire, UK, who enjoys learning new skills and experiences. I have created websites using HTML, CSS, JavaScript (Vanilla & jQuery), PHP (Laravel), Ruby (Ruby on Rails), SQL, Git Version Control and Asp.NET'
          }
        ]
      }
    }
  }
}
</script>