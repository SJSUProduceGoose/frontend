<script setup>
import { ElButton } from 'element-plus'
import { Plus } from '@element-plus/icons-vue'
import { useCartStore } from '@/store/cart'

const cartStore = useCartStore();
const route = useRoute()

definePageMeta({
  key: (route) => route.fullPath,
})

const items = ref([])

const { data } = await useApi(`/search/?q=${route.query.q}`, {
  key: `search:${route.query.q}`,
})




items.value = data.value.items

const isEmpty = computed(() => {
  console.log(items.value.length == 0)
  return items.value.length == 0
})
</script>

<template>
  <div class="content px-4">
    <div v-if="isEmpty" class="flex">
      <img id="goose" src="~/assets/img/produce-goose.png" alt="Produce Goose" class="w-150 h-150 mt-25 ml-70">
        <b class="mt-85 font-sans text-pg-primary text-2xl"> No search results found! </b>
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