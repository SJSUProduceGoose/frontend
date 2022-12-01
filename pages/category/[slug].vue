<script setup>
import { ElButton } from 'element-plus'
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
    <PageHeader :title="data.name" :breadcrumbs="[
        {
          title: 'Landing',
          to: '/',
        },
        {
          title: 'Shop',
          to: '/shop',
        },
        {
          title: data.name,
          to: route.fullPath,
        }
      ]"/>
    <CardGrid :objects="data.products">
      <template v-slot="{ object }">
        <div class="relative flex justify-between items-end">
          <div>
            <div class="text-2xl">
              {{ object.name }}
            </div>
            <div>${{ object.price.toFixed(2) }} ({{ object.weight.toFixed(2) }} lbs)</div>
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
