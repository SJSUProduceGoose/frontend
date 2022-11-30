<script setup>
import { ElPageHeader, ElBreadcrumb, ElBreadcrumbItem } from 'element-plus'
import { ArrowLeft } from '@element-plus/icons-vue'

const router = useRouter()
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  breadcrumbs: {
    type: Array,
    default: () => [],
  },
})

const innerBreadcrumbs = computed(
  () => props.breadcrumbs.length > 0 ? props.breadcrumbs : [
    {
      title: props.title,
      to: '',
    },
  ]
)

</script>

<template>
  <div class="flex align-center h-7 mb-16">
    <el-page-header :icon="ArrowLeft" @back="router.back()">
      <template #breadcrumb>
        <el-breadcrumb separator="/" class="mt-4">
          <el-breadcrumb-item 
            v-for="breadcrumb in innerBreadcrumbs"
            :key="(breadcrumb.tilte + breadcrumb.to)"
            :to="{ path: breadcrumb.to }"
          >
            {{ breadcrumb.title }}
          </el-breadcrumb-item>
        </el-breadcrumb>
      </template>
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
