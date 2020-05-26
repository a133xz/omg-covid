// Global info
import config from '../gridsome.config';
const metadata = [
  {
    name: 'og:type',
    content: 'website'
  },
  {
    name: 'og:url',
    content: config.siteUrl
  },
  {
    name: 'og:title',
    content: config.metaTitle
  },
  {
    name: 'og:description',
    content: config.siteDescription
  },
  {
    name: 'og:image',
    content: config.metaImage
  },
  {
    name: 'twitter:card',
    content: 'summary_large_image'
  },
  {
    name: 'twitter:url',
    content: config.siteUrl
  },
  {
    name: 'twitter:title',
    content: config.metaTitle
  },
  {
    name: 'twitter:description',
    content: config.siteDescription
  },
  {
    name: 'twitter:image',
    content: config.metaImage
  }
];

export default metadata;
