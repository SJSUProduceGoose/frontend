<script setup>
import { ElButton, ElPageHeader } from 'element-plus'
import { ArrowRightBold } from '@element-plus/icons-vue'
import { usePageHeaderStore } from '@/store/pageHeader'

const pageHeaderStore = usePageHeaderStore();

pageHeaderStore.setOptions({
  title: 'Categories'
})

const categories = ref([
  {
    id: 1,
    name: 'Vegatables',
    slug: '/category/vegatables',
    image_url: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  },
  {
    id: 2,
    name: 'Fruits',
    slug: '/category/fruits',
    image_url: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  },
  {
    id: 3,
    name: 'Nuts & Seeds',
    slug: '/category/nuts-seeds',
    image_url: 'https://images.unsplash.com/photo-1543208541-0961a29a8c3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  },
  {
    id: 4,
    name: 'Grains',
    slug: '/category/grains-nuts',
    image_url: 'https://images.unsplash.com/photo-1623066798929-946425dbe1b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  },
  {
    id: 5,
    name: 'Dairy & Eggs',
    slug: '/category/dairy-eggs',
    image_url: 'https://images.unsplash.com/photo-1617049092088-8771a80edde2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
  },
  {
    id: 6,
    name: 'Meats',
    slug: '/category/meats',
    image_url: 'https://images.unsplash.com/photo-1632154023554-c2975e9be348?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
  },
  {
    id: 7,
    name: 'Spices',
    slug: '/category/spices',
    image_url: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  },
  {
    id: 8,
    name: 'Supplements',
    slug: '/category/supplements',
    image_url: 'https://images.unsplash.com/photo-1627467959547-8e44da7aa00a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
  },
])
</script>

<template>
  <CardGrid :objects="categories">
    <template v-slot="{ object }">
      <div class="flex justify-between items-center">
        <span>{{ object.name }}</span>
        <NuxtLink :to="object.slug">
          <el-button circle :icon="ArrowRightBold" bg="true" type="primary"/>
        </NuxtLink>
      </div>
    </template>
  </CardGrid>
</template>
