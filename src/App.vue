<script setup>
import Hero from './components/Hero.vue';
import HomeCards from './components/HomeCards.vue';
import Navbar from './components/Navbar.vue';
import JobListing from './components/JobListing.vue';

</script>

<template>
  <Navbar />
  <Hero />
  <HomeCards />
  <JobListing :limit="3" :showButton="true" />
</template>

