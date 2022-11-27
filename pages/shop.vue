<script setup>
import { ElButton } from 'element-plus'
import { ArrowRightBold } from '@element-plus/icons-vue'
import { usePageHeaderStore } from '@/store/pageHeader'

const pageHeaderStore = usePageHeaderStore();

pageHeaderStore.setOptions({
  title: 'Categories'
})

const { data }= await useApi('/category/')

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
