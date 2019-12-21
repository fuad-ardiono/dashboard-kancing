<template>
  <div class="about">
    <h1>This is an about page</h1>
    <HelloWorld msg="Hello"/>
  </div>
</template>

<script>
const HelloWorld = () => import('@/components/HelloWorld.vue');

export default {
  name: 'About',
  components: {
    HelloWorld,
  },
};
</script>
