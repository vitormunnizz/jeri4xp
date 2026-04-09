<template>
  <section id="duvida" class="bg-white min-h-screen p-4 flex items-center justify-center font-sans">
    
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
    question: 'Quanto tempo dura o passeio?', 
    answer: 'Os passeios têm duração média de 6 a 7 horas, incluindo paradas nas principais atrações para descanso, fotos e aproveitamento das lagoas.' 
  },
  { 
    question: 'Qual o melhor tipo de veículo?', 
    answer: 'Depende da experiência que você busca. O buggy é o mais tradicional e confortável, enquanto o quadriciclo é ideal para quem quer mais autonomia e aventura. UTV e 4x4 oferecem mais espaço e uma experiência diferenciada.' 
  },
  { 
    question: 'Precisa reservar com antecedência?', 
    answer: 'Sim, recomendamos reservar com pelo menos 24 horas de antecedência, especialmente em alta temporada, para garantir disponibilidade e melhores horários.' 
  },
  { 
    question: 'Os passeios são seguros?', 
    answer: 'Sim, todos os passeios são realizados com guias experientes e veículos preparados para o terreno, garantindo segurança durante toda a experiência.' 
  },
  { 
    question: 'O que está incluso no passeio?', 
    answer: 'Normalmente o passeio inclui transporte e acompanhamento do guia. Paradas em restaurantes, taxas locais e consumos extras podem ser cobrados à parte.' 
  }
]
</script>