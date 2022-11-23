<script setup>
import { ElButton, ElInputNumber } from 'element-plus'
import { Plus } from '@element-plus/icons-vue'
import { usePageHeaderStore } from '@/store/pageHeader'
import { useCartStore } from '@/store/cart'


const cartStore = useCartStore();

const pageHeaderStore = usePageHeaderStore()


const config = useRuntimeConfig();
const route = useRoute()
const { data } = await useFetch(`/category/${route.params.slug}?expand=products`, {
  key: `category:${route.params.slug}`,
  baseURL: config.public.BASE_URL,
})



pageHeaderStore.setOptions({
  title: data.value.name
})

console.log(data)

</script>

<template>
  <CardGrid :objects="data.products">
    <template v-slot="{ object }">
      <div class="relative flex justify-between items-end">
        <div>
          <div class="text-2xl">
            {{ object.name }}
          </div>
          <div>${{ object.price }}</div>
          <!-- <div class="mt-1.5">
            <ElInputNumber v-model="object.quantity" :min="0"></ElInputNumber> 
          </div> -->
        </div>
        <div class="absolute bottom-0 right-0">
          <el-button circle @click="cartStore.add(object)" :icon="Plus" type="primary"></el-button>
        </div>
      </div>
    </template>
  </CardGrid>
</template>
