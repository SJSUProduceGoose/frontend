<script setup>
import { ID_INJECTION_KEY, ElDialog, ElButton } from 'element-plus'
import { useCartStore } from "@/store/cart";
import CartSidebar from "@/components/CartSidebar";

provide(ID_INJECTION_KEY, {
  prefix: 100,
  current: 0,
})

const cartStore = useCartStore();

function chooseLogin(navigate) {
  cartStore.displaySignupPrompt = false;
  navigate()
}

function continueWithoutLogin(callback) {
  cartStore.displaySignupPrompt = false
}

cartStore.fetchCart();
</script>

<template>
  <div>
    <NuxtLoadingIndicator color="#ff7800" :height="3"/>
    <ClientOnly>
      <el-dialog
        v-model="cartStore.displaySignupPrompt"
        title="Join us!"
      >
        <span>Login to add and reserve items in your cart for a smooth checkout experience.</span>
        <template #footer>
          <span class="dialog-footer">
            <el-button @click="continueWithoutLogin">Later</el-button>
            <NuxtLink custom to="/login" v-slot="{ navigate }">
              <el-button type="primary" @click="chooseLogin(navigate)">Login</el-button>
            </NuxtLink>
          </span>
        </template>
      </el-dialog>
      <el-dialog
        v-model="cartStore.displayOutOfStock"
        title="Out of stock :("
      >
        <span>Sorry, we will be restocking this product soon. Thank you for your patience.</span>
      </el-dialog>
    </ClientOnly>
    <NavigationBar/>
    <NuxtPage/>
    <CartSidebar/>
  </div>
</template>