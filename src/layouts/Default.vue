<template>
  <div>
    <Header />
    <main>
      <slot />
    </main>
    <Footer />
    <SpriteIcons />
  </div>
</template>

<script>
import Header from '@/components/TheHeader';
import Footer from '@/components/TheFooter';
import SpriteIcons from '@/assets/icons/Sprite';

export default {
  components: {
    Header,
    Footer,
    SpriteIcons
  }
};
</script>
