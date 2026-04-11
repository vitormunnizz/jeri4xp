<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

const navItems = [
  { name: 'Home', link: '/' },
  { name: 'Visão Geral', link: '#geralHospedagem' },
  { name: 'Onde se Hospedar', link: '#localizacoes' },
  { name: 'Tipos de Hospedagem', link: '#tipos' },
  { name: 'Dúvidas', link: '#duvidaHospedagem' },
  { name: 'Contato', link: '#contato' },
]

const footerTitulo = [
  { name: 'Titulo', describe: 'Descubra os Melhores Passeios em Jericoacoara' },
]

const footerTexto = [
  { name: 'Text', describe: 'Explore lagoas cristalinas, dunas impressionantes e paisagens únicas com total conforto e segurança.' },
]

</script>

<template>
  <section class="min-h-screen w-full font-sans bg-white items-center justify-center text-center">
    <div class="relative w-full h-140 overflow-hidden text-white uppercase font-bold tracking-widest text-shadow-md">
      <header class="absolute w-full flex justify-between z-50 px-10 py-2.5 md:items-center items-start">
        <img src="../../assets/logo_jeri4xp.png" alt="Logo Jeri4xp" class="w-25" />

        <nav class="hidden md:block">
          <ul class="flex gap-10 text-lg">
            <li v-for="item in navItems" :key="item.name">
              <a :href="item.link" class="hover:text-orange-600">{{ item.name }}</a>
            </li>
          </ul>
        </nav>

        <button @click="isMenuOpen = !isMenuOpen" class="md:hidden mt-2.5 text-3xl hover:cursor-pointer">☰</button>
      </header>

      <div v-if="isMenuOpen" class="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center gap-8 font-bold">
        <button @click="isMenuOpen = false" class="absolute top-8 right-10 text-4xl hover:cursor-pointer">x</button>

        <a v-for="item in navItems" :key="item.name" :href="item.link" @click="isMenuOpen = false" class="text-2xl font-black tracking-tighter hover:text-orange-600 transition-all hover:cursor-pointer">
          {{ item.name }}
        </a>
      </div>

      <main class="flex h-full bg-black">
        <img src="../../assets/jeri1.webp" class="w-full h-full object-cover opacity-85" />

        <div class="absolute inset-0 z-25 flex flex-col items-center justify-center">
          <span class="text-orange-600 mb-2">
            Bem-vindo ao Destino Nº 1
          </span>

          <h1 class="text-4xl md:text-6xl font-black italic tracking-tighter mb-4">
            Jeri4xp: Sua conexão <br> com o paraíso.
          </h1>

          <a href="https://wa.me/5585999001339" target="_blank"
            class="bg-orange-600 px-10 py-4 rounded-full text-xs hover:bg-white hover:text-orange-600 transition-all shadow-lg">
            Reservar Agora
          </a>
        </div>
      </main>
    </div>

    <footer class="p-10 text-gray-800">
      <h2 v-for="item in footerTitulo" :key="item.name" class="text-2xl font-bold">
        {{ item.describe }}
      </h2>

      <p v-for="item in footerTexto" :key="item.name" class="mt-4 text-gray-600 max-w-2xl mx-auto italic">
        {{ item.describe }}
      </p>
    </footer>

  </section>
</template>