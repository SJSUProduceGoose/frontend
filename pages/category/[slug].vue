<script setup>
import { ElButton } from 'element-plus'
import { Plus } from '@element-plus/icons-vue'
import { usePageHeaderStore } from '@/store/pageHeader'
import { useCartStore } from '@/store/cart'

const cartStore = useCartStore();

const pageHeaderStore = usePageHeaderStore()
pageHeaderStore.setOptions({
  title: 'Fruits'
})

const products = ref([
 
  {
    "id": 1,
    "weight": 0.3,
    "category_id": 2,
    "slug": "apples",
    "quantity": 20,
    "name": "Apples",
    "image_url": "https://images.unsplash.com/photo-1569870499705-504209102861?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80",
    "description": "Fresh apples from local farms",
    "price": 1.99
  },
  {
    "id": 2,
    "weight": 0.3,
    "category_id": 2,
    "slug": "oranges",
    "quantity": 20,
    "name": "Oranges",
    "image_url": "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    "description": "Fresh oranges from local farms",
    "price": 1.99
  },
  {
    "id": 3,
    "weight": 0.3,
    "category_id": 2,
    "slug": "peaches",
    "quantity": 20,
    "name": "Peaches",
    "image_url": "https://images.unsplash.com/photo-1629226182720-f0a169fc9a8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    "description": "Fresh peaches from local farms",
    "price": 1.99
  },
  {
    "id": 4,
    "weight": 0.3,
    "category_id": 2,
    "slug": "strawberries",
    "quantity": 20,
    "name": "Strawberries",
    "image_url": "https://images.unsplash.com/photo-1543158181-e6f9f6712055?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    "description": "Fresh strawberries from local farms",
    "price": 1.99
  },
  {
    "id": 5,
    "weight": 0.3,
    "category_id": 2,
    "slug": "apricots",
    "quantity": 20,
    "name": "Apricots",
    "image_url": "https://images.unsplash.com/photo-1592681814168-6df0fa93161b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    "description": "Fresh apricots from local farms",
    "price": 1.99
  },
  {
    "id": 6,
    "weight": 0.3,
    "category_id": 2,
    "slug": "bananas",
    "quantity": 20,
    "name": "Bananas",
    "image_url": "https://images.unsplash.com/photo-1603833665858-e61d17a86224?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=654&q=80",
    "description": "Fresh bananas from local farms",
    "price": 1.99
  },
  {
    "id": 7,
    "weight": 0.3,
    "category_id": 2,
    "slug": "black-berries",
    "quantity": 20,
    "name": "Black Berries",
    "image_url": "https://images.unsplash.com/photo-1562845029-d1b530d4cfd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    "description": "Fresh black berries from local farms",
    "price": 1.99
  },
  {
    "id": 8,
    "weight": 0.3,
    "category_id": 2,
    "slug": "raspberries",
    "quantity": 20,
    "name": "Raspberries",
    "image_url": "https://images.unsplash.com/photo-1577069861033-55d04cec4ef5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
    "description": "Fresh raspberries from local farms",
    "price": 1.99
  }
]);

</script>

<template>
  <CardGrid :objects="products">
    <template v-slot="{ object }">
      <div class="flex justify-between items-end">
        <div>
          <div class="text-2xl">
            {{ object.name }} 
          </div>
          <div>${{ object.price }}</div>
        </div>
        <el-button circle @click="cartStore.add(object)" :icon="Plus" type="primary"></el-button>
      </div>
    </template>
  </CardGrid>
</template>
