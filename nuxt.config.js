const faviconPath =
  process.env.DEPLOY_ENV === 'GH_PAGES'
    ? '/guan-profile/favicon.ico'
    : '/favicon.ico'
module.exports = {
  mode: 'universal',
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: faviconPath }],
    script: [
      {
        src: 'https://code.jquery.com/ui/1.12.1/jquery-ui.min.js',
        type: 'text/javascript'
      }
    ]
  },
  loading: '~/components/loading.vue',
  router: {
    middleware: 'i18n'
  },
  css: ['element-ui/lib/theme-chalk/index.css'],
  plugins: [
    '@/plugins/element-ui',
    '@/plugins/echarts',
    '~/plugins/font-awesome',
    '@/plugins/i18n.js'
  ],
  generate: {
    routes: ['/', '/about', '/fr', '/fr/about']
  },
  buildModules: ['@nuxtjs/eslint-module'],
  modules: ['nuxt-fontawesome'],
  axios: {
    progress: true,
    https: true,
    proxyHeaders: false,
    baseURL: 'http://api.themoviedb.org/3/'
  },
  fontawesome: {
    component: 'fa',
    imports: [
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['fas']
      },
      {
        set: '@fortawesome/free-regular-svg-icons',
        icons: ['far']
      },
      {
        set: '@fortawesome/free-brands-svg-icons',
        icons: ['fab']
      }
    ]
  },
  build: {
    vendor: ['jquery'],
    transpile: [/^element-ui/],
    loaders: {
      vue: {
        transformAssetUrls: {
          audio: 'src'
        }
      }
    },
    extend(config, ctx) {
      const vueLoader = config.module.rules.find(
        (loader) => loader.loader === 'vue-loader'
      )
      vueLoader.options.transformToRequire = {
        audio: 'src'
      }
      config.module.rules.push({
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          name: '[path][name].[ext]'
        }
      })
    }
  }
}
