<template>
  <div class="py-20">
    <h1 class="text-center font-bold text-lg md:text-2xl py-5">API IMPLEMENTATION DEMO SEARCH UNIVERSITIES</h1>
    <div class="container mx-auto">
      <!-- search input -->
      <div class="flex gap-2 justify-center">
        <input type="text" class="border text-black w-1/2 py-2 rounded px-2" placeholder="Input University Name Here..." v-model="searchQuery" @keyup.enter="searchUniversities" />
        <button class="py-2 px-2 rounded bg-green-500" @click="searchUniversities">Search</button>
      </div>

      <!-- Universities List -->
      <div class="py-10" id="university-list">
        <div v-if="universities.length > 0" class="grid grid-cols-2 md:grid-cols-3 gap-5">
          <div v-for="university in universities" :key="university.name" class="bg-white shadow-md rounded p-4">
            <div class="mt-2 text-black">
              <h2>{{ university.name }}</h2>
              <p>{{ university.country }}</p>
              <p>{{ university.alpha_two_code }}</p>
              <p>
                <a :href="university.web_pages[0]" target="_blank">{{ university.web_pages[0] }}</a>
              </p>
              <p>{{ university.domains[0] }}</p>
            </div>
          </div>
        </div>
        <div v-else>
          <h1 v-if="errorMessage" class="text-center text-red-600">{{ errorMessage }}</h1>
          <h1 v-else class="text-center">No Universities Found</h1>
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
      universities: [],
      errorMessage: "",
    };
  },
  methods: {
    async searchUniversities() {
      try {
        const response = await axios.get(`/api?country=${this.searchQuery}`);
        console.log(response.data);
        this.universities = response.data;
      } catch (error) {
        this.errorMessage = "error while fetching data";
        console.log("error dibagian front", error);
      }
    },
  },
};
</script>
