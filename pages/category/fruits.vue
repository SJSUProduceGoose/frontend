<script setup>
const products = ref([
  {
    "id": 1,
    "category_id": 2,
    "slug": "apples",
    "quantity": 20,
    "name": "Apples",
    "image_url": "https://images.unsplash.com/photo-1569870499705-504209102861?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80",
    "description": "Fresh apples from local farms",
    "price": 1.99
  },
  {
    "id": 2,
    "category_id": 2,
    "slug": "oranges",
    "quantity": 20,
    "name": "Oranges",
    "image_url": "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    "description": "Fresh oranges from local farms",
    "price": 1.99
  },
  {
    "id": 3,
    "category_id": 2,
    "slug": "peaches",
    "quantity": 20,
    "name": "Peaches",
    "image_url": "https://images.unsplash.com/photo-1629226182720-f0a169fc9a8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    "description": "Fresh peaches from local farms",
    "price": 1.99
  },
  {
    "id": 4,
    "category_id": 2,
    "slug": "strawberries",
    "quantity": 20,
    "name": "Strawberries",
    "image_url": "https://images.unsplash.com/photo-1543158181-e6f9f6712055?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    "description": "Fresh strawberries from local farms",
    "price": 1.99
  },
  {
    "id": 5,
    "category_id": 2,
    "slug": "apricots",
    "quantity": 20,
    "name": "Apricots",
    "image_url": "https://images.unsplash.com/photo-1592681814168-6df0fa93161b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    "description": "Fresh apricots from local farms",
    "price": 1.99
  },
  {
    "id": 6,
    "category_id": 2,
    "slug": "bananas",
    "quantity": 20,
    "name": "Bananas",
    "image_url": "https://images.unsplash.com/photo-1603833665858-e61d17a86224?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=654&q=80",
    "description": "Fresh bananas from local farms",
    "price": 1.99
  },
  {
    "id": 7,
    "category_id": 2,
    "slug": "black-berries",
    "quantity": 20,
    "name": "Black Berries",
    "image_url": "https://images.unsplash.com/photo-1562845029-d1b530d4cfd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    "description": "Fresh black berries from local farms",
    "price": 1.99
  },
  {
    "id": 8,
    "category_id": 2,
    "slug": "raspberries",
    "quantity": 20,
    "name": "Raspberries",
    "image_url": "https://images.unsplash.com/photo-1577069861033-55d04cec4ef5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
    "description": "Fresh raspberries from local farms",
    "price": 1.99
  }
]);

</script>

<template>
    <div class="wrap">
        <div v-for="product in products" class="box">
          <img :src="product.image_url" >
          <div class="name">
            {{ product.name }} <button class="btn">ADD TO CART</button>
          </div>
          <div class="price">
            ${{ product.price }}
          </div>
            <!-- {{JSON.stringify(product)}} -->
        </div>
      </div>
</template>
<style scoped>

.btn{
  border: none;
  background-color: #ff7800;
  padding: 10px;
  color: white;
  height: 40px;
  width: 100px;
  font-size: 12px;
  font-weight: bold;
  border-radius: 20px;
  text-align: center;
  float: right;
  margin-top: 7px;
  margin-right: 7px;
}
.name{
  font-size: 35px;
  font-weight: 500;
  margin-left: 5px;
}

.price{
  margin-left: 5px;
}
.link {
  text-decoration: none;
}

img {
  width: 100%;
  height: 76%;
}
.box img{
  object-fit: cover;
}

.wrap {
  background-color: rgba(211, 211, 211, 0.678);
  place-items: center;
  align-content: center;
  justify-content: center;
  grid-template-columns: repeat(4, 500px);
  grid-template-rows: repeat(2, 500px);
  display: grid;
  min-height: 95vh;
  min-width: 100vw;
}

p {
  font-size: 35px;

  letter-spacing: 1px;
}

.box {
  background-color: white;
  width: 370px;
  height: 370px;
  cursor: default;
  pointer-events: visible;
  text-decoration: none;
  color: #ff7800;
  transition: box-shadow 0.5s;
  font-size: 25px;
}

.box:hover {
  box-shadow: 0 15px 20px rgba(0, 0, 0, 0.15);
}
</style>
