<template>
  <section class="bg-white min-h-screen p-4 flex items-center justify-center font-sans">
    
    <div class="max-w-6xl mx-auto">

      <h2 class="text-3xl md:text-5xl font-extrabold text-center mb-4 text-orange-600">
        Escolha Como Você Quer Explorar Jeri
      </h2>

      <p class="text-center text-gray-800 max-w-2xl mx-auto mb-12 text-lg">
        Cada tipo de veículo oferece uma experiência diferente. 
        Seja para quem busca conforto, aventura ou exclusividade, 
        temos a opção ideal para tornar seu passeio ainda mais especial.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        <div 
          v-for="vehicle in vehicleTypes" 
          :key="vehicle.name" 
          class="group p-8 rounded-3xl text-center shadow-sm hover:shadow-xl transition-all duration-300 border border-orange-600 hover:-translate-y-2">
          
          <div class="text-5xl mb-4">
            {{ vehicle.icon }}
          </div>

          <h3 class="text-xl font-bold text-orange-600 mb-3">
            {{ vehicle.name }}
          </h3>

          <p class="text-gray-800 text-sm leading-relaxed">
            {{ vehicle.description }}
          </p>

        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
const vehicleTypes = [
  { 
    name: 'Buggy', 
    description: 'O clássico de Jericoacoara. Ideal para quem busca conforto, segurança e um passeio completo pelas principais atrações.', 
    icon: '🚙' 
  },
  { 
    name: 'Quadriciclo', 
    description: 'Perfeito para quem quer mais liberdade e aventura, pilotando seu próprio veículo pelas dunas e trilhas.', 
    icon: '🏍️' 
  },
  { 
    name: 'UTV', 
    description: 'Uma experiência moderna e mais robusta, combinando conforto com adrenalina em terrenos variados.', 
    icon: '🚗' 
  },
  { 
    name: '4x4', 
    description: 'Opção ideal para grupos ou famílias, oferecendo espaço, estabilidade e muito conforto durante todo o passeio.', 
    icon: '🛻' 
  },
];
</script>