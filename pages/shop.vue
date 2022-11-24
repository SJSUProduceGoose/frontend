<script setup>
import { ElButton, ElPageHeader } from 'element-plus'
import { ArrowRightBold } from '@element-plus/icons-vue'
import { usePageHeaderStore } from '@/store/pageHeader'
import { useCartStore } from '@/store/cart'

const pageHeaderStore = usePageHeaderStore();

pageHeaderStore.setOptions({
  title: 'Categories'
})
const config = useRuntimeConfig();
const { data }= await useFetch('/category/', {

  baseURL: config.public.BASE_URL,
})

</script>

<template>
  <CardGrid :objects="data.items">
    <template v-slot="{ object }">
      <div class="flex justify-between items-center">
        <span>{{ object.name }}</span>
        <NuxtLink :to="`/category/${object.slug}`">
          <el-button circle :icon="ArrowRightBold" type="primary" />
        </NuxtLink>
      </div>
    </template>
  </CardGrid>
</template>
