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
  height: calc(100vh - 60.5px);
}
</style>