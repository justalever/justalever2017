<template>
  <article>
  		<p class="eyebrow eyebrow-dark">{{ project.fields.projectCategory }}</p>
   		<h4 class="project__title">{{ project.fields.projectTitle }}</h4>
    	<vue-markdown class="project__description">{{ project.fields.projectDescription }}</vue-markdown>
    	<vue-markdown class="project__links">{{ project.fields.projectLinks }}</vue-markdown>
  </article>
</template>

<script>
import VueMarkdown from 'vue-markdown'

export default {
  props: ['project'],
  components: {
  	VueMarkdown
  }

}
</script>

<style scoped>
	.eyebrow {
		margin: 0 0 .5rem 0;
	}
	.project__title {
		font-size: 1.4rem;
		margin: 0;
		color: #333333;
	}
	.project__links {
		font-family: "Gibson-Regular", sans-serif;
	}
	
</style>