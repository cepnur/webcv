<template>
  <div class="py-20">
    <h1 class="text-center font-bold text-lg md:text-2xl my-5">API IMPLEMENTATION DEMO SEARCH MOVIE</h1>
    <div class="container mx-auto">
      <!--search input-->
      <div class="flex justify-center mb-4">
        <input type="text" class="border text-black border-gray-200 rounded p-2 w-1/2" placeholder="Input Movie Title Here..." v-model="searchQuery" @keyup.enter="searchMovies" />
        <button class="ml-2 bg-green-500 text-white p-2 rounded" @click="searchMovies">Search</button>
      </div>

      <!-- Movie List -->
      <div class="" id="movie-list">
        <div v-if="movies.length > 0" class="grid grid-cols-2 md:grid-cols-3 gap-5">
          <div v-for="movie in movies" :key="movie.imdbID" class="bg-white shadow-md rounded p-4">
            <img :src="movie.Poster" class="w-full h-auto rounded" alt="Movie Poster" />
            <div class="mt-2">
              <h5 class="md:text-xl text-lg font-semibold text-gray-600">{{ movie.Title }}</h5>
              <p class="text-gray-500">{{ movie.Year }}</p>
              <a href="" class="text-blue-500 mt-2 inline-block" @click.prevent="getMoviesDetails(movie.imdbID)">See Detail</a>
            </div>
          </div>
        </div>
        <div v-else>
          <h1 v-if="errorMessage" class="text-center text-red-500">{{ errorMessage }}</h1>
          <h1 v-else class="text-center">No Movies Found</h1>
        </div>
      </div>
      <!-- Modal Movies Detail -->
      <div v-if="movieDetail" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div class="bg-white p-6 rounded-lg relative w-3/4 max-w-xl">
          <button @click="movieDetail = null" class="absolute bottom-4 right-4 font-bold bg-green-400 px-1 rounded">Close</button>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <img :src="movieDetail.Poster" class="w-full h-auto rounded" alt="Movie Poster" />
            </div>
            <div class="sm:col-span-2">
              <ul class="list-none text-black">
                <li class="text-md md:text-xl font-bold">{{ movieDetail.Title }}</li>
                <li class="text-xs md:text-xl">Released: {{ movieDetail.Released }}</li>
                <li class="text-xs md:text-xl">Genre: {{ movieDetail.Genre }}</li>
                <li class="text-xs md:text-xl">Director: {{ movieDetail.Director }}</li>
                <li class="text-xs md:text-xl">Actors: {{ movieDetail.Actors }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      searchQuery: "",
      movies: [],
      movieDetail: null,
      errorMessage: "",
    };
  },
  methods: {
    async searchMovies() {
      try {
        const response = await axios.get("https://www.omdbapi.com", {
          params: {
            apikey: "2608c62f",
            s: this.searchQuery,
          },
        });
        if (response.data.Response === "True") {
          this.movies = response.data.Search;
          this.errorMessage = "";
        } else {
          this.movies = [];
          this.errorMessage = response.data.Error;
        }
      } catch (error) {
        console.error(error);
      }
    },
    async getMoviesDetails(id) {
      try {
        const response = await axios.get("https://www.omdbapi.com", {
          params: {
            apikey: "2608c62f",
            i: id,
          },
        });
        if (response.data.Response === "True") {
          this.movieDetail = response.data;
        }
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
