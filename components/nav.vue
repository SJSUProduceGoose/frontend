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
      style="width: 100%;flex-direction: space-between;position: absolute; left: 0; top: 0;"
      :default-active="activeIndex"
      mode="horizontal"
      router
    >
      <NuxtLink custom to="/" v-slot="{ navigate }">
        <div @click="navigate" class="header-logo">
          <h3>OFS Farms</h3> 
        </div> 
      </NuxtLink>
      <el-menu-item index="/shop">Shop</el-menu-item>
      <el-menu-item v-if="userStore.user === null" index="/login">Login</el-menu-item>
      <el-menu-item v-else index="/account">Account</el-menu-item>
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

<style scoped lang="scss">
.header-logo {
  padding: 0 1rem;
  display: flex;
  align-items: center;

  h3 {
    margin: 0;
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--pg-color-primary);
  }

  cursor: pointer;
}
</style>