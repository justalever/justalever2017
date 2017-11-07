<template>
  <article class="work__item">
    <nuxt-link :to="{ name: 'work-slug', params: { slug: post.fields.slug }}">
      <img class="thumbnail" :src="post.fields.workImage.fields.file.url + '?w=800&h=600'" :srcset="`${post.fields.workImage.fields.file.url}?w=400&h=300 350w, ${post.fields.workImage.fields.file.url}?w=800&h=600 1000w, ${post.fields.workImage.fields.file.url}?w=1600&h=1200 2000w`" sizes="(min-width: 1420px) 800px, 100vw" :alt="post.fields.workTitle" /></nuxt-link>
   		<h4 class="work__title"><nuxt-link :to="{ name: 'work-slug', params: { slug: post.fields.slug }}">{{ post.fields.workTitle }}</nuxt-link></h4>
  </article>
</template>

<script>

import VueMarkdown from 'vue-markdown'

export default {
  props: ['post'],
  components: {
  	VueMarkdown
  }

}
</script>
