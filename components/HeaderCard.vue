<script setup>
import { ElCard } from 'element-plus'

const slots = useSlots()
</script>

<template>
  <el-card shadow="always" :body-style="{ padding: '0px' }">
    <div class="bg-gray:20 pa-3" style="border-bottom: 1px solid var(--el-card-border-color);">
      <slot name="header" />
    </div>
    <div v-if="slots.subheader" class="bg-gray:10 pa-3" style="border-bottom: 1px solid var(--el-card-border-color);">
      <slot name="subheader" />
    </div>
    <div class="flex w-full flex-row pa-3 bg-white">
      <slot name="body" />
    </div>
  </el-card>
</template>
