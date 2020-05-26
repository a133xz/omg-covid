module.exports = {
  siteName: 'A record of our changing world',
  siteUrl: process.env.NOW_URL || 'https://omgcovid.com/',
  siteDescription: 'So much news. Start here.',
  metaImage: '/meta-social.png',
  metaTitle: 'omgcovid | A record of our changing world',
  plugins: [
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-160947667-1'
      }
    },
    {
      use: 'gridsome-plugin-i18n',
      options: {
        locales: ['en'],
        fallbackLocale: 'en',
        enablePathRewrite: false,
        messages: process.env.NODE_ENV === 'production' && {
          en: require('./src/locales/en.json')
        }
      }
    },
    {
      use: 'gridsome-plugin-sass-resources-loader',
      options: {
        // provide path to the file with resources
        resources: ['@/assets/scss/_variables.scss', '@/assets/scss/_utils.scss']
      }
    }
  ],
  icon: {
    favicon: './src/assets/icons/favicon.png',
    touchicon: './src/aseets/icons/apple-touch-icon.png'
  }
};
