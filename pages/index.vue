<script setup>
import { ElButton, ElNotification } from 'element-plus'

const router = useRouter()
const route = useRoute()

onMounted(() => {
  if (route.query.logout === 'true') {
    ElNotification({
        title: 'Success!',
        message: 'You have been logged out.',
        type: 'success',
        duration: 5000
    })
    router.replace({
      query: {
        ...route.query,
        logout: undefined,
      }
    })
  }
})

</script>

<template>
  <div class="content px-4">
    <div id="wrapper">
      <img id="goose" src="~/assets/img/landing-page-logo.png" alt="The Goose"/>

      <div id="text">
        <img src="~/assets/img/title-logo.png" alt="Produce Goose" />
        <h1 class="text-pg-primary">Fresh! Local! Fun!</h1>
        <h2 class="text-gray-800">Order fresh produce from the comfort of your own home from local, organic farms with a few clicks!</h2>
        <NuxtLink custom to="/shop" v-slot="{ navigate }">
          <el-button type="primary" class="action-button" @click="navigate">Shop Now</el-button>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
#wrapper{
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 100%;
}

#goose {
  height: 500px;
  width: 500px;
}

#text {
  width: 500px; 
}

h1 {
  // color: #ff7800;
  font-size: 50px;
}

h2 {
  font-size: 22px;
  margin-top: 16px;
}

.action-button {
  height: 50px;
  width: 150px;
  font-size: 20px;
  font-weight: bold;
  margin-top: 16px;
 
  &:hover {
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.15);
    transition: box-shadow 0.5s;
  }
}

@media screen and (max-width: 1100px) {
  #text {
    padding: 0 2rem;
  }
  #wrapper {
    flex-direction: column;
    height: unset;
  }
  #goose{
    margin: 2rem 0;
    height: 300px;
    width: 300px;
  }
}

</style>