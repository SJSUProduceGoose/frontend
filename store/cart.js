import { defineStore } from 'pinia'


const roundTo = (num, places) => Math.round(num * 10 ** places) / 10 ** places

export const useCartStore = defineStore('cartStore', () => {
  const items = ref([]);

  let cartCount = ref(0);
  const totalWeight = computed(() => {
    return roundTo(items.value.reduce((total, { quantity, product }) => total + (quantity * product.weight), 0), 2);
  });

  const totalPrice = computed(() => {
    return roundTo(items.value.reduce((total, { quantity, product }) => total + (quantity * product.price), 0), 2);
  });

  const itemPrice = computed( () => {
  
    
  });
  
  const contains = ({ id }) => items.value.some(({ product }) => product.id === id);

  const find = ({ id }) => items.value.find(({ product } ) => product.id === id);

  const add = (product) => {
    const existingItem = find(product);
    
    console.log(product)
    if (existingItem === undefined) {
      items.value.push({
        quantity: 1,
        product
      });
      cartCount.value++
    } else {
      existingItem.quantity += 1;
      if(existingItem.quantity <= 20) {
        cartCount.value++
      }
    }
  }

  const remove = (item) => {
   
    items.value.splice(items.value.indexOf(item), 1)
    cartCount.value = cartCount.value - item.quantity
  }

  return {
    add,
    items,
    remove,
    cartCount,
    totalWeight,
    itemPrice,
    totalPrice,
  }
})