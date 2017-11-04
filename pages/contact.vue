<template>
	<div>
		<h1>Contact</h1>
		<nuxt-link exact to='/'>Home</nuxt-link>
	</div>
</template>


<script>
export default {
  transition: 'fadeOpacity'
}
</script>

<style>
.fadeOpacity-enter-active, .fadeOpacity-leave-active {
  transition: opacity .35s ease-out;
}

.fadeOpacity-enter, .fadeOpacity-leave-active {
  opacity: 0;
}
</style>