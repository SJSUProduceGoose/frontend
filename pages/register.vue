<script setup lang="ts">
import { ElNotification, ElButton, ElInput, ElForm, ElFormItem, ElLink, ElAlert, FormInstance } from 'element-plus'
import { useUserStore } from "@/store/user";

const showError = ref<boolean>(false)
const errorText = ref<string>('')

const formRef = ref<FormInstance>()

const form = reactive({
  firstname: '',
  lastname: '',
  username: '',
  password: '',
  confirmPassword: '',
})

const userStore = useUserStore()
const router = useRouter()

async function onSubmit(e: Event) {
  e.preventDefault();
  
  formRef.value?.validate(async (valid: boolean) => {
    if (!valid) {
      ElNotification({
        title: 'Error',
        message: 'Please correct the issues in the marked fields.',
        type: 'error',
        duration: 5000,
      })
      return false;
    }

    try {
      // TODO: verify the endpoint url
      const response: any = await $api('/register', {
        baseURL: '/bridge',
        method: 'POST',
        body: {
          firstname: form.firstname,
          lastname: form.lastname,
          username: form.username,
          password: form.password,
        }
      })

      userStore.setWithUserToken(response.access_token)
      
      router.push('/shop')
    } catch (error: any) {
      showError.value = true
      errorText.value = error?.data?.detail || 'An error occurred while registering.';      
    }

  })
}

const validatePass = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('Please input the password.'))
  } else {
    if (form.confirmPassword !== '') {
      if (!formRef.value) return
      formRef.value.validateField('confirmPassword', () => null)
    }
    callback()
  }
}
const validatePass2 = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('Please input the password again.'))
  } else if (value !== form.password) {
    callback(new Error("The two passwords do not match."))
  } else {
    callback()
  }
}

const rules = reactive({
  firstname: [{ required: true, message: 'A first name is required.' }],
  lastname: [{ required: true, message: 'A last name is required.' }],
  username: [
    {
      required: true,
      type: 'email',
      message: 'Please input a valid email address.',
      trigger: 'blur'
    },
  ],
  password: [
    {
      required: true, validator: validatePass, trigger: 'blur',
    },
    {
      type: 'string', min: 8, message: 'Password must be at least 8 characters.', trigger: 'blur',
    },
    {
      type: 'string', max: 32, message: 'Password must be at most 32 characters.', trigger: 'blur',
    },
  ],
  confirmPassword: [{ required: true, validator: validatePass2, trigger: 'blur' }],
})


</script>

<template>
  <div class="content px-4">
    <div class="auth-container">
      <el-form
      class="card auth-form-card"
      ref="formRef"
      :model="form"
      status-icon
      :rules="rules"
      label-width="140px"
    >
      <h3 class="mb-4">Register</h3>
      <el-form-item label="First name" prop="firstname">
        <el-input v-model="form.firstname"/>
      </el-form-item>
      <el-form-item label="Last name" prop="lastname">
        <el-input v-model="form.lastname"/>
      </el-form-item>
      <el-form-item label="Email" prop="username">
        <el-input v-model="form.username"/>
      </el-form-item>
      <el-form-item label="Password" prop="password">
        <el-input v-model="form.password" type="password" autocomplete="off" />
      </el-form-item>
      <el-form-item label="Confirm Password" prop="confirmPassword">
        <el-input
          v-model="form.confirmPassword"
          type="password"
          autocomplete="off"
        />
      </el-form-item>
      <el-form-item>
          <el-alert
            v-if="showError"
            type="error"
            title="Registration Error"
            :description="errorText"
            show-icon
            :closable="false"
          />
        </el-form-item>
      <el-form-item>
        <div style="justify-content: space-between;width:100%;display: flex;align-items: center;">
            <el-button type="primary" @click="onSubmit">Submit</el-button>
            <router-link custom to="/login" v-slot="{ navigate, href }">
              <el-link type="info" :href="href" @click="navigate" style="line-height: initial;">Login</el-link>
            </router-link>
          </div>
      </el-form-item>
    </el-form>
    </div>
  </div>
</template>