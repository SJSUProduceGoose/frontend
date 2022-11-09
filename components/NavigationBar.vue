<script setup>
import { ElButton, ElInput, ElIcon, ElMenu, ElMenuItem, ElDrawer, ElInputNumber } from 'element-plus'
import { Search, ShoppingCart, CircleCloseFilled} from '@element-plus/icons-vue'
import { useUserStore } from "@/store/user";
import { ref } from 'vue'
const router = useRouter()
const query = ref('');
const visible = ref(false)

function navigateToSearch() {
  router.push({ path: '/search', query: { q: query.value } })
  // const { items } = await $fetch(`https://produce-goose-backend-stg.herokuapp.com/search/?q=${input.value}`)
}

const userStore = useUserStore()

const products = ref([
  {
    quantity: 1,
    product: {
      "id": 1,
      "category_id": 2,
      "slug": "apples",
      "quantity": 20,
      "name": "Apples",
      "image_url": "https://images.unsplash.com/photo-1569870499705-504209102861?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80",
      "description": "Fresh apples from local farms",
      "price": 1.99
    }
  },
  {
    quantity: 1,
    product: {
      "id": 2,
      "category_id": 2,
      "slug": "oranges",
      "quantity": 20,
      "name": "Oranges",
      "image_url": "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      "description": "Fresh oranges from local farms",
      "price": 1.99
    }
  },
  {
    quantity: 1,
    product: {
      "id": 3,
      "category_id": 2,
      "slug": "peaches",
      "quantity": 20,
      "name": "Peaches",
      "image_url": "https://images.unsplash.com/photo-1629226182720-f0a169fc9a8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      "description": "Fresh peaches from local farms",
      "price": 1.99
    }
  },
  {
    quantity: 1,
    product: {
      "id": 4,
      "category_id": 2,
      "slug": "strawberries",
      "quantity": 20,
      "name": "Strawberries",
      "image_url": "https://images.unsplash.com/photo-1543158181-e6f9f6712055?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      "description": "Fresh strawberries from local farms",
      "price": 1.99
    }
  },
  {
    quantity: 1,
    product: {
      "id": 5,
      "category_id": 2,
      "slug": "apricots",
      "quantity": 20,
      "name": "Apricots",
      "image_url": "https://images.unsplash.com/photo-1592681814168-6df0fa93161b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      "description": "Fresh apricots from local farms",
      "price": 1.99
    }
  },
  {
    quantity: 1,
    product: {
      "id": 6,
      "category_id": 2,
      "slug": "bananas",
      "quantity": 20,
      "name": "Bananas",
      "image_url": "https://images.unsplash.com/photo-1603833665858-e61d17a86224?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=654&q=80",
      "description": "Fresh bananas from local farms",
      "price": 1.99
    }
  },
  {
    quantity: 1,
    product: {
      "id": 7,
      "category_id": 2,
      "slug": "black-berries",
      "quantity": 20,
      "name": "Black Berries",
      "image_url": "https://images.unsplash.com/photo-1562845029-d1b530d4cfd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      "description": "Fresh black berries from local farms",
      "price": 1.99
    }
  },
  {
    quantity: 1,
    product: {
      "id": 8,
      "category_id": 2,
      "slug": "raspberries",
      "quantity": 20,
      "name": "Raspberries",
      "image_url": "https://images.unsplash.com/photo-1577069861033-55d04cec4ef5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
      "description": "Fresh raspberries from local farms",
      "price": 1.99
    }
}
]);

const num = ref(1)
</script>

<template>
  <el-menu class="navigation-menu" mode="horizontal" ellipsis router>
    <NuxtLink custom to="/" v-slot="{ navigate }">
      <div @click="navigate" class="flex items-center justify-center px-3 cursor-pointer">
        <span class="whitespace-nowrap text-2xl font-bold text-pg-primary">OFS Farms</span>
        <el-button color="#14aeff" @click="visible = true" class="absolute right-5">
          <el-icon class="el-icon--center" :size="28" color="white">
            <ShoppingCart />
          </el-icon>
        </el-button>

        <client-only>
          <el-drawer v-model="visible" :show-close="false">
            <template #header="{ close, titleId, titleClass }">
              <h4 :id="titleId" :class="titleClass">ProduceGoose Cart</h4>
              <el-button type="danger" @click="close">
                <el-icon class="el-icon--left">
                  <CircleCloseFilled />
                </el-icon>
                Close
              </el-button>
            </template>
            <Cart :objects="products" objectKey="product">
              <template v-slot="{ object }">
                <div class="flex justify-between items-end">
                  <div>
                    <div class="text-2xl">
                      {{ object.product.name }} 
                    </div>
                    <div>${{ object.product.price }}</div>
                  </div>
                  <ElInputNumber v-model="object.quantity" :min="1" :max="10"></ElInputNumber>
                </div>
              </template>
            </Cart>
          </el-drawer>
        </client-only>
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
        <el-input style="max-width: px;" v-model="query" placeholder="Search">
          <template #append>
            <el-button @click="navigateToSearch" :style="{
              borderBottomLeftRadius: '0',
              borderTopLeftRadius: '0',
              height: '100%',
              backgroundColor: 'var(--pg-color-primary)',
            }">
              <el-icon class="el-icon--center" color="white">
                <Search />
              </el-icon>
            </el-button>
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