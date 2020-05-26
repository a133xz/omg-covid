<template>
  <masonry :gutter="{ default: '2rem' }" :cols="{ default: 3, 768: 2, 500: 1 }">
    <div
      v-for="(item, index) in items"
      :key="index"
      :data-type="item.type"
      :data-id="index"
      class="card"
    >
      <a :href="item.link" rel="noopener noreferrer" target="_blank">
        <h3 data-text>{{ item.title }}</h3>
      </a>
      <p data-text class="h3">{{ item.description }}</p>
      <span>{{ item.date }}</span>
      <div class="actions flex-between">
        <div class="flex-between">
          <a @click="generateLink(index, true)">
            <Icon name="twitter" />
            <span class="sr-only">Share the card in Twitter</span>
          </a>
          <a class="space-left" @click="generateLink(index, false)">
            <Icon name="whatsapp" />
            <span class="sr-only">Share the card in Whatsapp</span>
          </a>
        </div>
        <a :href="item.link" rel="noopener noreferrer" target="_blank">
          <Icon name="arrow" />
          <span class="sr-only">Link to the article</span>
        </a>
      </div>
    </div>
  </masonry>
</template>

<script>
import Icon from './IconLoader';

export default {
  components: {
    Icon
  },
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  methods: {
    generateLink(id, isTwitter) {
      let contentToShare = '';
      let parentElement = document.querySelector(`[data-id='${id}']`);
      let story = parentElement.querySelectorAll('[data-text]');
      story.forEach(i => (contentToShare += i.textContent));
      let linkToShare = isTwitter
        ? `https://twitter.com/share?text=${contentToShare} via&url=${encodeURIComponent(
            window.location.href
          )}`
        : `https://api.whatsapp.com/send?text=${contentToShare} ${encodeURIComponent(
            window.location.href
          )}`;
      window.open(linkToShare, '_blank', 'noopener, noreferrer');
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  padding-bottom: $spacer-xs;
  margin-bottom: $spacer-xl;
  border-bottom: 2px solid var(--color-accent);
  // box-shadow: 2px 2px 3px 2px #ec202730;
  // padding: 12px;
}

h3,
p {
  display: inline;
}
h3 {
  font-weight: 700;
}
p {
  padding-left: $spacer-xs;
}
span {
  display: block;
  color: var(--color-dark-light);
  padding-top: $spacer-xs;
  padding-bottom: $spacer-md;
}
// Helper only used here
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}
.space-left {
  padding-left: $spacer-sm;
}
</style>
