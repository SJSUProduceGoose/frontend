<script setup>
import { ElNotification as notify, ElButton, ElPageHeader, ElDescriptionsItem, ElDescriptions, ElAvatar, ElTag } from 'element-plus'

const config = useRuntimeConfig()

definePageMeta({
  middleware: ['auth-customer']
})

const { data } = await useFetch('/user/me/', {
  baseURL: config.public.BASE_URL,
  headers: {
    cookie: `session=${useCookie('session').value};`,
  },
})

console.log(data)

</script>
  
<template>
  <div aria-label="A complete example of page header">
    <el-page-header @back="router.back()">

      <template #content>
        <div class="flex items-center">
          <el-avatar class="mr-3" :size="100"
            src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png" />
          <span class="text-large font-600 mr-3"> {{ data.firstname }} {{ data.lastname }}
          </span>
        </div>
      </template>

      <el-descriptions title="Account Information" direction="vertical" :column="1" size="large" border>
        <el-descriptions-item label="Full Name">{{ data.firstname }} {{ data.lastname }}
        </el-descriptions-item>
        <el-descriptions-item label="Email">{{ data.email }}</el-descriptions-item>
        <el-descriptions-item label="Area" :span="4">San Jose</el-descriptions-item>
        <el-descriptions-item label="Type">
        <el-tag size="small">School</el-tag>
        </el-descriptions-item>
      </el-descriptions>
    </el-page-header>
  </div>
</template>
  
<style scoped>
.el-descriptions {
  margin-top: 20px;
}
</style>