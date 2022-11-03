<script setup>
import { ElCard, ElButton, ElPageHeader } from 'element-plus'
import { ArrowLeft } from '@element-plus/icons-vue'
import {
  ArrowRightBold
} from '@element-plus/icons-vue'

const router = useRouter()
const props = defineProps({
  objects: Array
})

const emit = defineEmits(['change', 'delete'])

</script>

<template>
  <div class="card-grid">
    <el-card class="card-grid-card"
      v-for="object in props.objects" :key="object.id"
      shadow="hover"
      :body-style="{ padding: '0px' }"
    >
      <img
        :src="object.image_url"
        :alt="object.name"
      />
      <div class="options">
        <slot :object="object"></slot>
      </div>
  </el-card>
  </div>
</template>

<style scoped lang="scss">
.card-grid-card {
  margin: 1rem;
  img {
    width: 300px;
    height: 200px;
    object-fit: cover;
  }

  .options {
    padding: 14px
  }
}
.card-grid {
  display: grid;
  place-items: center;
  align-content: center;
  justify-content: center;
  
  margin: auto;
    max-width: 1500px;

  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  width: 100%;
}

@media screen and (max-width: 1500px) {
  .card-grid {
    margin: auto;
    max-width: 1100px;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }
}

@media screen and (max-width: 1200px) {
  .card-grid {
    margin: auto;
    max-width: 800px;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
}

@media screen and (max-width: 800px) {
  .card-grid {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
}
</style>