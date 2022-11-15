import { defineStore } from 'pinia'


const roundTo = (num, places) => Math.round(num * 10 ** places) / 10 ** places

export const useCartStore = defineStore('cartStore', () => {
  const items = ref([]);


  const totalWeight = computed(() => {
    return roundTo(items.value.reduce((total, { quantity, product }) => total + (quantity * product.weight), 0), 2);
  });

  const totalPrice = computed(() => {
    return roundTo(items.value.reduce((total, { quantity, product }) => total + (quantity * product.price), 0), 2);
  });

  const itemPrice = computed( (product) => {
  
    return {product}.price
  });
  
  const contains = ({ id }) => items.value.some(({ product }) => product.id === id);

  const find = ({ id }) => items.value.find(({ product } ) => product.id === id);

  const add = (product) => {
    const existingItem = find(product);
  
    if (existingItem === undefined) {
      items.value.push({
        quantity: 1,
        product
      });
      
    } else {
      existingItem.quantity += 1;
    }
  }

  const remove = (item) => {
    items.value.splice(items.value.indexOf(item), 1)
  }

  return {
    add,
    items,
    remove,
    totalWeight,
    itemPrice,
    totalPrice,
  }
})