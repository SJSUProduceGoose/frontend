<script setup>
import { ElNotification, ElButton } from 'element-plus'
import { ArrowRightBold } from '@element-plus/icons-vue'
import { useCartStore } from '@/store/cart'

const { data }= await useApi('/category/')

const router = useRouter()
const route = useRoute()
const cartStore = useCartStore()

onMounted(() => {
  const expandCart = route.query.expand === 'cart';
  const notify = route.query.stripe === 'canceled';

  if (expandCart) {
    cartStore.toggleVisibility()
  }
  
  if (notify) {
    nextTick().then(() => {
      ElNotification({
        title: 'Payment Canceled',
        message: 'Your payment was canceled. Please try again.',
        type: 'warning',
        duration: 8000,
        position: route.query.expand === 'cart' ? 'top-left' : 'top-right',
      })
    })
  }
  
  router.replace({
      query: {
        ...route.query,
        stripe: undefined,
        expand: undefined,
      }
    })
})

</script>

<template>
  <div class="content px-4">
    <PageHeader title="Categories" :breadcrumbs="[
        {
          title: 'Landing',
          to: '/',
        },
        {
          title: 'Shop',
          to: '/shop',
        }
      ]"/>
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
