<template>
	<div>
		<div class="hero__content container">
			<div class="hero__base">
				<p class="hero__eyebrow eyebrow">{{ hello }}</p>
				<h1 class="hero__headline">{{ headline }}</h1>
				<vue-markdown class="hero__slogan">{{ slogan }}</vue-markdown>
				
				<p class="hero__eyebrow eyebrow">Find me elsewhere</p>

				<div class="grid__row links">
					
					<div class="column">
					<h4 class="link__section-title">Twitter</h4>
					<ul>
						<li v-for="twitter in twitters">
							<a :href="twitter.url">{{ twitter.username }}</a>
						</li>
					</ul>	
					</div>

					<div class="column">
						<h4 class="link__section-title">Dribbble</h4>
						<ul>
							<li>
								<a :href="dribbble.url">{{ dribbble.username }}</a>
							</li>
						</ul>	
					</div>

				 </div>
				 <div class="grid__row grid__sub-row links">

					<div class="column">
						<h4 class="link__section-title">YouTube</h4>
						<ul>
							<li v-for="youtube in youtubes">
								<a :href="youtube.url">{{ youtube.username }}</a>
							</li>
						</ul>	
					</div>

					<div class="column">
						<h4 class="link__section-title">Blog</h4>
						<ul>
							<li v-for="blog in blogs">
								<a :href="blog.url">{{ blog.username }}</a>
							</li>
						</ul>	
					</div>

					<div class="column">
						<h4 class="link__section-title">Github</h4>
						<ul>
							<li>
								<a :href="github.url">{{ github.username }}</a>
							</li>
						</ul>	
					</div>

				</div>

			</div>
			<div class="hero__andy animated fadeIn">
				<img src="~/assets/images/andy.png" class="hero__image animated fadeIn" alt="Andy Leverenz"/>
			</div>
		</div>
		<div class="hero-slant"></div>
	</div>
</template>

<script>

import VueMarkdown from 'vue-markdown'

export default {
  data() {
    return {
    	hello: 'Hello World',
    	headline: 'Andy Leverenz',
      slogan: `I’m a *product designer* and *frontend developer* from St. Louis, Missouri. I design, code, teach, and write in the ever evolving world of the web.`,
      twitters: [
      	 { username: '@justalever - Personal account', url: 'https://twitter.com/justalever' },
      	 { username: '@webcrunchblog - My blog', url: 'https://twitter.com/webcrunchblog' },
      	 { username: '@coupleofcreatives - My agency', url: 'https://twitter.com/couplecreatives' }
      	],
      dribbble: { username: '@justalever', url: 'https://dribbble.com/justalever' },
      youtubes: [
       	{ username: 'webcrunch', url: 'https://youtube.com/c/webcrunch' }
      ],
      youtubes: [
       	{ username: 'webcrunch', url: 'https://youtube.com/c/webcrunch' }
      ],
      blogs: [
       	{ username: 'web-crunch.com', url: 'https://web-crunch.com' }
      ],
      github: { username: 'justalever', url: 'https://github.com/justalever' }
      }
    },
    components: {
    	VueMarkdown
    }
 }
</script>
