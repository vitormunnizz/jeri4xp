<script setup>
import { ref, onMounted, onUnmounted } from "vue"
import logo from "../assets/logo_jeri4xp.png"

const index = ref(0)
const isMenuOpen = ref(false)
const navItems = ['História', 'Experiência', 'Depoimentos', 'Contato']

const slides = [
  { src: new URL("../assets/jeri1.webp", import.meta.url).href},
  { src: new URL("../assets/jeri2.webp", import.meta.url).href},
  { src: new URL("../assets/jeri3.webp", import.meta.url).href}
]

const next = () => index.value = (index.value + 1) % slides.length
const prev = () => index.value = (index.value - 1 + slides.length) % slides.length

let timer
onMounted(() => timer = setInterval(next, 10000))
onUnmounted(() => clearInterval(timer))
</script>

<template>
  <div class="min-h-screen w-full font-sans bg-white">
    
    <section class="relative w-full h-140 overflow-hidden">
      
      <header class="absolute w-full top-0 left-0 z-40 p-5 md:px-7 md:py-3 flex justify-between md:items-center items-start text-white">
        <img :src="logo" alt="Logo" class="w-16 md:w-16" />
        
        <nav class="hidden md:block">
          <ul class="flex gap-6 text-sm font-bold uppercase tracking-widest">
            <li>
              <a href="#historia" class="hover:text-orange-500 transition-colors">História</a>
            </li>
            <li>
              <a href="#" class="hover:text-orange-500 transition-colors">Experiência</a>
            </li>
            <li>
              <a href="#" class="hover:text-orange-500 transition-colors">Depoimentos</a>
            </li>
            <li>
              <a href="#" class="hover:text-orange-500 transition-colors">Contato</a>
            </li>
          </ul>
        </nav>

        <button @click="isMenuOpen = true" class="md:hidden text-3xl">☰</button>
      </header>

      <div class="flex h-full transition-transform duration-700 ease-in-out" :style="{ transform: `translateX(-${index * 100}%)` }">
        <div v-for="(slide, i) in slides" :key="i" class="min-w-full h-full relative">
          <img :src="slide.src" class="w-full h-full object-cover" alt="Imagem do Banner" />
          
          <div class="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
            <h1 class="text-2xl md:text-4xl font-black uppercase drop-shadow-2xl tracking-widest">
              Jeri4xp sua conexão com o paraíso.
            </h1>
            <button class="mt-6 bg-orange-600 px-8 py-3 rounded font-bold uppercase hover:bg-orange-700 transition-all hover:cursor-pointer">
              Saiba Mais
            </button>
          </div>
        </div>
      </div>

      <button @click="prev" class="absolute left-5 top-1/2 -translate-y-1/2 text-white text-5xl z-20 hover:cursor-pointer">‹</button>
      <button @click="next" class="absolute right-5 top-1/2 -translate-y-1/2 text-white text-5xl z-20 hover:cursor-pointer">›</button>

      <div class="absolute bottom-6 w-full flex justify-center gap-2 z-20">
        <button 
          v-for="(_, i) in slides" :key="i"
          @click="index = i"
          :class="['h-2 rounded-full transition-all', index === i ? 'w-8 bg-orange-500' : 'w-2 bg-white/50']"
        ></button>
      </div>
    </section>

    <div v-if="isMenuOpen" class="fixed inset-0 bg-black/95 z-50 flex flex-col items-center justify-center gap-8 text-white uppercase font-bold text-xl">
      <button @click="isMenuOpen = false" class="absolute top-6 right-8 text-4xl">&times;</button>
      <a v-for="item in navItems" :key="item" href="#" @click="isMenuOpen = false">{{ item }}</a>
    </div>

    <main class="p-10 text-center">
      <h2 class="text-2xl font-bold text-gray-800">Sua aventura em Jericoacoara começa aqui</h2>
      <p class="mt-4 text-gray-500 max-w-2xl mx-auto italic">
        Turismo com qualidade, aventuras personalizadas e memórias inesquecíveis em Jericoacoara
      </p>
    </main>

  </div>
</template>