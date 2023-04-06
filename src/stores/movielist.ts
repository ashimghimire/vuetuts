import { defineStore } from 'pinia';
import { reactive } from 'vue';

interface Movie {
  title: string;
  year: number;
  director: string;
  releaseYear:string;
}

export const useMovieStore = defineStore('movies', {
  state: () => ({
    movies: reactive<Movie>({
      title:'New Title',
      year: 2045,
      director: 'Ratish',
      releaseYear:'2095'
    }),
  }),
  getters:{
    getMovies:(state)=>{
      return state.movies;
    }
  },
  actions: {
    async fetchMovies() {
      const data = await fetch('https://www.omdbapi.com/?i=tt3896198&apikey=419f7ddd&id=tt3896198');
     this.movies=await data.json();
    },
  },
});