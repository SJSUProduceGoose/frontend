<script setup>
import { ElCard } from 'element-plus'
import { useCartStore } from '@/store/cart'

const cartStore = useCartStore();

</script>

<template>
  <div class="card-grid pa-4" :objects="cartStore.items">
    <el-card v-for="item in cartStore.items" :key="item.product.id" class="ma-4" shadow="hover"
      :body-style="{ padding: '0px' }">
      <img class="w-full h-60 object-cover" :src="item.product.image_url" :alt="item.product.name" />
      <div class="p-3">
        <slot :item="item" :product="item.product"></slot>
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
