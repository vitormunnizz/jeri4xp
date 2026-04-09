<script setup>

const navItems = [
  { name: 'Home', link: '/' },
  { name: 'Trajetos', link: '#trajetos' },
  { name: 'Dúvidas', link: '#duvidaTranfer' },
  { name: 'Contato', link: '#contato' },
]
</script>

<template>
  <section class="min-h-screen w-full font-sans bg-white">

    <div class="relative w-full h-140 overflow-hidden">

      <header
        class="absolute w-full top-0 left-0 z-40 p-5 md:px-7 md:py-3 flex justify-between md:items-center items-start text-white">
        <img src="../../assets/logo_jeri4xp.png" alt="Logo Jeri4xp" class="w-14 md:w-16" />

        <nav class="hidden md:block">
          <ul class="flex gap-6 text-sm font-bold uppercase tracking-widest">
            <li v-for="item in navItems" :key="item.name">
              <a :href="item.link" class="hover:text-orange-600 transition-colors">{{ item.name }}</a>
            </li>
          </ul>
        </nav>

        <button @click="isMenuOpen = true" class="md:hidden text-3xl hover:cursor-pointer">☰</button>
      </header>

      <div class="flex h-full bg-black">
        <img src="../../assets/jeri1.webp" class="w-full h-full object-cover opacity-80" />

        <div class="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 z-10">
          <span class="text-orange-600 font-bold uppercase tracking-widest leading-none mb-4">
            Bem-vindo ao Destino Nº 1
          </span>

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

    <main class="p-10 text-center">
      <h2 class="text-2xl font-bold text-gray-800">
        Transfer seguro e confortável para Jericoacoara
      </h2>

      <p class="mt-4 text-gray-500 max-w-2xl mx-auto italic">
        Viaje com tranquilidade do aeroporto ou hotel até Jeri, com motoristas experientes, veículos preparados e
        atendimento de confiança.
      </p>
    </main>

    <div v-if="isMenuOpen"
      class="fixed inset-0 bg-black/98 z-50 flex flex-col items-center justify-center gap-8 text-white uppercase font-bold text-xl">

      <button @click="isMenuOpen = false" class="absolute top-8 right-8 text-5xl hover:cursor-pointer">
        &times;
      </button>

      <a v-for="item in navItems" :key="item.name" :href="item.link" @click="isMenuOpen = false"
        class="text-2xl font-black uppercase italic tracking-tighter hover:text-orange-600 transition-colors hover:cursor-pointer">
        {{ item.name }}
      </a>
    </div>

  </section>
</template>