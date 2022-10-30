<script setup>
import { useUserStore } from "@/store/user";

const firstname = ref('Test')
const lastname = ref('User')
const username = ref('test.user@sjsu.edu')
const password = ref('testuser')

const userStore = useUserStore()
const router = useRouter()

async function onSubmit(e) {
  e.preventDefault();

  const formData = new FormData()

  // TODO: json or form data?
  formData.append('firstname', firstname.value)
  formData.append('lastname', lastname.value)
  formData.append('username', username.value)
  formData.append('password', password.value)

  try {
    // TODO: verify the endpoint url
    const response = await useApi('/auth/register/', {
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
        <h3 class="mb-4">Register</h3>
        <div class="mb-3">
          <label autofocus for="firstname" class="form-label">First Name</label>
          <input type="text" disabled class="form-control" id="firstname" name="firstname" aria-describedby="firstnameHelp">
        </div>
        <div class="mb-3">
          <label autofocus for="lastname" class="form-label">Last Name</label>
          <input type="text" disabled class="form-control" id="lastname" name="lastname" aria-describedby="lastnameHelp">
        </div>
        <div class="mb-3">
          <label autofocus for="email" class="form-label">Email</label>
          <input type="text" disabled class="form-control" id="email" name="email" aria-describedby="emailHelp">
          <div id="emailHelp" class="form-text">Must be a valid email you have access to.</div>
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input type="password" disabled  class="form-control" id="password" name="password" aria-describedby="passwordHelp">
          <div id="passwordHelp" class="form-text">Must be between 8 and 255 characters inclusively.</div>
        </div>
        <button type="submit" class="btn btn-primary mb-3 w-100">Submit</button>
        <small>
          <div class="text-center fs-6">
            Already have an accout?
            <NuxtLink href="/login" class="link-secondary">
              Login
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