<template>
  <header>
    <nav>
      <!-- :to="$tp('/about')" -->
      <g-link to="/">{{ $t('navigation.home') }}</g-link>
      <g-link to="/about">
        {{ $t('navigation.about') }}
      </g-link>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
header {
  position: relative;
}
nav {
  position: absolute;
  width: 100%;
  font-weight: bold;
  top: -2.5rem;
  text-align: right;
}
.active--exact {
  display: none;
}
a:not(.active--exact) {
  display: inline-block;
}
</style>
