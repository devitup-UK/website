import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
import About from './views/About.vue'
import Services from './views/Services.vue'
import Projects from './views/Projects.vue'
import Contact from './views/Contact.vue'
import NotFound from './views/Errors/404.vue'

import metaData from './helpers/metadata.helper'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: metaData.generateTitle('Home'),
        metaTags: [
          {
            name: 'description',
            content: 'The home page of our example app.'
          },
          {
            property: 'og:description',
            content: 'The home page of our example app.'
          }
        ]
      }
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      meta: {
        title: metaData.generateTitle('About Us'),
        metaTags: [
          {
            name: 'description',
            content: 'The \'About Us\' page of our example app.'
          },
          {
            property: 'og:description',
            content: 'The \'About Us\' page of our example app.'
          }
        ]
      }
    },
    {
      path: '/services',
      name: 'services',
      component: Services,
      meta: {
        title: metaData.generateTitle('Services'),
        metaTags: [
          {
            name: 'description',
            content: 'The \'Services\' page of our example app.'
          },
          {
            property: 'og:description',
            content: 'The \'Services\' page of our example app.'
          }
        ]
      }
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects,
      meta: {
        title: metaData.generateTitle('Projects'),
        metaTags: [
          {
            name: 'description',
            content: 'The \'Projects\' page of our example app.'
          },
          {
            property: 'og:description',
            content: 'The \'Projects\' page of our example app.'
          }
        ]
      }
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
      meta: {
        title: metaData.generateTitle('Contact Us'),
        metaTags: [
          {
            name: 'description',
            content: 'The \'Contact\' page of our example app.'
          },
          {
            property: 'og:description',
            content: 'The \'Contact\' page of our example app.'
          }
        ]
      }
    },
    {
      path: '*',
      name: '404',
      component: NotFound,
      meta: {
        title: metaData.generateTitle('Page Not Found'),
        metaTags: [
          {
            name: 'description',
            content: 'The \'404\' page of our example app.'
          },
          {
            property: 'og:description',
            content: 'The \'404\' page of our example app.'
          }
        ]
      }
    }
  ]
});