<script setup>
import { ElButton } from 'element-plus'
</script>

<template>
  <div id="wrapper">
    <img id="goose" src="~/assets/img/produce-goose.png" alt="Produce Goose">
    <div id="text">
      <h1>Fresh! Local! Fun!</h1>
        <h2>Order fresh produce from the comfort of your own home from local, organic farms with a few clicks!</h2>
        <NuxtLink custom to="/shop" v-slot="{ navigate }">
          <el-button type="primary" class="action-button" @click="navigate">Shop Now</el-button>
        </NuxtLink>
    </div>
  </div>
</template>

<style scoped lang="scss">
#wrapper{
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 95vh;
  position: relative;
}

#goose{
  margin-right: 600px;
  height:500px;
  width: 500px;
}

#text{
position: absolute;
left: 49%;
color: #ff7800;
width: 500px; 
}

h1{
  font-size: 50px;
}
h2{
  font-size: 22px;
  margin-top: 16px;
}

.action-button {
  height: 50px;
  width: 150px;
  font-size: 20px;
  font-weight: bold;
  margin-top: 16px;
 
  &:hover {
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.15);
    transition: box-shadow 0.5s;
  }
}
</style>