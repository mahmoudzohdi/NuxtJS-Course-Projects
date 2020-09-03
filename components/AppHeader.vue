<template>
  <header>
    <nav>
      <ul>
        <li class="nav-item">
          <nuxt-link to="/blog">Blog</nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
header{
  background-color: #333;
  padding: 15px 0;
  text-align: center;
}
ul {
  margin: 0;
  padding: 0;
}
.nav-item{
  color: #fff;
  font-size: 20px;
  list-style: none;
}
.nav-item a, .nav-item a:active{
  color: inherit;
  text-decoration: none;
  padding: 4px 10px;
  border-radius: 3px;
}
.nav-item a.nuxt-link-exact-active{
  background-color: #fff;
  color: #333;
  
}
</style>