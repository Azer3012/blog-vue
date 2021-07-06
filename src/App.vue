<template>
  <div class="nav">

    
    <router-link to="/">Home</router-link>
    <router-link to="/news">Add News</router-link>

  </div>
  <router-view/>
</template>

<style>
.nav{
  height: 50px;
  background-color: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
}
.nav a{
  margin-right: 15px;
  color: black;
  text-decoration: none;
}

.nav a.router-link-exact-active {
  color: #42b983;
}
</style>
