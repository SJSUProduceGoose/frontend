<script setup>
import { ElButton, ElInputNumber } from 'element-plus'
import { Plus } from '@element-plus/icons-vue'
import { useCartStore } from '@/store/cart'

const cartStore = useCartStore();

const route = useRoute()
const { data } = await useApi(`/category/${route.params.slug}?expand=products`, {
  key: `category:${route.params.slug}`,
})

</script>
<template>
  <div class="content px-4">
    <PageHeader :title="data.name"/>
    <CardGrid :objects="data.products">
      <template v-slot="{ object }">
        <div class="relative flex justify-between items-end">
          <div>
            <div class="text-2xl">
              {{ object.name }}
            </div>
            <div>${{ object.price }}</div>
            <div class="flex mt-1.5">
            </div>
            <div class="flex mt-2">
            </div>
            </div>
            <div class="absolute bottom-0 right-0">

              <el-button circle @click="cartStore.add(object)" :icon="Plus" type="primary"></el-button>
            </div>
          </div>
      </template>
    </CardGrid>
  </div>
</template>
