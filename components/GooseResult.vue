<script setup>
import { ElResult, ElImage } from 'element-plus'

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  subTitle: {
    type: String,
    required: true,
  },
})

const goose = await import('~/assets/img/produce-goose.png')
</script>

<template>
  <el-result :title="props.title" :sub-title="props.subTitle">
    <template #icon>
      <el-image
        class="w-80 h-80"
        :src="goose.default"
        alt="Empty Produce Goose"
      />
    </template>
    <template #extra>
      <slot />
    </template>
  </el-result>
</template>