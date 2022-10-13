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
min-height: 100vh;
justify-content: center;
align-items: center;
flex-direction: column;
position: relative;



}
#goose{
  margin-right: 400px;
  height:400px;
  width: 500px;


}
img{
height:400px;
width: 500px;
}

#text{
position: absolute;
color: orange;
left: 50%;



width: 500px;
}

button{
border: none;
background-color: darkorange;
padding: 10px;
color: white;
height: 50px;
position: fixed;
left: 50%;
width: 150px;
font-size: 0.9em;
font-weight: bold;


}

</style>