<script setup>
import { ElCard } from 'element-plus'
import { getCart } from '@/store/cart'

</script>

<template>
  <div class="card-grid pa-4" :objects="getCart()">
    <el-card v-for="product in getCart()" :key="product.id" class="ma-4" shadow="hover"
      :body-style="{ padding: '0px' }">
      <img class="w-full h-60 object-cover" :src="product.image_url" :alt="product.name" />
      <div class="p-3">
        <slot :product="product"></slot>
      </div>


    </el-card>


  </div>

</template>


<style scoped lang="scss">
.card-grid {
  display: grid;

  margin: auto;
  max-width: 1500px;

  grid-template-columns: repeat(1, 1fr);
  width: 100%;
}

@media screen and (max-width: 1500px) {
  .card-grid {
    max-width: 1100px;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: auto;
  }
}

@media screen and (max-width: 1200px) {
  .card-grid {
    max-width: 800px;
    grid-template-columns: repeat(1, 1fr);
  }
}

@media screen and (max-width: 800px) {
  .card-grid {
    max-width: 500px;
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
