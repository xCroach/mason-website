<template>
  <div class="relative min-h-screen flex flex-col items-center justify-center bg-cover bg-center" :style="backgroundStyle">
    <!-- Navbar -->
    <nav class="absolute top-5 left-1/2 transform -translate-x-1/2 flex space-x-4 p-4 bg-white/30 backdrop-blur-md rounded-xl shadow-lg">
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

    <!-- Logo -->
    <img alt="Mason Studios Logo" src="./assets/MasonStudiosLogo.png" class="w-[710px] h-[400px] drop-shadow-lg" />

    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      backgroundStyle: {
        backgroundImage: `url('https://picsum.photos/1920/1080')`
      }
    };
  }
};
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
