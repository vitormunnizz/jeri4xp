<template>
  <section id="duvidaHospedagem" class="bg-white min-h-screen p-4 flex items-center justify-center font-sans">
    
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
    question: 'Qual a melhor região para se hospedar em Jericoacoara?', 
    answer: 'O ideal é ficar próximo ao centrinho da vila para ter fácil acesso a restaurantes, lojas, praia e vida noturna, sem precisar de grandes deslocamentos.' 
  },
  { 
    question: 'É melhor ficar em pousada ou hotel em Jericoacoara?', 
    answer: 'Depende do seu perfil. As pousadas costumam oferecer uma experiência mais aconchegante e charmosa, enquanto hotéis podem ter mais estrutura e serviços.' 
  },
  { 
    question: 'Preciso reservar hospedagem com antecedência?', 
    answer: 'Sim, principalmente em alta temporada, feriados e férias. Reservar antes garante melhores preços, localização e disponibilidade.' 
  },
  { 
    question: 'Jericoacoara tem opções de hospedagem para famílias?', 
    answer: 'Sim, há pousadas, hotéis e casas completas ideais para famílias, com quartos amplos, áreas de lazer e mais conforto para crianças.' 
  },
  { 
    question: 'A hospedagem fica perto dos passeios?', 
    answer: 'Sim, a maioria das hospedagens na vila tem fácil acesso aos pontos de saída dos passeios e transfers, facilitando bastante sua experiência.' 
  }
]
</script>