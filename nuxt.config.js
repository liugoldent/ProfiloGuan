const faviconPath =
  process.env.DEPLOY_ENV === 'GH_PAGES'
    ? '/guan-profile/favicon.ico'
    : '/favicon.ico'
module.exports = {
  mode: 'universal',
  /*
   ** Headers of the page
   */
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
  /*
   ** Customize the progress-bar color
   */
  loading: '',
  /*
   ** Global CSS
   */
  css: ['element-ui/lib/theme-chalk/index.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '@/plugins/element-ui',
    '@/plugins/echarts',
    '~/plugins/font-awesome'
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: ['nuxt-fontawesome'],
  axios: {
    progress: true,
    https: true,
    proxyHeaders: false,
    baseURL: 'http://api.themoviedb.org/3/'
  },
  fontawesome: {
    // icon 的標籤使用 <fa>，這邊不設定就會依照 plugin 裡的設定<font-awesome-icon>
    component: 'fa',
    imports: [
      // 引入 fas 所有的icon
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
  /*
   ** Build configuration
   */
  build: {
    vendor: ['jquery'],
    // extend(config, { isDev, isClient, isServer }) {
    //   if (isDev && isClient) {
    //     // expose jquery to global
    //     config.module.rules.push({
    //       test: require.resolve('jquery'),
    //       use: [
    //         {
    //           loader: 'expose-loader',
    //           options: '$'
    //         }
    //       ]
    //     })
    //   }
    // },
    transpile: [/^element-ui/],
    /*
     ** You can extend webpack config here
     */
    loaders: {
      vue: {
        transformAssetUrls: {
          audio: 'src'
        }
      }
    },

    // eslint-disable-next-line no-dupe-keys
    extend(config, ctx) {
      // Run ESLint on save
      const vueLoader = config.module.rules.find(
        (loader) => loader.loader === 'vue-loader'
      )
      /* 把audio标签在编译时转成src属性 */
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
