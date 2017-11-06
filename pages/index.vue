<template>
	<div class="site">
		<div class="home-hero-wrap">
				<MainMenu isEmail="true"/>
				<HomeHero />
		</div>

    <HomeIntro />
     
    <div class="container"><h2 class="home__work-title big-title">Work</h2></div>
    <section class="home-work container">
      <nuxt-link to="/work" class="btn-link">View all work</nuxt-link>
    
		    <div class="work-list wrapper">
          <div class="work" v-for="post in posts">
            <WorkPreview :post="post"></WorkPreview>
          </div>
        </div>
    </section>

    <section class="home-sideprojects container">
      <h2 class="home__sideprojects-title big-title">On the side...</h2>
      <div class="project-list">
        <div class="project" v-for="project in sideprojects">
          <ProjectPreview :project="project"></ProjectPreview>
        </div>
      </div>
    </section>
	</div>
</template>

<script>
import {createClient} from '~/plugins/contentful.js'
import MainMenu from '~/components/MainMenu'
import HomeHero from '~/components/home/HomeHero.vue'
import HomeIntro from '~/components/home/HomeIntro.vue'
import WorkPreview from '~/components/WorkPreview.vue'
import ProjectPreview from '~/components/ProjectPreview.vue'
import VueMarkdown from 'vue-markdown'

const client = createClient()

export default {
  asyncData ({env}) {
    return Promise.all([
      client.getEntries({
        'content_type': env.CTF_WORK_POST_TYPE_ID,
        order: '-sys.updatedAt',
        limit: 5
      }),
      client.getEntries({
        "content_type": env.CTF_SIDEPROJECT_POST_TYPE_ID,
        order: '-sys.createdAt'

      })
    ]).then(([entries, projs]) => {
      return {
        posts: entries.items,
        sideprojects: projs.items
      }
    }).catch(console.error)
  },
  components: {
    MainMenu,
    HomeHero,
    HomeIntro,
    WorkPreview,
    ProjectPreview,
    VueMarkdown
  },
  head: {
    title: 'Justalever Creative | Freelance Web Designer St. Louis, Missouri',
    meta: [
      { hid: 'description', name: 'description', content: 'Justalever aka Andy Leverenz, freelance web designer Saint Louis. Specializing in web design, development, WordPress, mobile apps, user experience and responsive design.' }
    ]
  },
  transition: {
    transition: 'fadeOpacity'
  }
}
</script>

