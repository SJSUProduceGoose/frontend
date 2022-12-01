<script setup>
import { ElPopover, ElProgress, ElButton, ElResult, ElInput, ElIcon, ElDrawer } from 'element-plus'
import { Search, ShoppingCart } from '@element-plus/icons-vue'
import { useUserStore } from "@/store/user";
import { ref } from 'vue'
import { useCartStore } from '@/store/cart'

const cartStore = useCartStore();

const userStore = useUserStore()

const formattedPrice = computed(() => {
  return cartStore.totalPrice.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
})

const FREE_SHIPPING_THRESHOLD = 20;

const percentageTillFreeShipping = computed(() => {
  const percentage = cartStore.totalWeight / FREE_SHIPPING_THRESHOLD * 100
  return percentage > 100 ? 100 : percentage
})

const percentageStatus = computed(() => {
  if (percentageTillFreeShipping.value < 50) {
    return 'success'
  } else if (percentageTillFreeShipping.value < 90) {
    return 'warning'
  }

  return 'exception'
})

const isFreeShipping = computed(() => {
  return cartStore.totalWeight < FREE_SHIPPING_THRESHOLD
})

async function onCheckout() {
  const response = await $api('/cart/checkout/', {
    method: 'POST',
  })

  window.location.href = response.url
}
</script>

<template>
  <client-only>
    <div class="cart-drawer">
      <el-drawer v-model="cartStore.visible" :show-close="false" :size="400">
        <template #header>
          <div class="flex flex-col w-full p-3">
            <div class="flex justify-between items-center">
              <span>My Cart ({{ cartStore.itemCount }})</span> <b>{{formattedPrice}}</b>
            </div>
          </div>
        </template>
        <Cart v-if="userStore.isLoggedIn" :objects="cartStore.items">
          <template v-slot="{ product, item }">
            <CartItem :product="product" :item="item" />
          </template>
        </Cart>
        <div v-else class="w-full h-full flex items-center justify-center">
          <el-result
            icon="warning"
            title="Hold up!"
            sub-title="You need to be logged in the cart cart feature."
          >
            <template #extra>
              <el-button type="primary" @click="navigateTo('/login')">Login</el-button>
              <div class="my-3 text-sm" style="color: var(--el-text-color-regular);">or</div>
              <el-button type="default" @click="navigateTo('/register')">Register</el-button>
            </template>
          </el-result>
        </div>
        <template #footer>
          <div class="flex flex-col w-full p-3">
            <div>
              <el-popover
                placement="top"
                title="Free Shipping"
                :width="200"
                trigger="hover"
                :content="`Avalible for orders under ${FREE_SHIPPING_THRESHOLD} pounds`"
              >
                <template #reference>
                  <el-button v-if="!isFreeShipping" type="danger" size="small" class="float-left">Ineligible for Free Shipping ({{ cartStore.totalWeight.toFixed(2) }} lbs)</el-button>
                  <el-progress v-else :percentage="percentageTillFreeShipping" :status="percentageStatus" >
                    <el-button text>{{ cartStore.totalWeight.toFixed(2) }} / {{ FREE_SHIPPING_THRESHOLD }} lbs</el-button>
                  </el-progress>
                </template>
              </el-popover>
            </div>
            <div>
            <el-button type="primary" @click="onCheckout" class="mt-3 w-full" :disabled="cartStore.itemCount == 0">
              Checkout
            </el-button>
            </div>
          </div>
        </template>
      </el-drawer>
    </div>
  </client-only>
</template>

<style lang="pcss">
.cart-drawer {
  .el-drawer {
      --el-drawer-padding-primary: 0px;
  }

  .el-drawer__header {
    margin-bottom: 0px;
    border-bottom: solid 1px var(--el-menu-border-color);
    /* @apply shadow-lg; */
  }

  .el-drawer__footer {
    border-top: solid 1px var(--el-menu-border-color);
    /* @apply shadow-lg; */
  }

  .el-drawer__header, .el-drawer__footer {
      @apply shadow-md z-10;
      
  }

  .el-drawer__body {
    background-color: #ECECEC;
  }
}
</style>