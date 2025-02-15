<template>
  <img alt="Mason Studios Logo" src="./assets/MasonStudiosLogo.png" width="710px" height="400px">
  <div>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/components/about">About</router-link>
      <router-link to="/components/projects">Projects</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
