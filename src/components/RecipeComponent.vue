<template>
  <div :class="{'recipe--s': scroll, 'recipe--ns': !scroll}" class="recipe" v-on:click="$router.push(`recipe/${id}`)">
    <img :src="image"/>
    <div class="recipe__info">
      <h3>{{name}}</h3>
      <div>
        <span><PhTimer size="15" weight="fill"/> {{time}} min</span>
        <span><PhUser size="15" weight="fill"/> {{ serving }} Serving</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import {PhTimer, PhUser} from "@phosphor-icons/vue"
import {defineProps} from "vue"

defineProps(['name', 'id', 'time', 'serving', 'image', 'scroll'])
</script>

<style scoped>
  .recipe {
    border-radius: 20px;
    background-color: white;
    padding: 20px;
    cursor: pointer;
  }

  .recipe--s {
    padding: 25px;
    width: 220px;
  }

  .recipe--ns {
    margin-top: 20px;
  }

  .recipe {
    background-color: white;
  }

  .recipe:hover {
    box-shadow: 6px 6px 19px 1px rgba(151,169,181,0.37);
-webkit-box-shadow: 6px 6px 19px 1px rgba(151,169,181,0.37);
-moz-box-shadow: 6px 6px 19px 1px rgba(151,169,181,0.37);
  }

  .recipe img {
    width: 180px;
    height: 180px;
    object-fit: cover;
    border-radius: 100%;
    box-shadow: 0 4px 6px gray;
    margin-bottom: 10px;
  }

  .recipe--s img {
    margin-right: -60px;
  }

  .recipe--ns img {
    margin-top: -50px;
  }

  .recipe h3 {
    margin-bottom: 10px;
  }

  .recipe__info > div{
    font-size: 14px;
    display: flex;
    gap: 10px;
    justify-content: center;
  }

  .recipe__info > div > span {
    display: flex;
    align-items: center;
    white-space: nowrap;
  }

  .recipe__info > div > span svg {
    margin-right: 5px;
  }
</style>