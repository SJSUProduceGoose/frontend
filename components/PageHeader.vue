<script setup>
import { ElPageHeader, ElBreadcrumb, ElBreadcrumbItem } from 'element-plus'
import { ArrowLeft } from '@element-plus/icons-vue'


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


const enoughToGBack = computed(() => innerBreadcrumbs.value.length > 1)
const backTo = computed(() => enoughToGBack ? innerBreadcrumbs.value[innerBreadcrumbs.value.length - 2] : null)

const canGoBack = computed(() => enoughToGBack.value && backTo.value !== null && backTo.value.to !== '')

const pageHeaderTitle = computed(() => canGoBack.value ? 'Back' : '')
const pageHeaderIcon = computed(() => canGoBack.value ? ArrowLeft : null)

function goBack() {
  if (canGoBack) {
    const { to } = innerBreadcrumbs.value[innerBreadcrumbs.value.length - 2]
    if (to) {
      navigateTo(to)
    }
  }
}
</script>

<template>
  <div class="flex align-center h-7 mb-24 w-full page-header">
    <el-page-header class="w-full" :icon="pageHeaderIcon" :title="pageHeaderTitle" @back="goBack">
      <template #title>
        {{ pageHeaderTitle }}
      </template>
      <template #default>

      </template>
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
      <template #extra>
        <slot name="extra"  />
      </template>
    </el-page-header>
  </div>
</template>