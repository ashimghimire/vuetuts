<template>
  <div class='section'>
  <div class="row">
  <div class="col-sm-12">
  <h3>{{mn.Title}}</h3>
  <p>{{mn.Released}}</p>
  </div>
  </div>
  </div>
</template>
<script>
import { useMovieStore,  } from '../stores/movielist';
import {onMounted, computed} from 'vue';
export default {
   setup() {
    const apiStore = useMovieStore();
    onMounted(async () => {
      await apiStore.fetchMovies();
    });
    const mn=computed(()=>{
      return apiStore.movies;
    })
    
    return {
        mn
    } 
  },
} 
</script>