<template>
  <div class="home">
    <Carousel/>
  </div>
</template>

<script>
// @ is an alias to /src
import Carousel from '@/components/home/Carousel.vue';

export default {
  name: 'home',
  components: {
    Carousel,
  },
};
</script>
