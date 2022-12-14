<script setup>
import { ElPopconfirm, ElDescriptionsItem, ElDescriptions, ElAvatar, ElTag, ElButton } from 'element-plus'
import { useUserStore } from '@/store/user'


definePageMeta({
  middleware: ['auth-customer']
})

const userStore = useUserStore()

const { data, error } = await useApi('/user/me/', {
  key: 'user:me'
})

const isError = computed(() => error.value !== null)
const fullname = computed(() => !isError.value ? `${data.value.firstname} ${data.value.lastname}` : '')

</script>
  
<template>
  <div class="content px-4">
    <div class="flex">
      <PageHeader :title="fullname" :breadcrumbs="[
        {
          title: 'Account',
          to: '/account',
        }
      ]">
        <template #pre>
          <el-avatar size="small" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png" />
        </template>
        <template #extra>
          <ClientOnly>
            <el-popconfirm 
              title="Are you sure?"
              hide-icon
              @confirm="userStore.logout">
              <template #reference>
                <el-button type="danger">Log Out</el-button>
              </template>
            </el-popconfirm>
            <template #fallback>
              <el-button type="danger">Log Out</el-button>
            </template>
          </ClientOnly>
        </template>
      </PageHeader>
    </div>
    <el-descriptions 
      v-if="!isError"
      title="Account Information"
      direction="vertical"
      :column="1"
      size="large"
      border
      class="max-w-2xl m-auto">
    >
      <el-descriptions-item label="Full Name">{{ fullname }}</el-descriptions-item>
      <el-descriptions-item label="Email">{{ data.email }}</el-descriptions-item>
      <el-descriptions-item label="Area" :span="4">San Jose</el-descriptions-item>
      <el-descriptions-item label="Role">
        <el-tag v-if="userStore.user?.is_superuser" size="small">Admin</el-tag>
        <el-tag v-else-if="userStore.user?.is_employee" size="small">Employee</el-tag>
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