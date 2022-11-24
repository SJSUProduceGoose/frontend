<script setup>
import { ElButton, ElInput, ElIcon, ElMenu, ElMenuItem, ElDrawer, ElBadge } from 'element-plus'
import { Search, ShoppingCart } from '@element-plus/icons-vue'
import { useUserStore } from "@/store/user";
import { ref } from 'vue'
import { useCartStore } from '@/store/cart'

const cartStore = useCartStore();
const router = useRouter()
const query = ref('');

function navigateToSearch() {
  router.push({ path: '/search', query: { q: query.value } })
  // const { items } = await $fetch(`https://produce-goose-backend-stg.herokuapp.com/search/?q=${input.value}`)
}

const userStore = useUserStore()

const formattedPrice = computed(() => {
  return cartStore.totalPrice.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
})

const formattedWeight = computed(() => {
  return cartStore.totalWeight.toLocaleString('en-US', { style: 'unit', unit: 'pound', unitDisplay: 'short' })
})

async function onCheckout() {
  const response = await useApi('/cart/checkout/', {
    method: 'POST',
  })

  window.location.href = response.url
}

</script>

<template>
  <el-menu class="navigation-menu" mode="horizontal" ellipsis router>
      <div class="flex items-center justify-center px-3 cursor-pointer">
        <NuxtLink to ="/"><span class="whitespace-nowrap text-2xl font-bold text-pg-primary">OFS Farms</span></NuxtLink>
        <client-only>
          <el-drawer v-model="cartStore.visible" :show-close="false">
           <template #header="{ close, titleId, titleClass }">
              <b :id="titleId" :class="titleClass">ProduceGoose Cart </b>
              <b :id="titleId" :class="titleClass"> Price: {{formattedPrice}} </b>
              <b :id="titleId" :class="titleClass"> Weight: {{formattedWeight}} </b>
              <el-button type="primary" @click="onCheckout">
                Checkout
              </el-button>
            </template>
           <Cart :objects="cartStore.items">
              <template v-slot="{ product, item }">
                <CartItem :product="product" :item="item" />
              </template>
            </Cart>
          </el-drawer>
        </client-only>
      </div>
    <el-menu-item index="/shop">Shop</el-menu-item>
    <template v-if="userStore.user === null">
      <el-menu-item index="/login">Login</el-menu-item>
    </template>
    <template v-else>
      <el-menu-item index="/account">Account</el-menu-item>
      <el-menu-item index="/orders">Orders</el-menu-item>
      <el-menu-item v-if="userStore.user.is_employee || userStore.user.is_superuser" index="/employee">Employee</el-menu-item>
    </template>
    <div style="display: flex; align-items: center;padding: 0 1rem;">
      <div>
        <el-input style="max-width: px;" v-model="query" placeholder="Search">
          <template #append>
            <el-button @click="navigateToSearch" :style="{
              borderBottomLeftRadius: '0',
              borderTopLeftRadius: '0',
              height: '100%',
              backgroundColor: 'var(--pg-color-primary)',
            }">
              <el-icon color="white">
                <Search />
              </el-icon>
            </el-button>
          </template>
        </el-input>
        
      </div>
      <div class="absolute right-5">
        <el-badge :value="cartStore.itemCount">
          <el-button circle type="primary" @click="cartStore.toggleVisibility" >
            <el-icon color="white">
              <ShoppingCart />
            </el-icon>
          </el-button>
        </el-badge>
      </div>
    </div>
  </el-menu>
</template>

<style lang="pcss">
.navigation-menu {
  @apply w-full fixed top-0 left-0 z-10;
}

.navigation-logo {
  @apply flex items-center justify-center px-3 cursor-pointer;
}

b {
  font-size: 60px;
}
</style>