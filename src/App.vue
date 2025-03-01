<template>
  <Menubar id="nav" :model="items"/>
  <main style="padding-top: 55px">
      <router-view/>
  </main>
</template>

<script setup>
import {ref} from "vue";
import { useRouter } from 'vue-router';

const router = useRouter();
const items = ref([
  {
    label: 'Home',
    icon: 'pi pi-home',
    command: () => router.push('/')
  },
  {
    label: 'About',
    icon: 'pi pi-user',
    command: () => router.push('/about')
  },
  {
    label: 'Projects',
    icon: 'pi pi-folder',
    command: () => router.push('/projects')
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
  backdrop-filter: blur(10px);
  position: fixed;
  width: 100%;
  display: flex;
  top: 0.5rem;
  left: 50%;
  transform: translateX(-50%);
}
</style>