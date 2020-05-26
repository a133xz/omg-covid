// Import main css
import '@/assets/scss/main.scss';
import DefaultLayout from '@/layouts/Default.vue';
import metadata from './metadata';
import VueMasonry from 'vue-masonry-css';

export default function(Vue, { appOptions, head }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);
  Vue.use(VueMasonry);
  appOptions.i18n.setLocaleMessage('en', require('./locales/en.json'));
  head.titleTemplate = head.titleTemplate.replace('-', '|');
  // Facebook and Twitter
  head.meta.push(...metadata);
}
