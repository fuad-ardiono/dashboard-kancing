<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand to="/">Kancing</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <div v-if="typeNavbar === 'home'">
            <b-nav-item to="/about">About</b-nav-item>
            <b-nav-item to="/signup">Sign Up</b-nav-item>
            <b-nav-item to="/login">Login</b-nav-item>
          </div>
          <div v-if="typeNavbar === 'dashboard'">
            <b-nav-item to="/dashboard">Dashboard</b-nav-item>
            <b-nav-item v-if="typeNavbar === 'dashboard'"
                        @click="handleLogout">Log Out</b-nav-item>
          </div>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
/* eslint-disable object-shorthand */

export default {
  props: {
    typeNavbar: {
      type: String,
      // eslint-disable-next-line func-names
      validator: function (value) {
        if (value === 'home' || value === 'dashboard') {
          return true;
        }
        return false;
      },
    },
  },
  methods: {
    handleLogout() {
      this.authLogout();
      this.$noty.success('Logout Success!');
      this.$parent.typeNavbar = 'home';
      this.$router.push('/');
    },
  },
};
</script>
