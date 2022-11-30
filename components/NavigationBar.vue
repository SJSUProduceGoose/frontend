<script setup>
import { ElBadge, ElButton, ElInput, ElIcon, ElMenu, ElMenuItem } from 'element-plus'
import { Search, ShoppingCart } from '@element-plus/icons-vue'
import { useUserStore } from "@/store/user";
import { useCartStore } from '@/store/cart'

const route = useRoute()

const cartStore = useCartStore();
const userStore = useUserStore()

const query = ref(route.query.q || ''); 

function navigateToSearch() {
  navigateTo({ path: '/search', query: { q: query.value } })
}
</script>

<template>
  <el-menu class="navigation-menu" mode="horizontal" ellipsis router>
      <div class="flex items-center justify-center px-3 cursor-pointer">
        <NuxtLink to ="/"><span class="whitespace-nowrap text-2xl font-bold text-pg-primary">OFS Farms</span></NuxtLink>
      </div>
    <el-menu-item index="/shop">Shop</el-menu-item>
    <template v-if="userStore.user === null">
      <el-menu-item index="/login">Login</el-menu-item>
    </template>
    <template v-else>
      <el-menu-item index="/account">Account</el-menu-item>
      <el-menu-item index="/orders">Orders</el-menu-item>
      <el-menu-item v-if="userStore.user.is_employee || userStore.user.is_superuser" index="/employee/stock">Stock</el-menu-item>
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
</style>