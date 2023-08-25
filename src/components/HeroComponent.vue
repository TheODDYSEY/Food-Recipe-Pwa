<template>
  <div class="hero">
    <img src="../assets/rice-dish.png"/>
    <img src="../assets/orange-dish.png"/>
    <img src="../assets/egg-dish.png"/>
    <div class="hero-content wrapper">
      <div>
        <h3>Welcome</h3>
        <h1>Your Culinary Journey Begins Here</h1>
      </div>
      <SearchForm v-on:submitEvent="(searchvalue) => $router.push(`/search?search=${searchvalue}`)" />
    </div>
  </div>
</template>

<script setup>
import SearchForm from './SearchForm.vue';
</script>

<style scoped>
.hero {
  width: 100%;
  height: 70vw;
  background-color: white;
  min-height:400px;
  max-height: 600px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content:center;
}

.hero img {
  position: absolute;
}

.hero img:nth-child(1) {
  top: -150px;
  left: -200px;
}

.hero img:nth-child(2) {
  width: 320px;
  top: -200px;
  right: -200px;
}

.hero img:nth-child(3) {
  bottom: -127px;
  width: 300px;
  height: 300px;
  right: -100px;
}

.hero-content {
  z-index: 100;
}

.hero-content h1 {
  font-size: 42px;
  margin-bottom: 30px;
}

.hero-content h3 {
  color: rgb(181, 186, 189);
  font-weight: 500;
  margin-bottom: 10px;
}

@media (min-width: 425px) {
  .hero img:nth-child(2) {
    width: 350px;
  }
}

@media (min-width: 768px) {
  .hero img:nth-child(1) {
    top: -243px;
    width: 500px;
    object-fit: contain;
  }

  .hero img:nth-child(2) {
    width: initial;
  }
}
</style>
