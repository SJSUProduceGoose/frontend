<script setup>
import { ElPageHeader } from 'element-plus'
import { ArrowLeft } from '@element-plus/icons-vue'

const router = useRouter()
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="flex align-center h-7">
    <el-page-header :icon="ArrowLeft" @back="router.back()">
      <template #content>
        <span class="text-large font-600 mr-3">{{ props.title }}</span>
      </template>
    </el-page-header>
  </div>
</template>
