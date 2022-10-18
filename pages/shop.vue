<template>

<div class="wrap">
  
  <div id="box">
    <img src="~/assets/img/veggies.png">
    <p>Fruits</p>
  </div>
  <div id="box2">b</div>
   <div id="box3">c</div>
   <div id="box4">d</div>
  <div id="box5">d</div>
  <div id="box5">f</div>
  <div id="box6">f</div>
  <div id="box6">f</div>

</div>


</template>
<style scoped>

body{
    background-color: lightgray;
    
}
img{
    width: 300px;
}
.wrap
{
    
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
   font-size: 50px;
   font-weight: bold;
   letter-spacing: 1px;
   font-family: 'Times New Roman', Times, serif;
}

#box
{
  text-align: center;
  

 
  width: 300px;
  height: 300px;
  cursor: default;
  pointer-events: visible;        
  text-decoration: none;
  color: #ff7800;
  transition: box-shadow 0.5s;
 

}

#box:hover{
    box-shadow: 0 15px 20px rgba(0, 0, 0, 0.15);
}

#box2
{
  background-color: orange;
  width: 300px;
  height: 300px;
}
#box3
{
  background-color: green;
  width: 300px;
  height: 300px;
}
#box4
{
  background-color: blue;
  width: 300px;
  height: 300px;
}
#box5
{
  background-color: pink;
  width: 300px;
  height: 300px;
}
#box6
{
  background-color: black;
  width: 300px;
  height: 300px;
}

</style>