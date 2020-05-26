<template>
  <svg class="icon">
    <use :xlink:href="`#${name}`" />
  </svg>
</template>

<script>
export default {
  name: 'IconLoader',
  props: {
    name: {
      type: String,
      default: ''
    }
  }
};
</script>

<style lang="scss" scoped>
.icon {
  display: inline-block;
  min-width: 100%;
  min-height: 1em;
  max-width: 20px;
  max-height: 1em;
  vertical-align: -0.125em;
}
</style>
