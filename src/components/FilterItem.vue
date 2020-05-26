<template>
  <div class="wrapper">
    <ul class="flex-between">
      <li @click="onClickFilter('')">
        <a :class="{ active: currentCategory === '' }"> {{ $t('filters.all') }}</a>
      </li>
      <li v-for="(category, index) in filters" :key="index" @click="onClickFilter(category)">
        <a :class="{ active: currentCategory === category }">{{ category }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'FilterItem',
  props: {
    filters: {
      type: Array,
      required: true
    }
  },
  data: function() {
    return {
      currentCategory: 'none'
    };
  },
  methods: {
    onClickFilter(filterName) {
      this.currentCategory = filterName;
      this.$emit('clicked', filterName);
    }
  }
};
//
</script>

<style lang="scss" scoped>
.wrapper {
  position: sticky;
  top: -1px;
  z-index: 99;
  background: var(--color-light);
  padding: $spacer-xs 0;
  &:after {
    content: '';
    width: 100%;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    border-bottom: 1px solid var(--color-line);
  }
}
ul {
  max-width: $screen-sm;
  margin: 0 auto;
  flex-flow: row wrap;
}
a {
  display: block;
  font-weight: 700;
  &.active {
    color: var(--color-accent);
    text-decoration: underline;
  }
}
</style>
