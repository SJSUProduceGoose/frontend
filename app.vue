<script>
export default {
  data() {
    return {
      count: 0,
      url: 'goose.png'
    }
  }
}
</script>

<template>
  <img :src=url>
</template>

<style scoped>
img {
  width: 400px;
  height: 600px;
  position: fixed;
  top: 150px;
  left: 450px;
  

}
</style>