<script setup>
import { ElButton, ElInput, ElForm, ElFormItem, ElLink, ElAlert, ElNotification } from 'element-plus'
import { useUserStore } from "@/store/user";

const showError = ref(false)
const errorText = ref('')

const form = reactive({
  username: '',
  password: '',
})

const userStore = useUserStore()
const router = useRouter()

async function onSubmit(e) {
  e.preventDefault();

  const formData = new FormData()
  
  formData.append('username', form.username)
  formData.append('password', form.password)

  try {
    const response = await $api('/login', {
      baseURL: '/bridge',
      method: 'POST',
      body: formData
    })
    userStore.loginWithToken(response.access_token)
    router.push('/shop')
  } catch (error) {
    showError.value = true
    errorText.value = error?.data?.detail || 'An error occurred while logging in.'
  }
}
</script>

<template>
  <div class="content px-4">
    <div class="auth-container">
      <el-form :model="form" label-width="90px" class="card auth-form-card">
        <h3 class="mb-4">Login</h3>
        <el-form-item label="Username">
          <el-input v-model="form.username"/>
        </el-form-item>
        <el-form-item label="Password">
          <el-input v-model="form.password" type="password" autocomplete="off" />
        </el-form-item>
        <el-form-item>
          <el-alert
            v-if="showError"
            type="error"
            title="Login Error"
            :description="errorText"
            show-icon
            :closable="false"
          />
        </el-form-item>
        <el-form-item>
          <div style="justify-content: space-between;width:100%;display: flex;align-items: center;">
            <el-button type="primary" @click="onSubmit">Submit</el-button>
            <router-link custom to="/register" v-slot="{ navigate, href }">
              <el-link type="info" :href="href" @click="navigate" style="line-height: initial;">Register</el-link>
            </router-link>
          </div>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>