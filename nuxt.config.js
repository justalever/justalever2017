const {getConfigForKeys} = require('./lib/config.js')
const ctfConfig = getConfigForKeys([
  'CTF_SPACE_ID',
  'CTF_CDA_ACCESS_TOKEN',
  'CTF_CDA_ACCESS_TOKEN',
  'CTF_WORK_POST_TYPE_ID',
  'CTF_SIDEPROJECT_POST_TYPE_ID',
  'CTF_CMA_ACCESS_TOKEN'
])
const {createClient} = require('./plugins/contentful')
const cdaClient = createClient(ctfConfig)
const cmaContentful = require('contentful-management')
const cmaClient = cmaContentful.createClient({
  accessToken: ctfConfig.CTF_CMA_ACCESS_TOKEN
})

const config = {
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
    CTF_SPACE_ID: ctfConfig.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: ctfConfig.CTF_CDA_ACCESS_TOKEN,
    CTF_WORK_POST_TYPE_ID: ctfConfig.CTF_WORK_POST_TYPE_ID,
    CTF_SIDEPROJECT_POST_TYPE_ID: ctfConfig.CTF_SIDEPROJECT_POST_TYPE_ID
  },

  plugins: [
    '~/plugins/contentful'
  ],

  generate: {
    routes() {
      return Promise.all([
        // get all blog posts
        cdaClient.getEntries({
          'content_type': ctfConfig.CTF_WORK_POST_TYPE_ID
        }),
        // get the blog post content type
        cmaClient.getSpace(ctfConfig.CTF_SPACE_ID)
          .then(space => space.getContentType(ctfConfig.CTF_WORK_POST_TYPE_ID))
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
    postcss: [
      require('autoprefixer')({
        browsers: ['> 5%']
      })
    ]
  }
}

module.exports = config
