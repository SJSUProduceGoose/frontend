<script setup>
import { ID_INJECTION_KEY } from 'element-plus'

provide(ID_INJECTION_KEY, {
  prefix: 100,
  current: 0,
})
</script>

<template>

  <div>
    <Nav/>
    <div class="content">
      <NuxtPage/>
    </div>
  </div>
</template>

<style scoped>
.content {
  /* 60.5px is the height of the header */
  height: calc(100vh - 59px);
}
</style>