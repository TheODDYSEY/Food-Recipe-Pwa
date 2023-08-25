<template>
  <Hero />
  <div class="wrapper">
    <div class="popular-recipes-container">
      <h2>Popular Recipes</h2>
      <div class="popular-recipes">
        <Recipe 
          scroll=true
          v-for="recipe in popularRecipes"
          v-bind:key="recipe.id"
          :id=recipe.id
          :image=recipe.image
          :name=recipe.title
          :time=recipe.readyInMinutes
          :serving=recipe.servings
        />
      </div>
    </div>

    <div class="recently-viewed-container" v-if="recentlyViewed">
      <h2>Recently viewed</h2>
      <div class="recently-viewed">
        <Recipe 
          v-for="recipe in recentlyViewed"
          :image=recipe.image
          :id=recipe.id
          v-bind:key="recipe.id"
          :name=recipe.title
          vertical="false"
          :time=recipe.readyInMinutes
          :serving=recipe.servings
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import Hero from '../components/HeroComponent.vue'
import Recipe from '../components/RecipeComponent.vue'
import axios from 'axios';
import {ref} from "vue"

const popularRecipes = ref([])
const recentlyViewed = JSON.parse(localStorage.getItem('recently-viewed'));

(async() => {
  const res = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?number=8&sort=popularity&addRecipeInformation=true&apiKey=${process.env.VUE_APP_API_KEY}`);
  if (res?.data) popularRecipes.value = res.data.results
})()

</script>

<style>
  .popular-recipes-container {
    margin-top: 30px;
  }

  .popular-recipes-container h2 {
    margin-bottom: 20px;
  }

  .popular-recipes {
    overflow-x: scroll;
    display: flex;
    gap: 25px;
    scrollbar-width: 0;
    padding-bottom: 20px;
    padding-top: 10px;
    min-height: 400px;
  }

  .popular-recipes::-webkit-scrollbar {
    display: none;
  }

  .recently-viewed-container {
    margin-top: 50px;
    margin-bottom: 30px;
  }

  .recently-viewed-container h2 {
    margin-bottom: 30px;
  }

  .recently-viewed {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
  }
</style>
