<template>
  <div>
  <MainMenu isEmail="true" />	
    <section class="work-container container">      
      <div class="work-items-grid">
        <div class="work-item" v-for="post in posts">
          <WorkPreview :post="post"></WorkPreview>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
import {createClient} from '~/plugins/contentful.js'
import MainMenu from '~/components/MainMenu.vue'
import WorkPreview from '~/components/WorkPreview.vue'

const client = createClient()

export default {
  asyncData ({ env, params }) {
    return client.getEntries({
      'content_type': env.CTF_WORK_POST_TYPE_ID,
      order: '-sys.createdAt'
    }).then(entries => {
      return {
        posts: entries.items
      }
    }).catch(console.error)
  },
  components: {
    MainMenu,
    WorkPreview
  },
  head: {
    title: 'All Work',
    meta: [
      { hid: 'description', name: 'description', content: 'View all the work of product designer and frontend developer Andy Leverenz.' }
    ]
  },
}
</script>
