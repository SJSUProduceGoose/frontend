<script setup>
import { ElPopover, ElProgress, ElButton, ElInput, ElIcon, ElDrawer } from 'element-plus'
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

const isFreeShipping = computed(() => {
  return cartStore.totalWeight >= FREE_SHIPPING_THRESHOLD
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
        <Cart :objects="cartStore.items">
          <template v-slot="{ product, item }">
            <CartItem :product="product" :item="item" />
          </template>
        </Cart>
        <template #footer>
          <div class="flex flex-col w-full p-3">
            <div>
              <el-popover
                placement="top"
                title="Free Shipping"
                :width="200"
                trigger="hover"
                :content="`Avalible for orders over ${FREE_SHIPPING_THRESHOLD} pounds`"
              >
                <template #reference>
                  <el-progress v-if="!isFreeShipping" :percentage="percentageTillFreeShipping">
                    <el-button text>{{ cartStore.totalWeight.toFixed(2) }} / {{ FREE_SHIPPING_THRESHOLD }} lbs</el-button>
                  </el-progress>
                  <el-button v-else type="success" size="small">Free Shipping</el-button>
                </template>
              </el-popover>
            </div>
            <div>
              <el-button type="primary" @click="onCheckout" class="mt-3 w-full">
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