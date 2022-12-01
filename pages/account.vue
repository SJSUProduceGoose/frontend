<script setup>
import { ElPopconfirm, ElDescriptionsItem, ElDescriptions, ElAvatar, ElTag, ElButton } from 'element-plus'
import { useUserStore } from '@/store/user'

definePageMeta({
  middleware: ['auth-customer']
})

const userStore = useUserStore()

const { data } = await useApi('/user/me/')


const fullname = computed(() => `${data.value.firstname} ${data.value.lastname}`)

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
    <el-descriptions title="Account Information" direction="vertical" :column="1" size="large" border>
      <el-descriptions-item label="Full Name">{{ fullname }}</el-descriptions-item>
      <el-descriptions-item label="Email">{{ data.email }}</el-descriptions-item>
      <el-descriptions-item label="Area" :span="4">San Jose</el-descriptions-item>
      <el-descriptions-item label="Type">
        <el-tag size="small">School</el-tag>
      </el-descriptions-item>
    </el-descriptions>
  </div>
</template>
  
<style scoped>
.el-descriptions {
  margin-top: 20px;
}
</style>