<script setup lang="ts">
interface breadCrumbItem {
  name: string
  url: string
}
const props = defineProps<{
  breadCrumb: breadCrumbItem[]
}>()
</script>

<template>
  <BBreadcrumb style="--bs-breadcrumb-divider: '>'">
    <BBreadcrumbItem v-for="item in breadCrumb" :href="item.url">
      <IBiHouseDoorFill v-if="item.url == '/'" />
      {{ item.name }}
    </BBreadcrumbItem>
  </BBreadcrumb>
</template>

<style lang="scss" scoped>
:deep(.breadcrumb) {
  margin-bottom: 0;
  .breadcrumb-item {
    a {
      text-decoration: none;
      color: #8d8d8d;
      display: flex;
      align-items: center;
      svg {
        margin-right: 5px;
      }
    }
  }
}
</style>
