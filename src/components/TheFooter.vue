<template>
  <footer class="flex-between">
    <a href="https://github.com/a133xz/omg-covid" rel="noopener noreferrer" target="_blank">
      <svg width="22" height="21" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M11 .498C5.851.498 1.462 4.228.637 9.303a10.484 10.484 0 007.04 11.627c.526.097.75-.225.75-.502v-1.782c-2.917.629-3.532-1.408-3.532-1.408a2.78 2.78 0 00-1.215-1.536c-.953-.644.075-.636.075-.636a2.205 2.205 0 011.605 1.086 2.252 2.252 0 003.06.868c.042-.531.277-1.029.66-1.4-2.325-.27-4.777-1.169-4.777-5.183a4.041 4.041 0 011.08-2.816 3.74 3.74 0 01.104-2.771s.878-.285 2.888 1.07a9.988 9.988 0 015.25 0c2.003-1.355 2.88-1.07 2.88-1.07a3.74 3.74 0 01.105 2.77 4.041 4.041 0 011.08 2.817c0 4.03-2.453 4.913-4.793 5.175.508.514.767 1.221.713 1.94v2.876c0 .345.188.607.75.502a10.484 10.484 0 007.037-11.646A10.496 10.496 0 0011 .498z"
          fill="#000"
          fill-rule="evenodd"
        />
      </svg>
      {{ $t('footer') }}
    </a>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  border-top: 1px solid var(--color-line);
  padding: 1rem 0;
}
a:first-child {
  display: flex;
  align-items: center;
}
svg {
  margin-right: $spacer-xs;
}
</style>
