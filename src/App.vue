<template>
  <div id="app">
    <top-navigation></top-navigation>
    <router-view/>
  </div>
</template>

<script>

import navigation from './components/TopNavigation.vue';


export default {
  components: {
    'top-navigation': navigation,
  },
};
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
