<script setup>
import { ElNotification, ElResult, ElButton, ElTimeline, ElTimelineItem, ElSkeleton, ElSkeletonItem } from 'element-plus'

import "leaflet/dist/leaflet.css"
import { LMap, LMarker, LTileLayer } from "@vue-leaflet/vue-leaflet";

const url = ref('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
const attribution = ref('&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors');
const zoom = ref(15)

definePageMeta({
  middleware: ['auth-customer']
})

const intToStatus = [
  'Cart',
  'Ordered',
  'Out for Delivery',
  'Delivered',
];

const router = useRouter()
const route = useRoute()

if (route.query.stripe === 'success') {
  if (process.client) {
    ElNotification({
      message: 'Payment Successful',
      type: 'success',
      duration: 5000
    })
    router.replace({ query: {} })
  }
}

const { data: order } = await useApi(`/order/${route.params.id}/`)

const center = computed(() => [order.value.latitude, order.value.longitude])
const markerLatLng = computed(() => [order.value.latitude, order.value.longitude])

const renderMap = computed(() => order.value.latitude && order.value.longitude)

const activities = [
  {
    content: 'Cart Created',
    timestamp: new Date(`${order.value.created_at}Z`).toLocaleTimeString()
  },
  {
    content: 'Order Placed',
    timestamp: new Date(`${order.value.updated_at}Z`).toLocaleTimeString()
  },
  {
    content: 'Out For Delivery',
    timestamp: 'TBD',
  },
  {
    content: 'Delivered',
    timestamp: 'TBD',
  },
]

</script>
<template>
  <div class="content px-4">
    <PageHeader :title="`Order #${order.id}`"/>
    <div class="m-auto max-w-200 flex flex-col">
      <div class="flex w-full flex-col mb-5 shadow-sm rounded border border-slate-300 overflow-hidden">
        <div class="bg-slate:50 pa-3">
          <div class="w-full">
            <table class="w-full">
              <thead>
                <tr>
                  <td class="color-gray-800 text-sm font-600">Order Placed</td>
                  <td class="color-gray-800 text-sm font-600">Total</td>
                  <td class="color-gray-800 text-sm font-600">Subtotal</td>
                  <td class="color-gray-800 text-sm font-600">Tax</td>
                  <td class="color-gray-800 text-sm font-600">Shipping</td>
                  <td class="color-gray-800 text-sm font-600">Status</td>
                  <td class="color-gray-800 text-sm font-600">Items</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{{ new Date(`${order.updated_at}Z`).toLocaleDateString() }}</td>
                  <td>${{ order.amount_total.toFixed(2) }}</td>
                  <td>${{ order.amount_subtotal.toFixed(2) }}</td>
                  <td>${{ order.amount_tax.toFixed(2) }}</td>
                  <td>${{ order.amount_shipping.toFixed(2) }}</td>
                  <td>{{ intToStatus[order.status] }}</td>
                  <td>{{ order.items.length }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="w-full mt-6 flex items-center">
            <div class="w-40">
              <el-timeline>
                <el-timeline-item
                  v-for="(activity, index) in activities"
                  :key="index"
                  :timestamp="activity.timestamp"
                >
                  {{ activity.content }}
                </el-timeline-item>
              </el-timeline>
            </div>
            <div class="w-full h-60 pl-4 flex flex-col items-center justify-center z-1">
              <ClientOnly v-if="renderMap">
                <l-map 
                  class="w-full h-full"
                  :options="{zoomControl: false}"
                  :zoom="zoom"
                  :center="center"
                >
                  <l-marker :lat-lng="markerLatLng" ></l-marker>
                  <l-tile-layer
                    :url="url"
                    :attribution="attribution"
                  />
                </l-map>
                <template #fallback>
                  <el-skeleton style="width: 100%" loading animated/>
                </template>
              </ClientOnly>
              <div v-else>
                 <el-result
                    icon="warning"
                    title="Whoops!"
                    sub-title="Coordinates could not be determined for this order."
                  >
                  </el-result>
              </div>
              <div class="w-full">
                <span class="color-gray-800 text-sm font-600">Address: </span> {{ order.address }}
              </div>
            </div>
          </div>
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
