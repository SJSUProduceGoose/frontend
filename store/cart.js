import { defineStore } from 'pinia'
import { useUserStore } from "./user";

const roundTo = (num, places) => Math.round(num * 10 ** places) / 10 ** places



export const useCartStore = defineStore('cartStore', () => {
  const store = ref({
    id: -1,
    status: 0,
    updated_at: null,
    created_at: null,
    items: [],
  })
  let fetchCartResponse = null;
  const userStore = useUserStore()
  const displaySignupPrompt = ref(false);
  const displayOutOfStock = ref(false);
  const visible = ref(false)

  let pendingProduct = null;
  let firstItemAdded = true;

  const itemCount = computed(() => {
    return store.value.items.reduce((total, { quantity, product }) => total + quantity, 0);
  });
  
  const totalWeight = computed(() => {
    return roundTo(store.value.items.reduce((total, { quantity, product }) => total + (quantity * product.weight), 0), 2);
  });

  const totalPrice = computed(() => {
    return roundTo(store.value.items.reduce((total, { quantity, product }) => total + (quantity * product.price), 0), 2);
  });

  const findByItem = ({ id }) => store.value.items.find((item ) => item.id === id);
  const findByProduct = ({ id }) => store.value.items.find(({ product } ) => product.id === id);

  watch(() => userStore.isLoggedIn, async (isLoggedIn) => {
    if (isLoggedIn) {
      if (pendingProduct !== null) {
        add(pendingProduct)
        pendingProduct = null
      }
      await refresh();
      fetchCart();
    } else {
      store.value = {
        id: -1,
        status: 0,
        updated_at: null,
        created_at: null,
        items: [],
      }
    }
  });

  const add = async (product) => {    
    if(product.quantity == 0){
      displayOutOfStock.value = true;
      return;
    }
    
    if (!userStore.isLoggedIn && firstItemAdded) {
      // TODO: remove anonymous cart logic
      // displaySignupPrompt.value = true;
      visible.value = true;
      return;
    }

    visible.value = true;

    const existingItem = findByProduct(product);

    if (existingItem === undefined) {
      if (userStore.isLoggedIn) {
        const response = await $api('/cart/', {
          method: 'POST',
          body: {
            product_id: product.id,
            quantity: 1,
          }
        })
        store.value.items.push(response)
      }
    } else {
      update(existingItem, existingItem.quantity + 1);
    }
  }

  const update = async (item, newQuantity) => {
    const existingItem = findByItem(item)

    if (userStore.isLoggedIn) {
        const response = await $api(`/cart/${existingItem.id}`, {
          method: 'PATCH',
          body: {
            quantity: newQuantity,
          }
        })

      existingItem.quantity = response.quantity;
      existingItem.product = response.product;

      } else {
        existingItem.quantity = newQuantity;
      }
  }

  const remove = async (item) => {
    const existingItem = findByItem(item)

    if (userStore.isLoggedIn) {
      await $api(`/cart/${existingItem.id}`, {
        method: 'DELETE',
      })
    }

    store.value.items.splice(store.value.items.indexOf(existingItem), 1)
  }

  const fetchCart = async () => {
    if (!userStore.isLoggedIn) return;

    fetchCartResponse = await useApi('/cart/')
    if (fetchCartResponse.error.value == null) {
      store.value = fetchCartResponse.data.value
    }
  }

  const refresh = async () => {
    if (fetchCartResponse !== null) {
      await fetchCartResponse.refresh()
    } else {
      fetchCart()
    }
  }

  return {
    add,
    items: computed(() => store.value.items),
    update,
    remove,
    itemCount,
    totalWeight,
    totalPrice,
    displaySignupPrompt,
    displayOutOfStock,
    fetchCart,
    visible,
    toggleVisibility: () => visible.value = !visible.value,
    refresh
  }
})