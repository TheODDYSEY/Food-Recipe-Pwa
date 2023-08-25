<template>
  <div class="search wrapper">
   <SearchForm v-on:submitEvent="handleSearch"/>
    <h2>Result for: {{$route.params.id}}</h2>
    <div class="search-result">
      <Recipe 
        v-for="recipe in searchResults"
        :image=recipe.image
        v-bind:key="recipe.id"
        :name=recipe.title
        :id="recipe.id"
        vertical="false"
        :time=recipe.readyInMinutes
        :serving=recipe.servings
      />
    </div>
  </div>
</template>

<script setup>
import Recipe from '../components/RecipeComponent.vue';
import SearchForm from '@/components/SearchForm.vue';
import { ref } from 'vue';
import axios from 'axios';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute()
const router = useRouter()

const searchResults = ref([])
const searchQuery = route.query?.search

const handleSearch = async (searchValue) => {
  router.replace(`/search?search=${searchValue}`)
  const res = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=${searchValue}&addRecipeInformation=true&apiKey=${process.env.VUE_APP_API_KEY}`);
  if (res?.data) searchResults.value = res.data.results
}

if(searchQuery) {
  (async () => {
    const res = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=${searchQuery}&addRecipeInformation=true&apiKey=${process.env.VUE_APP_API_KEY}`);
    if (res?.data) searchResults.value = res.data.results
  })()
}


</script>

<style scoped>
.search {
  margin-bottom: 50px;
}

.search h2 {
  font-size: 32px;
  margin: 30px 0;
}

.search .search-form {
  margin-top: 30px;
}

.search-result {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
}
</style>