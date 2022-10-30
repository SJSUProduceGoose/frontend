<script setup>
import { useUserStore } from "@/store/user";

const username = ref('jeff.bezos@sjsu.edu')
const password = ref('superuser')
const userStore = useUserStore()
const router = useRouter()

async function onSubmit(e) {
  e.preventDefault();

  const formData = new FormData()
  
  formData.append('username', username.value)
  formData.append('password', password.value)

  try {
    const response = await useApi('/auth/token/', {
      method: 'POST',
      body: formData
    })
    userStore.setWithUserToken(response.access_token)
    router.push('/shop')
  } catch (error) {
    // TODO: nicer notifications
    alert(error.data.detail);
  }
}
</script>

<template>
  <div class="container">
    <form class="card p-4" @submit="onSubmit">
        <h3 class="mb-4">Login</h3>
        <div class="mb-3">
          <label for="username" class="form-label">Username</label>
          <input v-model="username" autofocus type="text" class="form-control" id="username" name="username">
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input v-model="password" type="password" class="form-control" id="password" name="password" aria-describedby="password">
        </div>
        <button type="submit" class="btn btn-primary mb-3 w-100">Submit</button>
        <small>
          <div class="text-center">
            New here?
            <NuxtLink href="/register" class="link-secondary">
              Register
            </NuxtLink>
          </div>
        </small>
      </form>
  </div>
</template>

<style>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
.card {
  width: 90%;
  max-width: 500px;
}

.btn-primary {
  background-color: rgb(23, 162, 255);
  border-color: rgb(23, 162, 255);
}
.btn-primary:hover {
  background-color: rgb(0 153 255);
  border-color: rgb(0 153 255);
}
</style>