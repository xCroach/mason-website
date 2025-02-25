<template>
  <Menubar id="nav" :model="items"/>

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
#nav {
  font-size: 1.2rem;
  justify-content: center;
  background: #faebd7A0;
  --p-menubar-gap: 1.6rem;
}
</style>