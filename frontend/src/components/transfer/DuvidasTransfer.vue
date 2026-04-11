<template>
  <section id="duvidaTranfer" class="bg-white min-h-screen p-4 flex items-center justify-center font-sans">
    
    <div class="max-w-4xl mx-auto w-full text-gray-800">

      <h2 class="text-3xl md:text-5xl font-extrabold text-center mb-4 text-orange-600">
        Dúvidas Frequentes
      </h2>

      <p class="text-center max-w-2xl mx-auto mb-12 text-lg">
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
    question: 'Como funciona o transfer até Jericoacoara?', 
    answer: 'O transfer é feito em duas etapas: primeiro por estrada asfaltada até Jijoca, e depois em veículos 4x4 pelas dunas até a vila de Jericoacoara.' 
  },
  { 
    question: 'Quanto tempo dura o transfer até Jericoacoara?', 
    answer: 'O trajeto dura em média de 5 a 6 horas saindo de Fortaleza e cerca de 1 hora saindo do Aeroporto de Cruz.' 
  },
  { 
    question: 'O transfer busca no hotel ou aeroporto?', 
    answer: 'Sim, o serviço geralmente inclui busca no hotel em Fortaleza ou diretamente no aeroporto, oferecendo mais comodidade para o viajante.' 
  },
  { 
    question: 'O transfer é compartilhado ou privativo?', 
    answer: 'Existem as duas opções. O compartilhado é mais econômico, enquanto o privativo oferece mais conforto, flexibilidade de horários e exclusividade.' 
  },
  { 
    question: 'O transfer funciona todos os dias?', 
    answer: 'Sim, os transfers operam diariamente, com horários programados. É importante reservar com antecedência para garantir disponibilidade.' 
  }
]
</script>