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
        <li class="hlink-item">
          <NuxtLink to="/login" class="reglink">
             Login
          </NuxtLink>
        </li>
        <li>
          <input type="text" placeholder="Search">
        </li>   
        <li>
          <button type="submit">Search</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.header {
  background-color: rgb(23, 162, 255);
  display: flex;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 100;
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

button[type="submit"] {
  text-indent: -999px;
  overflow: hidden;
  width: 40px;
  padding: 6px;
  margin-bottom: 1px;
  border: 1px solid transparent;
  border-radius: inherit;
  background: transparent url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' class='bi bi-search' viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'%3E%3C/path%3E%3C/svg%3E") no-repeat center;
  cursor: pointer;
  background-color:#ff960d
}

</style>