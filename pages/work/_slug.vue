<template>
  <div>
    <MainMenu isWork="true" hasShadow="true"/>	
      <div class="container">
        <div class="work--image-wrapper">
          <img :src="post.fields.workImage.fields.file.url + '?w=1000&h=700&fit=thumb&f=top'"  :alt="post.fields.workTitle" class="work__feature-image" />
        </div>
        <div class="work-hero-slant"></div>
        <article class="work__article">
          <h1 class="work__title h1" :title="post.fields.workTitle">{{ post.fields.workTitle }}</h1>
          <vue-markdown class="work__content">{{ post.fields.workDescription }}</vue-markdown>
      </article>
    </div>
	</div>
</template>

<script>
import {createClient} from '~/plugins/contentful.js'
import VueMarkdown from 'vue-markdown'
import MainMenu from '~/components/MainMenu.vue'
import WorkPreview from '~/components/WorkPreview.vue'

const client = createClient()

export default {
  name: 'post',
  data () {
    return {
      title: "title"
    }
  },
  head() {
    return {
      title: this.post.fields.workTitle,
      meta: [
        { hid: 'description', name: 'description', content: this.post.fields.workSeoDescription }
      ]
    }
  },
  asyncData ({ env, params }) {
    return client.getEntries({
      'content_type': env.CTF_WORK_POST_TYPE_ID,
      'fields.slug': params.slug,
    }).then(entries => {
      return {
        post: entries.items[0]
      }
    }).catch(console.error)
  },
  components: {
    MainMenu,
    VueMarkdown
  }
 
}
</script>

