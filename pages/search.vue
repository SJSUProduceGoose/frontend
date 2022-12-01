<script setup>
import { ElButton, ElResult, ElImage } from 'element-plus'
import { Plus } from '@element-plus/icons-vue'
import { useCartStore } from '@/store/cart'

const cartStore = useCartStore();
const route = useRoute()

definePageMeta({
  key: (route) => route.fullPath,
})

const items = ref([])

const { data, error } = await useApi(`/search/?q=${route.query.q}`, {
  key: `search:${route.query.q}`,
})

items.value = data.value?.items

const isEmpty = computed(() => {
  return error.value !== null ? true : items.value?.length == 0
})
</script>

<template>
  <div class="content px-4">
    <PageHeader :title="`Search: ${route.query.q}`" :breadcrumbs="[
      {
        title: 'Landing',
        to: '/'
      },
      {
        title: 'Shop',
        to: '/shop'
      },
      {
        title: `Search`,
        to: route.fullPath
      }
    ]"  />

    <div v-if="(error !== null)" class="flex">
      <GooseResult title="Oops!" sub-title="There was an error completing your request. Please Try again." class="m-auto"/>
    </div>
    <div v-else-if="isEmpty" class="flex">
      <GooseResult title="This is embarrising..." sub-title="The Goose could not find any results!" class="m-auto">
        <el-button type="default" @click="navigateTo('/shop')">Back</el-button>
      </GooseResult>
    </div>
    <div v-else>
      <CardGrid :objects="items">
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
  </div>
</template>