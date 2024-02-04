<template>
  <div class="category">
    <img :src="image" />
    <h3>{{ name }}</h3>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
defineProps(["image", "name"]);
</script>

<style scoped>
.category {
  background-color: white;
  border-radius: 10px;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
  box-shadow: 6px 6px 19px 1px rgba(151, 169, 181, 0.37);
  -webkit-box-shadow: 6px 6px 19px 1px rgba(151, 169, 181, 0.37);
  -moz-box-shadow: 6px 6px 19px 1px rgba(151, 169, 181, 0.37);
  margin-bottom: 30px;
  cursor: pointer;
}

.category img {
  object-fit: cover;
  width: 150px;
  height: 150px;
  border-radius: 100%;
  margin-left: -35px;
  margin-top: -30px;
  box-shadow: 0 4px 6px gray;
}

.category h3 {
  white-space: nowrap;
  font-size: 16px;
}
</style>
