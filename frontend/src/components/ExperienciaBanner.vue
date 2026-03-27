<template>
  <section id="experiencia" class="min-h-screen w-full flex flex-col items-center justify-center bg-gray-50 py-20 px-5">
    
    <h1 class="text-3xl md:text-5xl font-black tracking-tighter mb-12 uppercase text-gray-900 text-center">
      Nossas Experiências
    </h1>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
      
      <div class="group relative h-80 rounded-3xl flex flex-col justify-end items-start p-10 overflow-hidden bg-black shadow-xl">
        <img src="../assets/passeio.webp" class="absolute inset-0 w-full h-full object-cover opacity-70 transition-all duration-700 group-hover:scale-110 group-hover:opacity-50" alt="Passeios">
        
        <div class="relative z-10">
          <h2 class="text-white text-4xl font-black mb-4 uppercase italic tracking-tighter">Passeios</h2>
          <button class="bg-orange-600 text-white py-3 px-8 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300">
            Explorar ->
          </button>
        </div>
      </div>

      <div class="group relative h-80 rounded-3xl flex flex-col justify-end items-start p-10 overflow-hidden bg-black shadow-xl">
        <img src="../assets/hotel.webp" class="absolute inset-0 w-full h-full object-cover opacity-70 transition-all duration-700 group-hover:scale-110 group-hover:opacity-50" alt="Hospedagem">
        
        <div class="relative z-10">
          <h2 class="text-white text-4xl font-black mb-4 uppercase italic tracking-tighter">Hospedagem</h2>
          <button class="bg-orange-600 text-white py-3 px-8 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300">
            Explorar ->
          </button>
        </div>
      </div>

      <div class="group relative h-80 rounded-3xl flex flex-col justify-end items-start p-10 overflow-hidden bg-black shadow-xl">
        <img src="../assets/transfer.webp" class="absolute inset-0 w-full h-full object-cover opacity-70 transition-all duration-700 group-hover:scale-110 group-hover:opacity-50" alt="Transfer">
        
        <div class="relative z-10">
          <h2 class="text-white text-4xl font-black mb-4 uppercase italic tracking-tighter">Transfer</h2>
          <button class="bg-orange-600 text-white py-3 px-8 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300">
            Explorar
          </button>
        </div>
      </div>

      <div class="group relative h-80 rounded-3xl flex flex-col justify-end items-start p-10 overflow-hidden bg-black shadow-xl">
        <img src="../assets/aula.webp" class="absolute inset-0 w-full h-full object-cover opacity-70 transition-all duration-700 group-hover:scale-110 group-hover:opacity-50" alt="Aulas">
        
        <div class="relative z-10">
          <h2 class="text-white text-4xl font-black mb-4 uppercase italic tracking-tighter">Aulas</h2>
          <button class="bg-orange-600 text-white py-3 px-8 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300">
            Explorar
          </button>
        </div>
      </div>

    </div>
  </section>
</template>