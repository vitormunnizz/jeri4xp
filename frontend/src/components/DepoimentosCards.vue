<script setup>
import { ref } from 'vue';

const testimonials = ref([
  {
    id: 1,
    name: 'Axelle Rulfi',
    role: 'Suíça',
    content: "I found out about Jeri 4XP through a friend's recommendation and it was all great. Kitesurfing and sightseeing, it was all perfect!",
    avatar: 'https://i.pravatar.cc/150?u=axelle'
  },
  {
    id: 2,
    name: 'Remy Sanchez',
    role: 'França',
    content: "Service excellent, les prestations ont même dépassé mes attentes. J'ai testé le wingfoil et fait une excursion en quad dans les dunes, inoubliable!",
    avatar: 'https://i.pravatar.cc/150?u=remy'
  },
  {
    id: 3,
    name: 'David Kennedy',
    role: 'Londres, Reino Unido',
    content: "I had the best experiences in Jericoacoara. Booking everything through Jeri 4XP was the best option.",
    avatar: 'https://i.pravatar.cc/150?u=david'
  },
  {
    id: 4,
    name: 'Gabi',
    role: 'Fortaleza, Brasil',
    content: "Minha experiência com a Jeri 4XP foi fantástica! A equipe é super profissional e atenciosa, me dando todo o suporte necessário. Já quero voltar!",
    avatar: 'https://i.pravatar.cc/150?u=gabi'
  },
  {
    id: 5,
    name: 'Lilian Maria',
    role: 'São Paulo, Brasil',
    content: "Maravilhoso atendimento, excelente, adorei o guia Adriano e Vinicius hyper atencioso. Os passeios foram incriveis, quadriciclo, jet ski e otimas lembranças.",
    avatar: 'https://i.pravatar.cc/150?u=lilian'
  },
  {
    id: 6,
    name: 'Vitor Muniz',
    role: 'Sobral, Brasil',
    content: "Todas as vezes que for em jericoacoara, vou novamente com a Jeri4xp!",
    avatar: 'https://i.pravatar.cc/150?u=vitor'
  }
]);
</script>

<template>
  <section class="min-h-screen bg-white p-4 font-sans" id="depoimentos">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-8">
        <h2 class="text-2xl md:text-4xl font-black text-black">
          O que dizem sobre a Jeri 4XP
        </h2>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4 italic">
        <div 
          v-for="item in testimonials" 
          :key="item.id"
          class="bg-white p-4 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full">
          <div class="flex justify-between items-start mb-4">
            <span class="text-orange-500 text-4xl font-serif leading-none">“</span>
            <div class="flex gap-1">
              <template v-for="i in 5" :key="i">
                <svg class="w-4 h-4 text-orange-400 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </template>
            </div>
          </div>
          
          <p class="text-slate-700 text-lg leading-relaxed mb-4">
            {{ item.content }}
          </p>

          <div class="flex items-center gap-4 pt-6 border-t border-slate-50 mt-auto">
            <img 
              :src="item.avatar" 
              :alt="item.name" 
              class="w-14 h-14 rounded-full object-cover border-2 border-orange-100 ring-4 ring-orange-50"
            />
            <div class="not-italic">
              <h4 class="font-extrabold text-slate-900 text-base leading-tight">{{ item.name }}</h4>
              <div class="flex items-center text-slate-500 text-xs mt-1">
                <svg class="w-3 h-3 mr-1 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {{ item.role }}
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>