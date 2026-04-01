<script setup>
import { ref, onMounted, onUnmounted } from "vue"
// Ajuste de caminho: subindo dois níveis para alcançar a pasta assets
import logo from "../../assets/logo_jeri4xp.png"

const index = ref(0)
const isMenuOpen = ref(false)
const navItems = [
  { name: 'Home', link: '/' },
  { name: 'Lado Leste', link: '#leste' },
  { name: 'Lado Oeste', link: '#oeste' },
  { name: 'Extremo Leste', link: '#extremo' }
]

// Imagens do Banner (Slider)
const slides = [
  { src: new URL("../../assets/jeri1.webp", import.meta.url).href },
  { src: new URL("../../assets/jeri2.webp", import.meta.url).href },
  { src: new URL("../../assets/jeri3.webp", import.meta.url).href }
]

const next = () => index.value = (index.value + 1) % slides.length
const prev = () => index.value = (index.value - 1 + slides.length) % slides.length

let timer
onMounted(() => timer = setInterval(next, 12000)) // Ajustado para 8s para não ser cansativo
onUnmounted(() => clearInterval(timer))

</script>

<template>
  <section class="min-h-screen w-full font-sans bg-white">

    <div class="relative w-full h-140 overflow-hidden">

      <header
        class="absolute w-full top-0 left-0 z-40 p-5 md:px-7 md:py-3 flex justify-between md:items-center items-start text-white">
        <img :src="logo" alt="Logo Jeri4xp" class="w-14 md:w-16" />

        <nav class="hidden md:block">
          <ul class="flex gap-6 text-sm font-bold uppercase tracking-widest">
            <li v-for="item in navItems" :key="item.name">
              <a :href="item.link" class="hover:text-orange-600 transition-colors">{{ item.name }}</a>
            </li>
          </ul>
        </nav>

        <button @click="isMenuOpen = true" class="md:hidden text-3xl hover:cursor-pointer">☰</button>
      </header>

      <div class="flex h-full transition-transform duration-1000 ease-in-out"
        :style="{ transform: `translateX(-${index * 100}%)` }">
        <div v-for="(slide, i) in slides" :key="i" class="min-w-full h-full relative bg-black">
          <img :src="slide.src" class="w-full h-full object-cover opacity-60" alt="Banner Jeri" />

          <div class="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
            <span class="text-orange-600 font-bold uppercase tracking-widest leading-none mb-4">Bem-vindo ao Destino Nº
              1</span>
            <h1 class="text-3xl md:text-6xl font-black uppercase italic tracking-tighter leading-none mb-8">
              Jeri4xp: Sua conexão <br> com o paraíso.
            </h1>
            <a href="https://wa.me/5585999001339" target="_blank"
              class="bg-orange-600 px-10 py-4 rounded-full font-black uppercase text-xs tracking-widest hover:bg-white hover:text-orange-600 transition-all shadow-lg">
              Reservar Agora
            </a>
          </div>
        </div>
      </div>

      <button @click="prev"
        class="absolute left-5 top-1/2 -translate-y-1/2 text-white text-5xl z-20 hover:cursor-pointer">‹</button>
      <button @click="next"
        class="absolute right-5 top-1/2 -translate-y-1/2 text-white text-5xl z-20 hover:cursor-pointer">›</button>

      <div class="absolute bottom-6 w-full flex justify-center gap-2 z-20">
        <button v-for="(_, i) in slides" :key="i" @click="index = i"
          :class="['h-2 rounded-full transition-all', index === i ? 'w-8 bg-orange-500' : 'w-2 bg-white/50']">
        </button>
      </div>
    </div>

    <main class="p-10 text-center">
      <h2 class="text-2xl font-bold text-gray-800">Sua aventura em Jericoacoara começa aqui</h2>
      <p class="mt-4 text-gray-500 max-w-2xl mx-auto italic">
        Turismo com qualidade, aventuras personalizadas e memórias inesquecíveis em Jericoacoara
      </p>
    </main>

    <div v-if="isMenuOpen"
      class="fixed inset-0 bg-black/98 z-50 flex flex-col items-center justify-center gap-8 text-white  uppercase font-bold text-xl">
      <button @click="isMenuOpen = false" class="absolute top-8 right-8 text-5xl hover:cursor-pointer">&times;</button>
      <a v-for="item in navItems" :key="item.name" :href="item.link" @click="isMenuOpen = false"
        class="text-2xl font-black uppercase italic tracking-tighter hover:text-orange-600 transition-colors hover:cursor-pointer">
        {{ item.name }}
      </a>
    </div>


  </section>
</template>