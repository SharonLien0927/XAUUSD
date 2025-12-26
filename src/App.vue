<template>
  <div class="app-container">
    <!-- 頁頭 -->
    <div class="app-header">
      <h1>🏆 XAUUSD</h1>
    </div>

    <!-- 主內容區域 -->
    <div class="app-content">
      <!-- 計算頁面 -->
      <Volatility v-if="currentTab === '計算'" />

      <!-- 策略頁面 -->
      <Plan v-if="currentTab === '策略'" />

      <!-- 守則頁面 -->
      <Rules v-if="currentTab === '守則'" />

      <!-- 紀錄頁面 -->
      <Records v-if="currentTab === '紀錄'" />
    </div>

    <!-- 底部導航欄 -->
    <div class="app-footer">
      <div class="nav-tabs">
        <button 
          v-for="tab in tabs" 
          :key="tab"
          class="nav-tab"
          :class="{ active: currentTab === tab }"
          @click="currentTab = tab"
        >
          {{ tab }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Volatility from './views/Volatility.vue'
import Plan from './views/Plan.vue'
import Rules from './views/Rules.vue'
import Records from './views/Records.vue'

const tabs = ['計算', '策略', '守則', '紀錄']
const currentTab = ref('計算')
</script>

<style scoped>
</style>
