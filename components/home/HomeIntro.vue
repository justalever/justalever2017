<template>
	<div class="home-intro container">
		<div class="row between home-intro__wrap">
			<div class="one-half">
				<h4 class="home-intro__tagline eyebrow">{{ tagline }}</h4>
				<vue-markdown class="home-intro__lead">{{ lead }}</vue-markdown>
				<vue-markdown class="home-intro__sublead">{{ sublead }}</vue-markdown>
			</div>
			<div class="one-half cta-block">
				<p class="home-intro__cta">{{ cta }}</p>
				<p class="home-intro__email">
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14"><path fill="#F4C051" opacity=".748" d="M9.3.3l-1.4 1.4 4.3 4.3h-12.2v2h12.2l-4.3 4.3 1.4 1.4 6.7-6.7z"/></svg><button id="show-modal" @click="showModal = true" class="email-link">{{ email }}</button>
				</p>
			</div>
		</div>
		<Modal v-if="showModal" @close="showModal = false"></Modal>
	</div>
</template>


<script>

import Modal from '~/components/Modal.vue'
import VueMarkdown from 'vue-markdown'

export default {
  data() {
    return {
    	showModal: false,
   		tagline: "Live to create, create to live",
   		lead: "I’m a *designer* at heart. Rather than handing things off to a developer I saw the need to bring my ideas to fruition, and from that I’m capable of covering every step of the process on my own.",
   		sublead: "I write, teach, and love learning all things web. While I specialize in UX design I’m a man of many hats who has worked with mom and pop shops to fortune 500 corporations.",
   		cta: "Interested in working together?",
   		email: "andy@justalever.com"
    }
  },
  components: {
  	VueMarkdown,
  	Modal
  }
}
</script>

<style scoped>

.home-intro {
	position: relative;
	z-index: 99;
}
.home-intro__lead {
	font-size: 1.375rem;
	line-height: 2.125rem;
}
.one-half:last-of-type {
	text-align: right;
}
.home-intro__cta {
	font-family: "Gibson-Regular", sans-serif;
	margin: 0;
}
.home-intro__email .email-link {
	color: #808080;
	font-family: "Gibson-Regular", sans-serif;
	margin: 0;
	text-decoration: none;
	background: none;
	border: none;
	cursor: pointer;
	font-size: 1rem;
}
.home-intro__email .email-link {
	padding-left: 1rem;
}
.home-intro__email svg {
	position: relative;
	top: 3px;
}
.cta-block {
	padding-top: 5rem;
}
	
</style>