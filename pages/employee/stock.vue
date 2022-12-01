<script setup>
import { ElSelect, ElOption, ElButton, ElInputNumber } from 'element-plus';

import { ref } from 'vue'

definePageMeta({
  middleware: ['auth-employee']
})

const value = ref('')

const products = ref([])
let category = null
const show = ref(true)

const productResponse = async () => {
  category = await useApi(`/category/${value.value}?expand=products`, {
    key: `category:${value.value}`
  })
  products.value = category.data.value.products

  show.value = false
}

const { data } = await useApi('/category/')

async function updateProduct(product) {
  product.loading = true;
  await $api(`/product/${product.id}`, {
    method: 'PATCH',
    body: {
      quantity: product.quantity,
      price: product.price,
    }
  })
  product.loading = false;
  category.refresh() 
}
</script>
  
<template>
  <div class="content px-4">
    <PageHeader title="Stock" :breadcrumbs="[
        {
          title: 'Employee',
          to: '',
        },
        {
          title: 'Stock',
          to: '/employee/stock',
        }
      ]"/>
    <div>
      <ClientOnly>
        <p class="ml-2.5 mt-3 text-[#808080]">
          Choose a category to see the products that you want to change the price or stock of.
        </p>
        <el-select v-model="value" @change="productResponse()" class="m-2" placeholder="Select Category" size="large">
          <el-option v-for="item in data.items" :key="item.id" :label="item.name" :value="item.slug" />
        </el-select>
      </ClientOnly>

      <div v-if="show" class="flex">
        <img id="goose" src="~/assets/img/produce-goose.png" alt="Produce Goose" class="w-150 h-150 mt-25 ml-90">
        <b class="mt-65 font-sans text-pg-primary text-2xl">Welcome!
          <br>
          Choose a category to start :)
        </b>
      </div>

      <div>
        <CardGrid :objects="products">
          <template v-slot="{ object }">
            <div class="flex justify-between items-end">
              <div>
                <div class="text-2xl">
                  {{ object.name }}
                </div>
                <div>${{ object.price }}</div>
                <div class="flex mt-1.5">
              <h1 class="mr-2 font-semibold mt-.7">Stock</h1>
              <ElInputNumber v-model="object.quantity" :min="0"></ElInputNumber>
              </div>
              <div class="flex mt-2">
                <h1 class="mr-2.7 font-semibold mt-.7">Price</h1> 
                <ElInputNumber v-model="object.price" :min="0"></ElInputNumber>
              </div>
              </div>
              <el-button @click="updateProduct(object)" type="primary" :loading="object.loading">Save</el-button>
      
            </div>
          </template>
        </CardGrid>
      </div>
    </div>
  </div>
</template>
  