<script setup>
import { ID_INJECTION_KEY, ElDialog, ElButton } from 'element-plus'
import { useCartStore } from "@/store/cart";

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
  cartStore.continueWithoutLogin()
}

cartStore.fetchCart();
</script>

<template>
  <div>
    <NuxtLoadingIndicator />
    <ClientOnly>
      <el-dialog
        v-model="cartStore.displaySignupPrompt"
        title="Join us!"
      >
        <span>Login to store your cart items between reloads and reserve your stock for a smoother check out experience.</span>
        <template #footer>
          <span class="dialog-footer">
            <el-button @click="continueWithoutLogin">Later</el-button>
            <NuxtLink custom to="/login" v-slot="{ navigate }">
              <el-button type="primary" @click="chooseLogin(navigate)">Login</el-button>
            </NuxtLink>
          </span>
        </template>
      </el-dialog>
    </ClientOnly>
    <NavigationBar/>
    <div class="content px-4">
      <PageHeader/>
      <NuxtPage/>
    </div>
  </div>
</template>

<style scoped>
.content {
  /* 60.5px is the height of the header */
  height: calc(100vh);
  padding-top: 59px;
}
</style>