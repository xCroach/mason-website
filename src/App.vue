<template>
  <img alt="Mason Studios Logo" src="./assets/MasonStudiosLogo.png" width="710px" height="400px">
  <div>
    <nav>
      <router-link to="/">
        <button class="btn">Home</button>
      </router-link>
      <router-link to="/components/about">
        <button class="btn">About</button>
      </router-link>
      <router-link to="/components/projects">
        <button class="btn">Projects</button>
      </router-link>
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
