<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
<header>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <div class="collapse navbar-collapse">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
       <a class="nav-link"><RouterLink to="/">Basic  App</RouterLink></a>
      </li>
      <li class="nav-item">
         <a class="nav-link"> <RouterLink to="/filter">Filtering Movies</RouterLink></a>
      </li>
       <li class="nav-item">
        <a class="nav-link"> <RouterLink to="/sort">Sorting Movies</RouterLink> </a>
      </li>
       <li class="nav-item">
         <a class="nav-link"> <RouterLink to="/rate">Rate Movies</RouterLink> </a>
      </li>
       <li class="nav-item">
        <a class="nav-link"> <RouterLink to="/reviews">Reviews Movies</RouterLink> </a>
      </li>
        <li class="nav-item">
        <a class="nav-link"> <RouterLink to="/code">Code Movies</RouterLink> </a>
      </li>
       <li class="nav-item">
        <a class="nav-link"> <RouterLink to="/customize">Custom Movies</RouterLink></a>
      </li>
       <li class="nav-item">
         <a class="nav-link"> <RouterLink to="/suggest">Suggest Movies</RouterLink></a>
      </li>
    </ul>
  </div>
</nav>
</header>
<div class="container pt-2">
  <RouterView />
</div>
</template>

