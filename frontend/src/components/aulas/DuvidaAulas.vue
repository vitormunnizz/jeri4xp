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
    question: 'Preciso ter experiência para fazer aulas de esportes na praia?', 
    answer: 'Não. As aulas são indicadas tanto para iniciantes quanto para quem já pratica e quer evoluir. Os instrutores adaptam o ritmo conforme seu nível.' 
  },
  { 
    question: 'Quais esportes posso aprender em Jericoacoara?', 
    answer: 'As modalidades mais procuradas são kitesurf, windsurf, surf e stand up paddle. Jericoacoara tem condições ideais de vento e mar para aprender com segurança. :contentReference[oaicite:0]{index=0}' 
  },
  { 
    question: 'Quanto tempo dura uma aula?', 
    answer: 'A duração varia conforme a modalidade. Aulas avulsas costumam durar de 1 a 3 horas, enquanto cursos completos de kitesurf geralmente acontecem em 3 dias, com cerca de 3 horas por dia. :contentReference[oaicite:1]{index=1}' 
  },
  { 
    question: 'Os equipamentos estão inclusos na aula?', 
    answer: 'Na maioria das escolas, sim. Os equipamentos de segurança e prática costumam estar inclusos, garantindo mais conforto para quem está começando. :contentReference[oaicite:2]{index=2}' 
  },
  { 
    question: 'As aulas são seguras?', 
    answer: 'Sim. As aulas são acompanhadas por instrutores experientes, com foco em segurança, teoria básica, uso correto dos equipamentos e adaptação às condições do mar e do vento. :contentReference[oaicite:3]{index=3}' 
  }
]
</script>