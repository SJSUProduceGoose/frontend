<script setup>
const route = useRoute()
// const router = useRouter()

const config = useRuntimeConfig();

const items = ref([])
// router.afterEach(async () => {
//   const { data } = await useFetch(`/search/?q=${route.query.q}`, {
    
//     key: `search:${route.query.q}`,
//     baseURL: config.public.BASE_URL,
// })
// console.log(data)
//     items.value = data.value.items
// })

// watchEffect(route.query, async () => {
//   const { data } = await useFetch(`/search/?q=${route.query.q}`, {
    
//     key: `search:${route.query.q}`,
//     baseURL: config.public.BASE_URL,
// })
// console.log(data)
//     items.value = data.value.items
// })


const { data } = await useFetch(`/search/?q=${route.query.q}`, {
    
        key: `search:${route.query.q}`,
        baseURL: config.public.BASE_URL,
    })
    console.log(route)
        items.value = data.value.items


</script>


<template>


<CardGrid :objects="items">
    <template v-slot="{ object }">
      <div class="relative flex justify-between items-end">
        <div>
          <div class="text-2xl">
            {{ object.name }}
          </div>
          <div>${{ object.price }}</div>
          <div class="flex mt-1.5">
          </div>
          <div class="flex mt-2">
          </div>
          </div>
          <div class="absolute bottom-0 right-0">

         
          </div>
        </div>
    </template>
  </CardGrid>

</template>

