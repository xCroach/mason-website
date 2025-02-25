<template>
  <Menubar :model="items"/>

  <main>
    <router-view/>
  </main>
</template>

<script setup>
import {ref} from "vue";

const items = ref([
  {
    label: 'Home',
    icon: 'pi pi-home',
    url: '/'
  },
  {
    label: 'About',
    icon: 'pi pi-user',
    url: '/about'
  },
  {
    label: 'Projects',
    icon: 'pi pi-folder',
    url: '/projects'
  },
]);
</script>

<script>
import Menubar from 'primevue/menubar';

export default {
  name: 'App',
  components: {Menubar},
  setup() {
    return {}
  }
};
</script>

<style scoped>
</style>