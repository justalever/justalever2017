<template>
	<div>
	<footer class="footer">
		<div class="container">
			<div class="row">
				<div class="footer-content one-half">
	  			<h2 class="footer__title big-title">Say hello	<svg class="footer__logo" xmlns="http://www.w3.org/2000/svg" width="66" height="26" viewBox="0 0 66 26"><g fill="#F4C051"><path d="M1.679 25h24.321l-12.161-22.45-12.161 22.45zm26 1h-27.679l13.839-25.55 13.839 25.55zM32.839 2.55l-12.161 22.45h24.321l-12.161-22.45zm13.839 23.45h-27.679l13.839-25.55 13.839 25.55zM39.679 25h24.321l-12.161-22.45-12.161 22.45zm26 1h-27.679l13.839-25.55 13.839 25.55z"/></g></svg></h2>
	  			<p class="footer__email"><button id="show-modal" @click="showModal = true" class="email-link">andy@justalever.com</button></p>
	  			<ul class="footer__links">
	  				<li v-for="link in links"><a :href="link.url"> {{link.title}}</a></li>
	  			</ul>
  			</div>
  		</div>
  	</div>
  	<img class="footer-image" src="~/assets/images/footer-image.jpg" alt="Andy Leverenz" />
  </footer>
  <Modal v-if="showModal" @close="showModal = false"></Modal>

	</div>
</template>

<script>
	import Modal from '~/components/Modal.vue'

	export default {
		components: {
    	Modal
  	},
	 data() {
	 		return {
	 			email: 'andy@justalever.com',
	 			links: [
	 				{ title: "Twitter", url: "https://twitter.com/justalever" },
	 				{ title: "Dribbble", url: "https://dribbble.com/justalever" },
	 				{ title: "YouTube", url: "https://youtube.com/c/webcrunch" },
	 				{ title: "Github", url: "https://github.com/justalever" },
	 				{ title: "My Agency", url: "https://coupleofcreatives.com" },
	 				{ title: "Blog", url: "https://web-crunch.com" }
	 			],
	 			showModal: false
	 		}
	 }
	}
</script>

