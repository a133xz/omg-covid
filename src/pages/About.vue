<template>
  <Layout>
    <div class="intro">
      <h1>{{ $t('about.title') }}</h1>
    </div>
    <section class="p-y-spacer-lg">
      <header>
        <h2>{{ $t('about.intro.headline') }}</h2>
        <p v-for="(item, index) in $t('about.intro.body')" :key="index">{{ item }}</p>
        <p>
          Community is the answer; this project is open source on
          <a
            href="https://github.com/a133xz/omg-covid"
            class="underline"
            rel="noopener noreferrer"
            target="_blank"
          >
            github</a
          >
          and we’re looking for translation and content contributions.
        </p>
        <p>
          We are three self-isolating friends:<br />
          <a
            class="underline"
            href="https://antonio-r.now.sh/"
            target="_blank"
            rel="noopener noreferrer"
            >Antonio (👨‍💻)</a
          >,
          <a
            class="underline"
            href="https://dribbble.com/panglozano"
            target="_blank"
            rel="noopener noreferrer"
            >Pang (👨‍🎨)</a
          >
          and
          <a
            class="underline"
            href="http://amzn.to/2NrNrzj"
            target="_blank"
            rel="noopener noreferrer"
          >
            Gen (✍️)</a
          >
        </p>
      </header>
      <aside>
        <img src="@/assets/images/about.png" alt="illustration of people at home" />
      </aside>
    </section>
    <div class="p-t-spacer-lg">
      <h3 id="resources-id" class="margin-0">
        {{ $t('about.resources.headline') }}
      </h3>
    </div>
    <ul class="p-y-spacer-lg" aria-labelledby="resources-id">
      <li v-for="(item, index) in links" :key="index">
        <a :href="item.link" rel="noopener noreferrer" target="_blank"
          ><div class="h4">{{ item.title }}</div>
          <div class="flex-between">
            <p>{{ item.description }}</p>
            <svg width="21" height="16" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12.5-.005l-1.1 1.098 6 6.092H.5v1.598h16.9l-6 6.091 1.1 1.099 8-7.99z"
                fill="#000"
                fill-rule="evenodd"
              />
            </svg>
          </div>
        </a>
      </li>
    </ul>
  </Layout>
</template>

<script>
export default {
  name: 'About',
  data: () => ({
    links: [
      {
        title: 'Flatten the curve',
        description: 'How we can slow the spread of COVID-19',
        link: 'https://www.flattenthecurve.com/'
      },
      {
        title: 'bored.solutions',
        description: 'Things to learn, make and do while self-isolating',
        link: 'https://bored.solutions/'
      },
      {
        title: 'Johns Hopkins Data',
        description: 'on confirmed cases and critical trends',
        link: 'https://coronavirus.jhu.edu/map.html'
      }
    ]
  }),
  metaInfo: {
    title: 'About'
  }
};
</script>

<style lang="scss" scoped>
.intro {
  margin-bottom: $spacer-lg;
}
section {
  border-top: 1px solid var(--color-line);
  border-bottom: 1px solid var(--color-line);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 5rem;
  @media (max-width: $screen-sm) {
    grid-template-columns: 1fr;
  }
  img {
    margin-top: $spacer-sm;
  }
}
h3,
.h3 {
  font-weight: 700;
}
li {
  margin-bottom: 2rem;
  border-bottom: 2px solid var(--color-accent);
}
.h4 {
  font-weight: 700;
}
// helpers
.margin-0 {
  margin: 0;
}
.p-t-spacer-lg {
  padding-top: $spacer-lg;
}
.underline {
  border-bottom: 1px solid var(--color-accent);
}
</style>
