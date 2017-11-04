const config = require('./.contentful.json')
const {createClient} = require('./plugins/contentful')

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Justalever Creative | Freelance Product Designer St. Louis, Missouri',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Justalever aka Andy Leverenz, freelance web designer Saint Louis. Specializing in web design, development, WordPress, mobile apps, user experience and responsive design.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lora:400,400i,700' }

    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#F4C051' },
  css: [
    'assets/fonts.css',
    'assets/style.scss'
  ],
  postcss: [
    require('autoprefixer')({
      browsers: ['> 5%']
    })
  ],
  env: {
    CTF_SPACE_ID: config.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: config.CTF_CDA_ACCESS_TOKEN,
    CTF_WORK_POST_TYPE_ID: config.CTF_WORK_POST_TYPE_ID,
    CTF_SIDEPROJECT_POST_TYPE_ID: config.CTF_SIDEPROJECT_POST_TYPE_ID
  },
  router: {
    base: '/justalever2017/'
  },
  generate: {
    routes() {
      return Promise.all([
        // get all blog posts
        cdaClient.getEntries({
          'content_type': env.CTF_WORK_POST_TYPE_ID
        }),
        // get the blog post content type
        cmaClient.getSpace(env.CTF_SPACE_ID)
          .then(space => space.getContentType(env.CTF_WORK_POST_TYPE_ID))
      ]).then(([entries]) => {
        return [
          // map entries to URLs
          ...entries.items.map(entry => `/work/${entry.fields.slug}`),
          // map all possible tags to URLs
        ]
      })
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    // extend (config, ctx) {
    //   if (ctx.dev && ctx.isClient) {
    //     config.module.rules.push({
    //       enforce: 'pre',
    //       test: /\.(js|vue)$/,
    //       loader: 'eslint-loader', 
    //       exclude: /(node_modules)/
    //     })
    //   }
    // }
  }
}
