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
    url: '/components/about'
  },
  {
    label: 'Projects',
    icon: 'pi pi-folder',
    url: '/components/projects'
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
  font-size: 1.5rem;
  justify-content: center;
  background: rgba(9,95,99,0.55);
  --p-menubar-gap: 1.6rem;

}
</style>