<template>
  <form v-on:submit.prevent="handleSearch" class="search-form">
    <input 
      type="text" 
      name="search" 
      v-model="searchValue"
      placeholder="Search for breakfast, lunch, or dinner recipes..."/>
    <button><PhMagnifyingGlass size="25"/></button>
  </form>
</template>

<script setup>
import {PhMagnifyingGlass} from "@phosphor-icons/vue"
import { ref } from "vue";
import { defineEmits } from "vue";

const searchValue = ref('')
const emit = defineEmits(['submitEvent'])

const handleSearch = () => {
  emit("submitEvent", searchValue.value);
}

</script>

<style scoped>
.search-form {
  background-color: white;
  border-radius: 40px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 500px;
  box-shadow: 0 4px 4px gainsboro;
  border: 1px solid rgb(240, 237, 237);
}

.search-form input {
  height: 60px;
  flex: 1;
  border: none;
  border-bottom-left-radius: inherit;
  border-top-left-radius: inherit;
  font-size: 16px;
  padding: 0 15px;
}

.search-form input::placeholder {
  color: rgb(156, 156, 156);
}

.search-form input:focus {
  outline: none;
}

.search-form button {
  background-color: #2c3e50;
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  box-shadow: none;
  border: none;
  margin-right: 10px;
  cursor: pointer;
}

</style>