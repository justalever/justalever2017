<template>
	<div>
	<header class="header" :class="{ header__dark: isDark, header__work: isWork, header__shadow: hasShadow }" >
		<div class="container">
			<nav>
				<div class="logo">
					<nuxt-link exact to='/'>
						<svg xmlns="http://www.w3.org/2000/svg" width="80" height="31" viewBox="0 0 80 31"><g fill="#E6A200"><path d="M2.062 29.787h29.875l-14.938-27.239-14.938 27.239zm31.938 1.213h-34l17-31 17 31zM40 2.547l-14.938 27.239h29.875l-14.938-27.239zm17 28.453h-34l17-31 17 31zM48.062 29.787h29.875l-14.938-27.239-14.938 27.239zm31.938 1.213h-34l17-31 17 31z"/></g></svg>
					</nuxt-link>
				</div>
				
        	<nuxt-link to="/work" class="pagination" v-if="isWork">
					View all work
					<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 24 24" xml:space="preserve" width="24" height="24"><g class="nc-icon-wrapper"><path  d="M6,24H0v-6h6V24z"></path> <path d="M15,15H9V9h6V15z"></path> <path d="M6,15H0V9h6V15z"></path> <path  d="M15,6H9V0h6V6z"></path> <path d="M6,6H0V0h6V6z"></path> <path d="M24,6h-6V0h6V6z"></path> <rect data-color="color-2" x="19" y="19"  width="4" height="4"></rect> <rect data-color="color-2" x="19" y="10" width="4" height="4"></rect> <rect data-color="color-2" x="10" y="19" width="4" height="4"></rect></g></svg>
					</nuxt-link>
      	
				<div class="email" v-if="isEmail">
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14"><polygon fill="#FFFFFF" points="9.3 .3 7.9 1.7 12.2 6 0 6 0 8 12.2 8 7.9 12.3 9.3 13.7 16 7" opacity=".305"/></svg> 
					<button id="show-modal" @click="showModal = true" class="email-link">andy@justalever.com</button>
				</div>
			</nav>
		</div>
	</header>

	<Modal v-if="showModal" @close="showModal = false">
  
  </Modal>
</div>
</template>

<script>
	import Modal from '~/components/Modal.vue'
	export default {
		props: ['isDark', 'isWork', 'hasShadow', 'isEmail'],
		components: {
    	Modal
  	},
  	data() {
    return {
      showModal: false
    }
  },
	}
</script>
