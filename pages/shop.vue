<script setup>
import { ElButton } from 'element-plus'
import { ArrowRightBold } from '@element-plus/icons-vue'

const { data }= await useApi('/category/')

</script>

<template>
  <div class="content px-4">
    <PageHeader title="Categories"/>
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
  </div>
</template>
