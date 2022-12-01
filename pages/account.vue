<script setup>
import { ElPageHeader, ElDescriptionsItem, ElDescriptions, ElAvatar, ElTag } from 'element-plus'
import { useUserStore } from "@/store/user";
const userStore = useUserStore()

definePageMeta({
  middleware: ['auth-customer']
})

const { data } = await useApi('/user/me/')

</script>
  
<template>
  <div class="content px-4">
    <div class="flex">
      <PageHeader class="mt-3"/>
      <div class="flex items-center">
        <el-avatar class="mt-4 ml--13 mr-2" :size="50" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png" />
        <span class="text-large font-600 mr-3 mt-4"> {{ data.firstname }} {{ data.lastname }}
        </span>
      </div>
    </div>
    <el-descriptions title="Account Information" direction="vertical" :column="1" size="large" border>
      <el-descriptions-item label="Full Name">{{ data.firstname }} {{ data.lastname }}
      </el-descriptions-item>
      <el-descriptions-item label="Email">{{ data.email }}</el-descriptions-item>
      <el-descriptions-item label="Area" :span="4">San Jose</el-descriptions-item>
      <el-descriptions-item label="Type">
        <el-tag v-if="userStore.user.is_employee || userStore.user.is_superuser" size="small">Employee</el-tag>
        <el-tag v-else size="small">Customer</el-tag>
      </el-descriptions-item>
    </el-descriptions>
  </div>
</template>
  
<style scoped>
.el-descriptions {
  margin-top: 20px;
}
</style>