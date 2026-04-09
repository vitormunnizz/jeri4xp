<template>
  <section class="bg-white min-h-screen p-4 flex items-center justify-center font-sans">
    
    <div class="max-w-4xl mx-auto w-full">

      <h2 class="text-3xl md:text-5xl font-extrabold text-center mb-4 text-orange-600">
        Dúvidas Frequentes
      </h2>

      <p class="text-center text-gray-600 max-w-2xl mx-auto mb-12 text-lg">
        Tire suas principais dúvidas antes de reservar e aproveite sua experiência em Jericoacoara com total tranquilidade.
      </p>

      <div class="space-y-4">

        <div 
          v-for="(faq, index) in faqs" 
          :key="index" 
          class="group bg-white rounded-2xl shadow-sm border border-orange-100 overflow-hidden transition-all duration-300 hover:shadow-md"
        >
          
          <button 
            @click="expandedFaq = expandedFaq === index ? null : index" 
            class="w-full px-6 py-5 flex items-center justify-between text-left"
          >
            <span class="font-semibold text-gray-800 group-hover:text-orange-600 transition">
              {{ faq.question }}
            </span>

            <svg 
              :class="['w-5 h-5 text-orange-600 transition-transform duration-300', expandedFaq === index ? 'rotate-180' : '']" 
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
            </svg>
          </button>

          <div 
            v-if="expandedFaq === index" 
            class="px-6 pb-5 text-gray-600 leading-relaxed animate-fade-in"
          >
            {{ faq.answer }}
          </div>

        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const expandedFaq = ref(null)

const faqs = [
  { 
    question: 'Quanto tempo dura o transfer até Jericoacoara?', 
    answer: 'O tempo médio é de 5 a 6 horas saindo de Fortaleza, incluindo o trajeto até Jijoca e a travessia final em veículo 4x4 até a vila de Jericoacoara.' 
  },
  { 
    question: 'Precisa reservar o transfer com antecedência?', 
    answer: 'Sim, recomendamos reservar com antecedência, principalmente em feriados e alta temporada, para garantir disponibilidade e melhores horários.' 
  },
  { 
    question: 'O transfer busca no hotel ou aeroporto?', 
    answer: 'Sim, a maioria dos serviços oferece embarque direto no aeroporto ou na sua hospedagem em Fortaleza, trazendo mais comodidade para sua viagem.' 
  },
  { 
    question: 'É seguro viajar de transfer para Jericoacoara?', 
    answer: 'Sim, os transfers são realizados por motoristas experientes e veículos preparados para o percurso, garantindo segurança durante toda a viagem.' 
  },
  { 
    question: 'O que está incluso no transfer?', 
    answer: 'Geralmente inclui transporte completo até Jericoacoara, com troca para 4x4 em Jijoca. Paradas no trajeto podem ocorrer, mas alimentação e taxas locais não estão inclusas.' 
  }
]
</script>