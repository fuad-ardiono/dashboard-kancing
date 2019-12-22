<template>
  <div id="app">
    <NavBar :typeNavbar="typeNavbar"/>
    <router-view/>
  </div>
</template>

<script>
import NavBar from '@/components/Navbar.vue';

export default {
  components: {
    NavBar,
  },
  data() {
    return {
      typeNavbar: 'home',
    };
  },
  created() {
    if (this.isLoggedIn()) {
      this.typeNavbar = 'dashboard';
    } else {
      this.typeNavbar = 'home';
    }
  },
};
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
