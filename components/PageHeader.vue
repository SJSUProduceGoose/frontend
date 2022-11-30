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
  <div class="flex align-center h-7 mb-8">
    <el-page-header :icon="ArrowLeft" @back="router.back()">
      <template #content>
        <div class="flex items-center">
          <div class="flex mr-3">
            <slot name="pre"  />
          </div>
          <span class="text-large font-600 mr-3">{{ props.title }}</span>
        </div>
      </template>
    </el-page-header>
  </div>
</template>
