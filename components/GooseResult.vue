<script setup>
import { ElResult, ElImage } from 'element-plus'

const props = defineProps({
  type: {
    type: String,
    choices: ['empty', 'error', 'success'],
    default: "empty"
  },
  title: {
    type: String,
    required: true,
  },
  subTitle: {
    type: String,
    required: true,
  },
})

const alt = computed(() => {
  switch (props.type) {
    case "empty":
      return "Empty Goose"
    case "error":
      return "Error Goose"
    case "success":
      return "Success Goose"
    default:
      return "Goose"
  }
})

const errorGoose = await import('~/assets/img/error-goose.png')
const emptyGoose = await import('~/assets/img/empty-goose.png')
const successGoose = await import('~/assets/img/success-goose.png')

const src = computed(() => {
  switch (props.type) {
    case "empty":
      return emptyGoose.default
    case "error":
      return errorGoose.default
    case "success":
      return successGoose.default
    default:
      return successGoose.default
  }
})

</script>

<template>
  <el-result :title="props.title" :sub-title="props.subTitle">
    <template #icon>
      <el-image
        class="w-80 h-80"
        :src="src"
        :alt="alt"
      />
    </template>
    <template #extra>
      <slot />
    </template>
  </el-result>
</template>