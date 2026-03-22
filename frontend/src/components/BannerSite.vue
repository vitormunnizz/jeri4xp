<script setup>
import { ref } from "vue"

const index = ref(0)

const images = [
  new URL("../assets/jeri1.webp", import.meta.url).href,
  new URL("../assets/jeri2.webp", import.meta.url).href,
  new URL("../assets/jeri3.webp", import.meta.url).href
]

function nextSlide() {
  index.value = (index.value + 1) % images.length
}

function prevSlide() {
  index.value = (index.value - 1 + images.length) % images.length
}
</script>

<template>
  <div class="relative w-full mx-auto overflow-hidden">

    <div
      class="flex transition-transform duration-500 ease-in-out"
      :style="{ transform: `translateX(-${index * 100}%)` }"
    >
      <img
        v-for="img in images"
        :key="img"
        :src="img"
        class="flex-shrink-0 w-full h-96 md:h-[500px] object-cover"
        alt="Banner"
      />
    </div>

    <button
      @click="prevSlide"
      class="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white px-4 py-2 rounded-lg z-10"
    >
      ‹
    </button>

    <button
      @click="nextSlide"
      class="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white px-4 py-2 rounded-lg z-10"
    >
      ›
    </button>

  </div>
</template>