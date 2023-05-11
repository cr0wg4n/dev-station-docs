<template>
  <carousel :items-to-show="1.5">
    <slide v-for="image in images" :key="image">
      <div :style="{height: '250px', width: '90%'}">
        <img :src="image" :alt="image">
      </div>
    </slide>

    <template #addons>
      <navigation />
      <pagination />
    </template>
  </carousel>
</template>

<script setup>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import { ref } from 'vue'

const images = ref([
  '/screenshots/img_1.png',
  '/screenshots/img_2.png',
  '/screenshots/img_3.png',
])
</script>

<style>
.carousel__prev {
  background-color: rgba(255,255,255, 0.9);
  border: 1px solid rgb(136, 136, 136);
  border-radius: 9999px;
}
.carousel__next {
  background-color: rgba(255,255,255, 0.9);
  border: 1px solid rgb(136, 136, 136);
  border-radius: 9999px;
}
</style>