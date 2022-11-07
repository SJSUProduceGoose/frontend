<script setup>
import { useUserStore } from "@/store/user";

const userStore = useUserStore()
const input = ref('');
const searchResults = ref([])

async function onSearchClick() {
  const { items } = await $fetch(`https://produce-goose-backend-stg.herokuapp.com/search/?q=${input.value}`);
  searchResults.value = items;
}

</script>
<template>
  <div class="header">
    <div class="title">
      <a class="reglink" href="/">
      OFS Farms
      </a>
    </div>
    <div class="hlinks">
      <ul>
        <li class="hlink-item">
          <NuxtLink to="/shop" class="reglink">
            Shop
          </NuxtLink>
        </li>
        <li class="hlink-item" >
          <NuxtLink v-if="userStore.user === null" to="/login" class="reglink">
             Login
          </NuxtLink>
          <NuxtLink v-else="userStore.user === null" to="/account" class="reglink">
             Account
          </NuxtLink>
        </li>
      
        <li>
          <input v-model="input" type="text" placeholder="Search">
        </li>   
        <li>
          <button @click="onSearchClick" class="search">Search</button>
        </li>
    
      </ul>
    </div>
  </div>
  <input type="checkbox" id="drawer-toggle" name="drawer-toggle"/>

   <label for="drawer-toggle" id="drawer-toggle-label">

    <img src="~/assets/img/cart.png" id="cartPic">
   </label>

   <nav id="drawer">
      <ul>
        <li><a href="#">Placeholder</a></li>
         <li><a href="#">Placeholder</a></li>
         <li><a href="#">Item</a></li>
         <li><a href="#">Item</a></li>
      </ul>
   </nav>

</template>

<style scoped>

#cartPic{

  width: 40px;
  height: 40px;
  
}
.cart{
  margin-left: 20px;
}
.header {
  background-color: rgb(23, 162, 255);
  display: flex;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 100;
  min-width: 1400px;
}

* {
  font-family: 'Roboto', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.reglink {
  cursor: default;
  pointer-events: visible;        
  text-decoration: none;
  color: white;
  transition: color 0.2s;
}
.reglink:hover {
  color: #ff960d;
}
.title {
  font-size: 40px;
  font-weight: 10px;
  margin-left: 10px;
}

.hlinks {
  margin-left: auto;
  margin-right: 20px;
}

.hlink-item {
  font-size: 25px;
  margin-left: 10px;
  margin-right: 20px;
}

.mcolor {
  color:white;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  margin-top: 10px;
}

li {
  display: inline;
}

.header input[type=text] {
  padding: 5px;
  margin-bottom: 10px;
  font-size: 17px;
  border: 1px solid #ccc;
  margin-left: 20px;
}

button.search {
  text-indent: -999px;
  overflow: hidden;
  width: 40px;
  padding: 6px;
  margin-bottom: 1px;
  border: 1px solid transparent;
  border-radius: inherit;
  background: transparent url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' class='bi bi-search' viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'%3E%3C/path%3E%3C/svg%3E") no-repeat center;
  cursor: pointer;
  background-color: #ff7800
}



* { 
-webkit-box-sizing: border-box; 
-moz-box-sizing: border-box; 
-o-box-sizing: border-box; 
box-sizing: border-box; 
/* adds animation for all transitions */ 
-webkit-transition: .25s ease-in-out; 
-moz-transition: .25s ease-in-out; 
-o-transition: .25s ease-in-out; 
transition: .25s ease-in-out; 
margin: 0; 
padding: 0; 
-webkit-text-size-adjust: none; 
} 

/* Makes sure that everything is 100% height */ 

html,body { 
height: 100%; 
overflow: hidden; 
} 

/* gets the actual input out of the way; 
we're going to style the label instead */ 

#drawer-toggle { 
position: absolute; 
opacity: 0; 
}

#drawer-toggle-label { 
-webkit-touch-callout: none; 
-webkit-user-select: none; 
-khtml-user-select: none; 
-moz-user-select: none; 
-ms-user-select: none; 
user-select: none; 
right: 0px; 
height:50px; 
width: 50px; 
display: block; 
position: fixed; 
background: rgba(255,255,255,.0); 
z-index: 1; 
} 

/* adds our "hamburger" menu icon */ 



header { 
width: 100%; 
position: fixed; 
right: 0px; 
background: #efefef; 
padding: 10px 10px 10px 50px; 
font-size: 30px; 
line-height: 30px; 
z-index: 0; 
}

/* drawer menu pane - note the 0px width */ 

#drawer { 
position: fixed; 
top: 0; 
right:-300px; 
height: 100%; 
width: 300px; 
background: #2f2f2f; 
overflow-x: hidden; 
overflow-y: scroll; 
padding: 20px; 
-webkit-overflow-scrolling: touch; 
} 

/* actual page content pane */ 

#page-content { 
margin-right: 0px; 
margin-top: 50px; 
width: 100%; 
height: calc(100% - 50px); 
overflow-x:hidden; 
overflow-y:scroll; 
-webkit-overflow-scrolling: touch; 
padding: 20px; 
}

/* checked styles (menu open state) */ 

#drawer-toggle:checked ~ #drawer-toggle-label { 
height: 100%; 
width: calc(100% - 300px); 
background: rgba(255,255,255,.8); 
} 

#drawer-toggle:checked ~ #drawer-toggle-label, 
#drawer-toggle:checked ~ header { 
right: 300px; 
} 

#drawer-toggle:checked ~ #drawer { 
right: 0px; 
} 

#drawer-toggle:checked ~ #page-content { 
margin-right: 300px; 
}

/* Menu item styles */ 

#drawer ul { 
list-style-type:none; 
} 

#drawer ul a { 
display:block; 
padding:10px; 
color:#c7c7c7; 
text-decoration:none; 
} 

#drawer ul a:hover { 
color:white; 
} 

/* Responsive MQ */ 

@media all and (max-width:350px) { 

#drawer-toggle:checked ~ #drawer-toggle-label { 
height: 100%; 
width: 50px; 
} 

#drawer-toggle:checked ~ #drawer-toggle-label, 
#drawer-toggle:checked ~ header { 
right: calc(100% - 50px); 
} 

#drawer-toggle:checked ~ #drawer { 
width: calc(100% - 50px); 
padding: 20px; 
} 

#drawer-toggle:checked ~ #page-content { 
margin-right: calc(100% - 50px); 
} 

}
</style>