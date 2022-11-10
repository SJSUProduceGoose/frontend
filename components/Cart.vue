<script setup>
import { ElCard } from 'element-plus'

const props = defineProps({
  objects: Array,
  objectKey: null,
})

const getObject = (obj) => {
  if (props.objectKey === null) {
    return obj
  }

  return obj[props.objectKey]
}

</script>

<template>
  <div class="card-grid pa-4">
    <el-card 
      v-for="object in props.objects" :key="getObject(object).id"
      class="ma-4"
      shadow="hover"
      :body-style="{ padding: '0px' }"
    >
      <img
        class="w-full h-60 object-cover"
        :src="getObject(object).image_url"
        :alt="getObject(object).name"
      />
      <div class="p-3">
        <slot :object="object"></slot>
      </div>
  </el-card>
  </div>
</template>

<style scoped lang="scss">
.card-grid {
  display: grid;
  
  margin: auto;
  max-width: 1500px;

  grid-template-columns: repeat(1, 1fr);
  width: 100%;
}

@media screen and (max-width: 1500px) {
  .card-grid {
    max-width: 1100px;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: auto;
  }
}

@media screen and (max-width: 1200px) {
  .card-grid {
    max-width: 800px;
    grid-template-columns: repeat(1, 1fr);
  }
}

@media screen and (max-width: 800px) {
  .card-grid {
    max-width: 500px;
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
