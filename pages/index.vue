<template>
  <div id="wrapper">
    <div id="goose"><img src="~/assets/img/goose.png"></div>
    <div id="text">
      <h1>Fresh! Local! Fun!</h1>
        <h2>Order fresh produce from the comfort of your own home from local, organic farms with a few clicks!</h2>
        <button>Shop Now!</button>
    </div>
  </div>
</template>
<style scoped>
#wrapper{
display: flex;
justify-content: center;
align-items: center;
min-height: 95vh;
position: relative;
}
#goose{
  margin-right: 600px;
  height:600px;
  width: 500px;
}
img{
height:600px;
width: 500px;
}
#text{
position: absolute;
left: 49%;
color: orange;
width: 500px; 
}
h1{
  font-size: 50px;
}
h2{
  font-size: 22px;
}
button{
  border: none;
  background-color: darkorange;
  padding: 10px;
  color: white;
  height: 50px;
  width: 150px;
  font-size: 20px;
  font-weight: bold;
}
</style>