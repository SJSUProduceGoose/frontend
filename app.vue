<script>
export default {
  data() {
    return {
      url: 'goose.png'
    }
  }
}
</script>

<template>
  <img :src=url>
  <div id="frontpagetxt">
  <h1>Fresh! Local! Fun!</h1>
  
  <h2>Order fresh produce from the comfort of your own home from local, organic farms with a few clicks!</h2>
  </div>
</template>

<style scoped>
#frontpagetxt
{
  width: 500px;
  position: relative;
  top: 300px;
  left: 900px;
  color: orange;
  
}
img {
  width: 450px;
  height: 600px;
  position: fixed;
  top: 150px;
  left: 450px;
  

}
</style>