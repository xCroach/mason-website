<template>
  <div class="relative min-h-screen bg-cover bg-center" :style="backgroundStyle">
    <!-- Navbar -->
    <nav class="absolute top-0 left-0 w-full flex justify-center p-4 bg-white/50 backdrop-blur-md shadow-lg">
      <div class="flex space-x-4">
        <router-link to="/">
          <button class="btn">Home</button>
        </router-link>
        <router-link to="/components/about">
          <button class="btn">About</button>
        </router-link>
        <router-link to="/components/projects">
          <button class="btn">Projects</button>
        </router-link>
      </div>
    </nav>

    <!-- Main Content -->
    <div class="flex flex-col items-center justify-center min-h-screen">
      <img alt="Mason Studios Logo" src="./assets/MasonStudiosLogo.png" class="w-[710px] h-[400px] drop-shadow-lg" />
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    backgroundStyle() {
      return {
        backgroundImage: `url('https://picsum.photos/1920/1080?random=${Math.random()}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      };
    }
  }
};
</script>

<style scoped>
.btn {
  @apply px-6 py-3 text-lg font-semibold rounded-lg transition duration-300 shadow-md
  bg-blue-500 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300;
}
</style>

