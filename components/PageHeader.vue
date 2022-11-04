<script setup>
import { ElPageHeader } from 'element-plus'
import { ArrowLeft } from '@element-plus/icons-vue'
import { usePageHeaderStore } from '@/store/pageHeader'

const router = useRouter();
const pageHeaderStore = usePageHeaderStore();
</script>

<template>
  <client-only>
    <div v-if="pageHeaderStore.visible" class="flex align-center h-7">
      <el-page-header :icon="ArrowLeft" @back="router.back()">
        <template #content>
          <span class="text-large font-600 mr-3">{{ pageHeaderStore.title }}</span>
        </template>
      </el-page-header>
    </div>
  </client-only>
</template>
