<script setup>
import { ElButton, ElInput, ElIcon, ElMenu, ElMenuItem, } from 'element-plus'
import { Search } from '@element-plus/icons-vue'
import { useUserStore } from "@/store/user";

const router = useRouter()
const query = ref('');

function navigateToSearch() {
  router.push({ path: '/search', query: { q: query.value } })
  // const { items } = await $fetch(`https://produce-goose-backend-stg.herokuapp.com/search/?q=${input.value}`)
}

const userStore = useUserStore()
</script>

<template>
    <el-menu
      class="navigation-menu"
      mode="horizontal"
      ellipsis
      router
    >
      <NuxtLink custom to="/" v-slot="{ navigate }">
        <div @click="navigate" class="flex items-center justify-center px-3 cursor-pointer">
          <span class="whitespace-nowrap text-2xl font-bold text-pg-primary">OFS Farms</span> 
        </div> 
      </NuxtLink>
      <el-menu-item index="/shop">Shop</el-menu-item>
      <template v-if="userStore.user === null">
        <el-menu-item index="/login">Login</el-menu-item>  
      </template>
      <template v-else>
        <el-menu-item index="/account">Account</el-menu-item>
        <el-menu-item index="/orders">Orders</el-menu-item>
      </template>
      
      <div style="display: flex; align-items: center;padding: 0 1rem;">
        <div>
        <el-input
          style="max-width: px;"
          v-model="query"
          placeholder="Search"
        >
          <template #append>
            <el-button
              @click="navigateToSearch"
              :style="{
                borderBottomLeftRadius: '0',
                borderTopLeftRadius: '0',
                height: '100%',
                backgroundColor: 'var(--pg-color-primary)',
              }"
            ><el-icon class="el-icon--center" color="white"><Search/></el-icon></el-button>
          </template>
        </el-input>
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