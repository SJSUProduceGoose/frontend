<script setup>
const route = useRoute()

definePageMeta({
  key: (route) => route.fullPath,
})

const items = ref([])

// router.afterEach(async () => {
//   const { data } = await useApi(`/search/?q=${route.query.q}`, {
    
//     key: `search:${route.query.q}`,
// })
// console.log(data)
//     items.value = data.value.items
// })

// watchEffect(route.query, async () => {
//   const { data } = await useApi(`/search/?q=${route.query.q}`, {
    
//     key: `search:${route.query.q}`,
// })
// console.log(data)
//     items.value = data.value.items
// })


const { data } = await useApi(`/search/?q=${route.query.q}`, {
    key: `search:${route.query.q}`,
})

console.log(data.value.items);

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

