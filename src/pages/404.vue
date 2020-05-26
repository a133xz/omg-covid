<template>
  <div class="drama">
    <h2>404: Something is wrong with the world.</h2>
    <img src="@/assets/images/404.png" alt="a 404 ilustration" width="400" />
    <h3>Return <g-link to="/">home</g-link>.</h3>
  </div>
</template>

<style lang="scss" scoped>
.drama {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: $spacer-lg;
  img {
    padding-top: $spacer-xl;
    padding-bottom: $spacer-xl;
  }
}
a {
  border-bottom: 1px solid var(--color-accent);
}
</style>
