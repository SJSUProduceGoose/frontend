<script setup>
import { ElButton, ElInput, ElIcon, ElMenu, ElMenuItem, ElDrawer, ElInputNumber } from 'element-plus'
import { Search, ShoppingCart } from '@element-plus/icons-vue'
import { useUserStore } from "@/store/user";
import { ref } from 'vue'
import { useCartStore } from '@/store/cart'

const props = defineProps({
  product: Object,
  item: Object
})

const cartStore = useCartStore();

const formattedTotalPrice = computed(() => {
  return (props.item.quantity * props.product.price).toLocaleString('en-US', { style: 'currency', currency: 'USD' })
})

const formattedTotalWeight = computed(() => {
  return (props.item.quantity * props.product.weight).toLocaleString('en-US', { style: 'unit', unit: 'pound', unitDisplay: 'short' })
})
</script>

<template>
  <div class="relative flex justify-between items-end">
    <div class="w-20">
      <div class="text-2xl">
        {{ props.product.name }}
      </div>
      <div class="flex justify-between w-100 mt-3">
        <div>
          <div>Total Price: {{ formattedTotalPrice }}</div>
          <div>Total Weight: {{ formattedTotalWeight }}</div>
        </div>
      </div>
      <div>
        <div class="absolute top-0 right-0">
          <ElInputNumber v-model="props.item.quantity" :min="1" :max="props.product.quantity"></ElInputNumber>
        </div>
        <div class="absolute bottom-0 right-0">
          <el-button @click="cartStore.remove(props.item)" type="danger">
          Remove
        </el-button>
        </div>
        
        
      </div>
    </div>
    
  </div>
</template>

<style lang="pcss">
</style>