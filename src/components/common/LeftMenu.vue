<script setup lang="ts">
import { ref, watch } from 'vue'
import type { sideBarItem } from '@/types'

const props = defineProps<{
  sidebarOpen: boolean
}>()

const sideBarMennu = ref<sideBarItem[]>([
  { name: '首頁', sub: [], to: '/' },
  { name: 'CMS醫療申訴子系統', sub: [], to: '#' },
  {
    name: 'HMA醫務管理子系統',
    sub: [
      {
        name: '10000受理作業',
        sub: [
          { name: '10101藥材受理分派作業', to: '#' },
          { name: '10401工作清單管理作業', to: '#' },
        ],
      },
    ],
    to: '#',
  },
  {
    name: 'HMD藥品管理子系統',
    sub: [
      {
        name: '10000受理作業',
        sub: [
          { name: '10101藥材受理分派作業', to: '#' },
          { name: '10401工作清單管理作業', to: '#' },
        ],
      },
      {
        name: '21000已收載藥品核價作業',
        sub: [
          { name: '10101藥材受理分派作業', to: '#' },
          { name: '10401工作清單管理作業', to: '#' },
        ],
        to: '#',
      },
      {
        name: '23000藥品價格調查作業',
        sub: [],
        to: '#',
      },
    ],
    to: '#',
  },
  { name: 'HMF支付標準管理子系統', sub: [], to: '#' },
  { name: 'HMS特材管理子系統', sub: [], to: '#' },
  { name: 'IAA檔案應用申請系統', sub: [], to: '#' },
  { name: 'IAM應用系統權限管控子系統', sub: [], to: '#' },
  { name: 'IAU檢驗(查)資料每日上傳子系統', sub: [], to: '#' },
])

const openFirstLevel = ref<number | null>(null)
const handleLevel1Toggle = (index: number) => {
  if (openFirstLevel.value == index) {
    openFirstLevel.value = null
  } else {
    openFirstLevel.value = index
  }
}

const openSecondLevel = ref<number | null>(null)
const handleLevel2Toggle = (index: number) => {
  if (openSecondLevel.value == index) {
    openSecondLevel.value = null
  } else {
    openSecondLevel.value = index
  }
}

watch(openFirstLevel, () => {
  openSecondLevel.value = null
})
</script>
<template>
  <aside :class="{ open: sidebarOpen }" class="sidebar">
    <div class="bar">
      <template v-for="(first, firstIndex) in sideBarMennu" :key="firstIndex">
        <router-link
          v-if="!first.sub?.length"
          :to="first.to ? first.to : ''"
          class="firstLevel cursor-pointer bg-blue-200 p-2 border d-block"
        >
          {{ first.name }}
        </router-link>
        <!-- 第一層 -->
        <BCollapse v-else :show="openFirstLevel == firstIndex">
          <template #header="{ visible }">
            <div
              role="button"
              @click="handleLevel1Toggle(firstIndex)"
              class="firstLevel cursor-pointer bg-blue-200 p-2 border border-end"
              :class="{ active: visible }"
            >
              {{ first.name }}
              <ISiExpandLessDuotone v-if="visible" />
              <ISiExpandMoreDuotone v-else />
            </div>
          </template>

          <div
            class="pb-2 ps-2 pe-2 bg-white"
            v-for="(sencond, sencondIndex) in first.sub"
            :key="sencondIndex"
          >
            <!-- 第二層 -->
            <router-link
              v-if="!sencond.sub?.length"
              :to="sencond.to ? sencond.to : ''"
              class="secondLevel cursor-pointer bg-green-200 pt-2 d-block"
            >
              {{ sencond.name }}
            </router-link>

            <BCollapse v-else :show="openSecondLevel == sencondIndex">
              <template #header="{ visible }">
                <div
                  role="button"
                  @click="handleLevel2Toggle(sencondIndex)"
                  class="secondLevel cursor-pointer bg-green-200 pt-2"
                  :class="{ active: visible }"
                >
                  {{ sencond.name }}
                  <ISiExpandLessDuotone v-if="visible" />
                  <ISiExpandMoreDuotone v-else />
                </div>
              </template>

              <!-- 第三層 -->
              <div
                class="mt-2 ms-2 thirdLevelOut"
                v-if="sencond.sub && sencond.sub.length > 0"
              >
                <router-link
                  v-for="(third, thirdIndex) in sencond.sub"
                  :key="thirdIndex"
                  :to="third.to ? third.to : ''"
                  class="thirdLevel cursor-pointer bg-green-200 p-2 d-block"
                >
                  {{ third.name }}
                </router-link>
              </div>
            </BCollapse>
          </div>
        </BCollapse>
      </template>
    </div>
  </aside>
</template>

<style lang="scss" scoped>
.sidebar {
  width: 0;
  overflow: hidden;
  background-color: #e6f7f3;
  transition: width 0.3s ease;
  height: calc(100vh - $app-header-height);
  position: relative;
  border: 1px solid #d5ebea;
  overflow-y: hidden;
  &.open {
    width: $app-sidebar-width;
  }
  .bar {
    width: 250px;
    .firstLevel {
      color: #000;
      text-decoration: none;
      font-weight: 600;
      display: flex;
      align-self: center;
      justify-content: space-between;
      &.active {
        background-color: $app-main-color;
        color: #fff;
      }
    }
    .secondLevel {
      color: #000;
      text-decoration: none;
      font-weight: 600;
      display: flex;
      align-self: center;
      justify-content: space-between;
      &.active {
        color: $app-main-color;
      }
    }
    .thirdLevelOut {
      border-left: 5px solid $app-main-color;
      .thirdLevel {
        color: #000;
        text-decoration: none;
        font-weight: 600;
      }
    }
  }
}
</style>
