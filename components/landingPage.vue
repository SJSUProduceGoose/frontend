<script>
  export default {
    data() {
      return {
        url: 'goose.png'
      }
    }
  }
</script>
  
<template>
    
    <div class="frontPage">
      <div> <img :src=url> </div>
      
      <div id="text">
          <h1>Fresh! Local! Fun!</h1>
          <h2>Order fresh produce from the comfort of your own home from local, organic farms with a few clicks!</h2>
      </div>
   
      

    </div>
    <button id="button">Shop Now!</button>
   
    
    
</template>

<style scoped>
  body{
    position: relative;
  }
.frontPage{
  display: flex;
  width: 1000px;

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
  margin-left: 900px;
  position: relative;
  bottom: 150px;
  border: none;
  background-color: darkorange;
  padding: 10px;
  color: white;
  height: 50px;
  width: 150px;
  font-size: 15px;
  font-weight: bold;
  
}

</style>