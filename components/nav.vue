<script setup>
import { ElButton, ElInput, ElIcon } from 'element-plus'
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
  <div class="header">
    <div class="title">
      <a class="reglink" href="/">
        OFS Farms
      </a>
    </div>
    <div class="hlinks">
      <ul>
        <li class="hlink-item">
          <NuxtLink to="/shop" class="reglink">
            Shop
          </NuxtLink>
        </li>
        <li class="hlink-item" >
          <NuxtLink v-if="userStore.user === null" to="/login" class="reglink">
             Login
          </NuxtLink>
          <NuxtLink v-else="userStore.user === null" to="/account" class="reglink">
             Account
          </NuxtLink>
        </li>
      
        <li>
          <el-input
            size="large"
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
        </li>   
      </ul>
    </div>
  </div>
</template>

<style scoped>
.header {
  background-color: rgb(23, 162, 255);
  display: flex;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 100;
  min-width: 1400px;
}

* {
  font-family: 'Roboto', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.reglink {
  cursor: default;
  pointer-events: visible;        
  text-decoration: none;
  color: white;
  transition: color 0.2s;
}
.reglink:hover {
  color: var(--pg-color-primary);
}
.title {
  font-size: 40px;
  font-weight: 10px;
  margin-left: 10px;
}

.hlinks {
  margin-left: auto;
  margin-right: 20px;
}

.hlink-item {
  font-size: 25px;
  margin-left: 10px;
  margin-right: 20px;
}
.btn {
  background-color: var(--pg-color-primary);
  padding: 3px; 
}

.mcolor {
  color:white;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  margin-top: 10px;
}

li {
  display: inline-flex;
}

</style>