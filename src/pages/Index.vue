<template>
  <Layout>
    <div class="intro">
      <h1>omgcovid</h1>
      <div>A record of our changing world</div>
    </div>
    <section class="hero">
      <header>
        <h2>{{ $t('home.intro.headline') }}</h2>
        <p v-for="(item, index) in $t('home.intro.body')" :key="index">{{ item }}</p>
      </header>
      <div class="vertical-line"></div>
      <aside>
        <img src="@/assets/images/intro.png" alt="ilustration of a woman looking from a window" />
      </aside>
    </section>
    <FilterItem :filters="filters" @clicked="updateFilter" />
    <div class="p-y-spacer-lg">
      <label for="date">Sort by:</label>
      <select id="date" v-model="order">
        <option :value="1" selected>newest</option>
        <option :value="0">oldest</option>
      </select>
    </div>
    <Card :items="items" />
  </Layout>
</template>

<script>
import stories from '../../stories.json';
import FilterItem from '@/components/FilterItem';
import Card from '@/components/Card';

export default {
  name: 'Home',
  components: {
    FilterItem,
    Card
  },
  data: () => ({
    filterName: '',
    order: 1
  }),
  computed: {
    items() {
      // filter the items
      const filterStories = stories.filter(
        el => el.type === this.filterName || this.filterName === ''
      );
      // Order items
      return this.order === 1 ? filterStories.reverse() : filterStories;
    },
    filters() {
      // Get the filters dinamically
      const types = stories.map(i => i.type);
      const uniqueTypes = [...new Set(types)];
      // return by Alph order
      return uniqueTypes.sort();
    }
  },
  methods: {
    updateFilter(filterName) {
      this.filterName = filterName;
    }
  },
  metaInfo: {
    title: 'omgcovid'
  }
};
</script>

<style lang="scss" scoped>
$breakpoint: 950px;
.intro {
  text-align: center;
  margin-bottom: $spacer-lg;
}
.hero {
  display: grid;
  grid-template-columns: 4fr 2fr 4fr;
  border-top: 0.5px solid var(--color-line);
  border-bottom: 0.5px solid var(--color-line);
  @include p-y-spacer-lg;
  @media (max-width: $breakpoint) {
    grid-template-columns: 6fr 0 6fr;
    gap: 1rem;
  }
  @media (max-width: $screen-sm) {
    grid-template-columns: 1fr;
  }
  aside {
    text-align: center;
  }
}
.vertical-line {
  @media (min-width: $breakpoint) {
    background-image: linear-gradient(var(--color-line), var(--color-line));
    background-size: 1px 100%;
    background-repeat: no-repeat;
    background-position: center center;
  }
}

// Select
label {
  font-weight: 700;
}
select {
  @include font-primary;
  font-size: 1rem;
  appearance: none;
  background: transparent;
  border: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-position: right 50%;
  background-repeat: no-repeat;
  background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOSIgaGVpZ2h0PSI1IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik00LjUgNC45MjVMLjQzNy44NjggMS4wMDcuMyA0LjUgMy43OSA3Ljk5NC4zbC41NjkuNTY4eiIgZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+');
  padding-right: 1rem;
  padding-left: 0.5rem;
  outline-color: var(--color-accent);
}
// Helpers
.mb-0 {
  margin-bottom: 0;
}
</style>
