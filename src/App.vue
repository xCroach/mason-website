<template>
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
.btn {
  @apply px-6 py-3 text-lg font-semibold rounded-lg transition duration-300 shadow-md
  bg-blue-500 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300;
}
</style>

