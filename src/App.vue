<template>
  <img alt="Mason Studios Logo" src="./assets/MasonStudiosLogo.png" width="710px" height="400px">
  <Sidebar>
  </Sidebar>
  <div :style="{ 'margin-left':sidebarWidth}">
    <router-view />
  </div>
</template>

<script>
import Sidebar from './components/Sidebar/SideBar.vue'
import { sidebarWidth } from "@/components/Sidebar/state";

export default {
  name: 'App',
  components: { Sidebar },
  setup(){
    return {sidebarWidth}
  }
};
</script>

<style scoped>
</style>

