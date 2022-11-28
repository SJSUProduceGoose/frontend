<script setup>
import { ElButton } from 'element-plus'
import { useCartStore } from '@/store/cart'

definePageMeta({
  middleware: ['auth-customer']
})


const cartStore = useCartStore();


const intToStatus = [
  'Cart',
  'Ordered',
  'Out for Delivery',
  'Delivered',
];

const { data: page } = await useApi(`/order/`)

function goToDetails(id) {
  navigateTo(`/orders/${id}`)
}

</script>
<template>
  <div class="content px-4">
    <PageHeader title="My Orders"/>
    <div class="m-auto max-w-200 flex flex-col">
      <div v-for="order in page.items" :key="order.id" class="flex w-full flex-col mb-5 shadow-sm rounded border border-slate-300 overflow-hidden">
        <div class="bg-slate:50 pa-3">
          <table class="w-full">
            <thead>
              <tr>
                <td class="color-gray-800 text-sm font-600">Order Placed</td>
                <td class="color-gray-800 text-sm font-600">Total</td>
                <td class="color-gray-800 text-sm font-600">Status</td>
                <td class="color-gray-800 text-sm font-600">Items</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{{ new Date(`${order.updated_at}Z`).toLocaleDateString() }}</td>
                <td>${{ order.amount_total.toFixed(2) }}</td>
                <td>{{ intToStatus[order.status] }}</td>
                <td>{{ order.items.length }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="flex w-full flex-row pa-3 bg-slate:10">
          <div class="mb-3 flex-1 mt-3">
            <div v-for="item in order.items" :key="item.id" class="flex flex-row">
              <div class="flex justify-between w-full mb-3">
                <div>
                  <img rel="preload" :src="item.product.image_url" :alt="`${item.product.name} Image`" class="h-20 w-20 object-cover rounded-md shadow-md">
                </div>
                <div class="w-100">
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
          <div class="flex flex-col ml-4 pt-3">
            <div class="w-full mb-2">
              <el-button class="w-full" @click="goToDetails(order.id)">Details</el-button>
            </div>
            <div class="w-full mb-2">
              <el-button class="w-full" disabled>Order Again</el-button>
            </div>
            <div class="w-full mb-2">
              <el-button class="w-full" disabled>Write Review</el-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
