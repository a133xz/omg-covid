// Global info
import config from '../gridsome.config';
const metadata = [
  {
    property: 'og:type',
    content: 'website'
  },
  {
    property: 'og:url',
    content: config.siteUrl
  },
  {
    property: 'og:title',
    content: config.metaTitle
  },
  {
    property: 'og:description',
    content: config.siteDescription
  },
  {
    property: 'og:image',
    content: config.metaImage
  },
  {
    property: 'twitter:card',
    content: 'summary_large_image'
  },
  {
    property: 'twitter:url',
    content: config.siteUrl
  },
  {
    property: 'twitter:title',
    content: config.metaTitle
  },
  {
    property: 'twitter:description',
    content: config.siteDescription
  },
  {
    property: 'twitter:image',
    content: config.metaImage
  }
];

export default metadata;
