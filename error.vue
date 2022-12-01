<script setup lang="ts">
import { ElButton } from 'element-plus';


const error = useError()

const subTitle = computed(() => {
  switch (error.value.statusCode) {
    case "404":
      return "The Goose got chased away while looking for your page."
    default:
      return "The Goose had to retreat because of a nasty error. Please Try again."
  }
})

function goHome() {
  window.location.href = "/"
}
</script>

<template>
  <div class="content px-4">
    <div class="auth-container">
      <GooseResult
          :title="error.statusCode"
          :sub-title="subTitle"
          type="error"
        >
        <el-button type="default" @click="goHome">Retreat</el-button>
      </GooseResult>
    </div>
  </div>
</template>