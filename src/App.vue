<template>
  <div>
    <Header @toggleSidebar="toggleSidebar" />

    <div class="app-layout">
      <LeftMenu :sidebarOpen="sidebarOpen" />
      <main class="app-main">
        <RouterView />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Header from '@/components/common/Header.vue'
import LeftMenu from '@/components/common/LeftMenu.vue'

const sidebarOpen = ref(true)
const toggleSidebar = () => {
  sidebarOpen.value = !sidebarOpen.value
}
</script>

<style scoped lang="scss">
.app-layout {
  display: flex;
  position: relative;
}

.app-main {
  flex: 1;
  transition: margin-left 0.3s ease;
}

.main-shifted {
  margin-left: $app-sidebar-width;
}
</style>
