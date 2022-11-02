<template>
  <div class="wrap">
    <NuxtLink to="/vegetables" class="link">
      <div class="box">
        <img src="~/assets/img/veggies.png">
        <p>Vegatables</p>
      </div>
    </NuxtLink>
    <NuxtLink to="/category/fruits" class="link">
      <div class="box">
        <img src="~/assets/img/fruits.jpg">
        <p>Fruits</p>
      </div>
    </NuxtLink>
    <NuxtLink to="/snacks" class="link">
      <div class="box">
        <img src="~/assets/img/snacks.jpg">
        <p>Snacks</p>
      </div>
    </NuxtLink>
    <NuxtLink to="/grainsnuts" class="link">
      <div class="box">
        <img src="~/assets/img/grains.jpg">
        <p>Grains & Nuts</p>
      </div>
    </NuxtLink>
    <NuxtLink to="/dairyeggs" class="link">
      <div class="box">
        <img src="~/assets/img/dairy.jpg">
        <p>Dairy & Eggs</p>
      </div>
    </NuxtLink>
    <NuxtLink to="/meats" class="link">
      <div class="box">
        <img src="~/assets/img/meats.jpg">
        <p>Meats</p>
      </div>
    </NuxtLink>
    <NuxtLink to="/spices" class="link">
      <div class="box">
        <img src="~/assets/img/spices.jpg">
        <p>Spices</p>
      </div>
    </NuxtLink>
    <NuxtLink to="/supplements" class="link">
      <div class="box">
      <img src="~/assets/img/supplements.jpg">
      <p>Supplements</p>
    </div>
    </NuxtLink>
  </div>
</template>
<style scoped>
.link {
  text-decoration: none;
}

img {
  width: 300px;
  height: 230px;
}

.wrap {
  background-color: rgba(211, 211, 211, 0.678);
  place-items: center;
  align-content: center;
  justify-content: center;
  grid-template-columns: repeat(4, 400px);
  grid-template-rows: repeat(2, 350px);
  display: grid;
  min-height: 95vh;
  min-width: 100vw;
}

p {
  font-size: 45px;

  letter-spacing: 1px;
}

.box {
  text-align: center;
  background-color: white;
  width: 300px;
  height: 300px;
  cursor: default;
  pointer-events: visible;
  text-decoration: none;
  color: #ff7800;
  transition: box-shadow 0.5s;
}

.box:hover {
  box-shadow: 0 15px 20px rgba(0, 0, 0, 0.15);
}
</style>