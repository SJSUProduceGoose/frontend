<script setup>
import { ElPopover, ElProgress, ElButton, ElDrawer } from 'element-plus'
import { useUserStore } from "@/store/user";
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

function goTo(path) {
  navigateTo(path)
  cartStore.visible = false
}
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
        <template v-if="userStore.isLoggedIn">
          <Cart v-if="(cartStore.itemCount > 0)" :objects="cartStore.items">
            <template v-slot="{ product, item }">
              <CartItem :product="product" :item="item" />
            </template>
          </Cart>
          <GooseResult v-else title="Hey there!" sub-title="Add some items to your cart to proceed with checkout!" class="m-auto">
            <el-button type="default" @click="cartStore.toggleVisibility">Close</el-button>
          </GooseResult>
        </template>
        <div v-else class="w-full h-full flex items-center justify-center">
          <GooseResult
            type="empty"
            title="Hold up!"
            sub-title="You must be logged to use the cart feature."
          >
            <el-button type="primary" @click="goTo('/login')">Login</el-button>
            <div class="my-3 text-sm" style="color: var(--el-text-color-regular);">or</div>
            <el-button type="default" @click="goTo('/register')">Register</el-button>
          </GooseResult>
        </div>
        <template #footer>
          <div class="flex flex-col w-full p-3">
            <div>
              <el-popover
                placement="top"
                title="Free Shipping"
                :width="300"
                trigger="hover"
                :content="`Available for orders under ${FREE_SHIPPING_THRESHOLD} pounds`"
              >
                <template #reference>
                  <el-button v-if="!isFreeShipping" type="danger" size="small" class="w-full">Ineligible for Free Shipping ({{ cartStore.totalWeight.toFixed(2) }} lbs)</el-button>
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
  }

  .el-drawer__footer {
    border-top: solid 1px var(--el-menu-border-color);
  }

  .el-drawer__header, .el-drawer__footer {
      @apply shadow-md z-10;
      
  }

  .el-drawer__body {
    background-color: #ECECEC;
  }
}
</style>