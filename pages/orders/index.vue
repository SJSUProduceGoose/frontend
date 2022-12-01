<script setup>
import { ElIcon, ElButton } from 'element-plus'
import { ArrowRight } from '@element-plus/icons-vue'

definePageMeta({
  middleware: ['auth-customer']
})

const intToStatus = [
  'Cart',
  'Ordered',
  'Out for Delivery',
  'Delivered',
];

const { data: page, error } = await useApi(`/order/`, {
  key: 'order:all'
})

function goToDetails(id) {
  navigateTo(`/orders/${id}`)
}

const isEmpty = computed(() => {
  return error.value !== null ? true : page.value.items.length == 0
})

</script>
<template>
  <div class="content px-4">
    <PageHeader title="My Orders" :breadcrumbs="[
        {
          title: 'Account',
          to: '/account',
        },
        {
          title: 'My Orders',
          to: '/orders',
        }
      ]"/>
    <div v-if="(error !== null)" class="flex">
      <GooseResult title="Oops!" sub-title="There was an error completing your request. Please Try again." class="m-auto"/>
    </div>
    <div v-else-if="isEmpty" class="flex">
      <GooseResult title="Nothing to see here..." sub-title="Place your first order and check back!" class="m-auto">
        <el-button type="primary" @click="navigateTo('/shop')">Shop Now</el-button>
      </GooseResult>
    </div>
    <div v-else class="m-auto max-w-200 flex flex-col">
      <HeaderCard v-for="order in page.items" :key="order.id" class="flex w-full flex-col mb-5">
        <template #header>
          <table class="w-full">
            <thead>
              <tr>
                <td class="color-gray-800 text-sm font-600">Order Placed</td>
                <td class="color-gray-800 text-sm font-600">Total</td>
                <td class="color-gray-800 text-sm font-600">Status</td>
                <td class="color-gray-800 text-sm font-600">Items</td>
                <td class="w-20"></td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{{ new Date(`${order.updated_at}Z`).toLocaleDateString() }}</td>
                <td>${{ order.amount_total.toFixed(2) }}</td>
                <td>{{ intToStatus[order.status] }}</td>
                <td>{{ order.items.length }}</td>
                <td>
                  <div class="w-full mb-2">
                    <el-button class="w-full" @click="goToDetails(order.id)">
                      Details <el-icon class="el-icon--right"><ArrowRight /></el-icon>
                    </el-button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </template>
        <template #body>
          <div class="mb-3 flex-1 mt-3">
            <div v-for="item in order.items" :key="item.id" class="flex flex-row">
              <div class="flex justify-between items-center w-full mb-3">
                <div>
                  <img rel="preload" :src="item.product.image_url" :alt="`${item.product.name} Image`" class="h-15 w-15 object-cover rounded-md shadow-md mr-6">
                </div>
                <div class="w-full">
                  <table class="w-full">
                    <thead>
                      <tr>
                        <td class="color-gray-600 text-sm font-600">Name</td>
                        <td style="width: 100px" class="color-gray-600 text-sm font-600">Amount</td>
                        <td style="width: 40px" class="color-gray-600 text-sm font-600">Qty.</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{{ item.product.name }}</td>
                        <td>${{ item.product.price.toFixed(2) }}</td>
                        <td>{{ item.quantity }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </template>
      </HeaderCard>
    </div>
  </div>
</template>
