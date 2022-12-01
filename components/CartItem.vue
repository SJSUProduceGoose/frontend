<script setup>
import { ElButton, ElIcon, ElInputNumber } from 'element-plus'
import { Delete } from '@element-plus/icons-vue'
import { useUserStore } from "@/store/user";
import { useCartStore } from '@/store/cart'

const props = defineProps({
  product: Object,
  item: Object
})

const userStore = useUserStore();
const cartStore = useCartStore();

const formattedTotalPrice = computed(() => {
  return (props.item.quantity * props.product.price).toLocaleString('en-US', { style: 'currency', currency: 'USD' })
})

const formattedTotalWeight = computed(() => {
  return (props.item.quantity * props.product.weight).toLocaleString('en-US', { style: 'unit', unit: 'pound', unitDisplay: 'short' })
})

function removeItem() {
  cartStore.remove(props.item)
}

const quantity = computed({
  get() {
    return props.item.quantity
  },
  set(newValue) {
    cartStore.update(props.item, newValue)
  }
})


const maxQuantity = computed(() => {
  if (userStore.isLoggedIn) {
    return props.product.quantity + props.item.quantity
  } else {
    return props.product.quantity
  }
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
          <ElInputNumber v-model="quantity" :min="1" :max="maxQuantity"></ElInputNumber>
        </div>
        <div class="absolute bottom-0 right-0">
          <el-button @click="removeItem" type="danger" circle>
            <el-icon :size="16"><Delete/></el-icon>
        </el-button>
        </div>
      </div>
    </div>
    
  </div>
</template>