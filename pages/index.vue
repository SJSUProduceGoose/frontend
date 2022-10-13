
<template>
  
    <div class="frontPage">
      <div> <img src="~/assets/img/goose.png"> </div>
      
      <div id="text">
          <h1>Fresh! Local! Fun!</h1>
          <h2>Order fresh produce from the comfort of your own home from local, organic farms with a few clicks!</h2>
      </div>
      <button id="button">Shop Now!</button>
      

    </div>
    
    
    
</template>

<style scoped>

.frontPage{
  display: flex;
  width: 1000px;
  position: relative;
  margin-left: 400px;
  margin-top: 200px;
  color: orange;

    
}
img{
    
  height: 500px;
    
    
}
#text{
  margin-top: 50px;
  font-size: 28px;

}

h2{
  width: 700px;

}
#button
{
  border: none;
  background-color: darkorange;
  padding: 10px;
  position: absolute;
  top: 400px;
  left: 500px;
  color: white;
  height: 50px;
  width: 150px;
  font-size: 15px;
  font-weight: bold;
  
}

</style>