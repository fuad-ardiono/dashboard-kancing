<template>
  <div>
    <span>{{ title }}</span>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Frame',
  computed: {
    loggedIn() {
      return this.isLoggedIn();
    },
    title() {
      console.log(this.$router.currentRoute);
      return this.$router.currentRoute.name;
    },
  },
  created() {
    if (!this.isLoggedIn()) {
      this.$router.push('/');
      this.$parent.typeNavbar = 'home';
    } else {
      this.$parent.typeNavbar = 'dashboard';
    }
  },
};
</script>
