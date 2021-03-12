<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark" fixed="top">
      <!-- <b-navbar-brand href="#">NavBar</b-navbar-brand>-->
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <NuxtLink class="navbar-brand" to="/">Home</NuxtLink>
          <NuxtLink class="navbar-brand" to="/dashboard">Dashboard</NuxtLink>
          <NuxtLink class="navbar-brand" to="/settings">Settings</NuxtLink>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>
            <template #button-content>
              <em>{{user}}</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item @click="signout()">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex'
  //console.log(this.$store);
  export default {
    computed: {
      user () {
        return this.$store.state.user
      }
    },
    methods: {
      signout() {
        console.log('signout');
        this.$router.push('/login')
      }
    }
  }
</script>

<style scopded>
  a.nuxt-link-exact-active {
    color: deeppink !important;
  }
  .user-section{
    display: flex;
    align-items: center;
    padding-right: 40px;
  }
  .user-section p {
    margin-right: 16px;
  }
  .user-section b-button {

  }

</style>
