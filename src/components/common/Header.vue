<script setup lang="ts">
const emit = defineEmits(['toggleSidebar'])
const toggleSidebar = () => {
  emit('toggleSidebar')
}
</script>
<template>
  <div class="header">
    <div class="menuBtn" @click="toggleSidebar">
      <IBiJustify />
    </div>
    <div class="logo ms-4">
      <img src="/logo.png" alt="" />
    </div>
    
    <BDropdown variant="primary" menu-class="w-100" class="ms-auto">
      <template #button-content>
        <IBiPersonFill />
        <span class="text-gray-800 font-medium">台北虛擬診甄曉利</span>
      </template>

      <BDropdownItem class="hover:bg-gray-100 px-4 py-2 rounded"
        >First Action</BDropdownItem
      >
      <BDropdownItem class="hover:bg-gray-100 px-4 py-2 rounded"
        >Second Action</BDropdownItem
      >
      <BDropdownItem class="hover:bg-gray-100 px-4 py-2 rounded"
        >Third Action</BDropdownItem
      >
    </BDropdown>
  </div>
</template>
<style lang="scss" scoped>
.header {
  width: 100%;
  height: 120px;
  //   background-image: url(../../assets/header.png);
  background-color: #aee5d8;
  display: flex;
  align-items: center;
  padding: 0 15px;
  .menuBtn {
    cursor: pointer;
  }
}
</style>
