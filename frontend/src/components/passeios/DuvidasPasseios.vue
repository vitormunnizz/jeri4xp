<template>
  <section id="duvidaPasseio" class="bg-white min-h-screen p-4 flex items-center justify-center font-sans">
    
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
    question: 'Qual o passeio mais procurado em Jericoacoara?', 
    answer: 'Os passeios mais procurados são o Lado Leste, com paradas na Lagoa do Paraíso e Árvore da Preguiça, e o Lado Oeste, com Tatajuba e travessia de balsa. Ambos oferecem paisagens incríveis e experiências únicas.' 
  },
  { 
    question: 'Quanto tempo dura o passeio?', 
    answer: 'A maioria dos passeios dura entre 6 e 8 horas, dependendo do roteiro escolhido, do tempo de parada em cada atração e das condições do trajeto.' 
  },
  { 
    question: 'Preciso reservar o passeio com antecedência?', 
    answer: 'Sim, especialmente em finais de semana, feriados e alta temporada. Reservar antes garante sua vaga, melhores horários e mais opções de veículo.' 
  },
  { 
    question: 'Quais passeios são indicados para crianças e famílias?', 
    answer: 'Passeios de buggy ou 4x4 privativo são os mais indicados para famílias, pois oferecem mais conforto, segurança e flexibilidade nas paradas.' 
  },
  { 
    question: 'O que levar para o passeio em Jericoacoara?', 
    answer: 'Leve protetor solar, roupa leve, óculos escuros, chapéu, água, celular carregado para fotos e dinheiro ou cartão para consumos extras durante as paradas.' 
  }
]
</script>