<template>

<div class="wrap">
  
  <div class="box">
    <img src="~/assets/img/veggies.png">
    <p>Vegatables</p>
  </div>
  <div class="box">
    <img src="~/assets/img/fruits.jpg">
    <p>Fruits</p>
  </div>
  <div class="box">
    <img src="~/assets/img/snacks.jpg">
    <p>Snacks</p>
  </div>
  <div class="box">
    <img src="~/assets/img/grains.jpg">
    <p>Grains & Nuts</p>
  </div>
  <div class="box">
    <img src="~/assets/img/dairy.jpg">
    <p>Dairy & Eggs</p>
  </div>
  <div class="box">
    <img src="~/assets/img/meats.jpg">
    <p>Meats</p>
  </div>
  <div class="box">
    <img src="~/assets/img/spices.jpg">
    <p>Spices</p>
  </div>
  <div class="box">
    <img src="~/assets/img/supplements.jpg">
    <p>Supplements</p>
  </div>
</div>


</template>
<style scoped>

body{
    background-color: lightgray;
    
}
img{
    width: 300px;
    height: 230px;
}
.wrap
{
    background-color: lightgray;
    place-items: center;   
    align-content: center;
    justify-content: center;
    grid-template-columns: repeat(4, 350px);
    grid-template-rows: repeat(2, 350px);
    display: grid;
    min-height: 95vh;
    min-width: 100vw;

   
  
  


 
  
  

}
p{
   font-size: 45px;
   font-weight: bold;
   letter-spacing: 1px;
   font-family: 'Times New Roman', Times, serif;
}

.box
{
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

.box:hover{
    box-shadow: 0 15px 20px rgba(0, 0, 0, 0.15);
}



</style>