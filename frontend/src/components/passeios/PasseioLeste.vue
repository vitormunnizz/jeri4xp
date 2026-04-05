<template>
  <section class="relative bg-slate-800 min-h-screen w-full p-10 font-sans items-center justify-center flex">

    <div class="max-w-6xl mx-auto relative z-10">

      <div class="bg-orange-600  rounded-4xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
        
        <div class="md:w-5/12 relative">
          <img 
            src="../../assets/jeri1.webp" 
            alt="Passeio Lado Leste Jericoacoara"
            class="w-full h-64 md:h-full object-cover" 
          />
        </div>

        <div class="md:w-7/12 p-8 md:p-14 flex flex-col justify-center">
          
          <h1 class="text-3xl md:text-4xl font-black text-white leading-tight mb-4">
            <strong>Passeio <span class="text-slate-800">Lado Leste</span></strong>
          </h1>

          <div class="text-white mb-4 text-lg leading-relaxed space-y-2">
            <p>
              Nosso roteiro começa com uma visita à famosa <strong><span class="text-slate-800">Árvore da Preguiça</span></strong>, esculpida pelos ventos. Seguimos em direção à <strong><span class="text-slate-800">Praia do Preá</span></strong>, portal de entrada para as belezas da região.
            </p>
            <p>
              A aventura continua no <strong><span class="text-slate-800">Buraco Azul</span></strong>, com suas águas de um azul turquesa impressionante, seguido por momentos de puro relaxamento nas redes dentro d'água na <strong><span class="text-slate-800">Lagoa do Paraíso</span></strong> e na charmosa <strong><span class="text-slate-800">Lagoa Azul</span></strong>.
            </p>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            
            <div v-for="item in ['Árvore da Preguiça', 'Lagoa do Paraíso', 'Buraco Azul', 'Lagoa Azul']" 
                 :key="item" 
                 class="flex items-center gap-3">
                <!-- Ícone de Destino/Localização -->
                <svg class="w-5 h-5 text-slate-800" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              <span class="font-bold text-white tracking-tight">{{ item }}</span>
            </div>

          </div>

          <div class="flex flex-col sm:flex-row items-center gap-6 pt-4 border-t border-white">
            <a href="https://wa.me/5585999001339" target="_blank"
               class="bg-slate-800 hover:bg-white hover:text-slate-800 text-white mt-4 font-bold px-8 py-4 rounded-2xl shadow-lg transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto text-center flex items-center justify-center gap-2">
                Reservar agora pelo WhatsApp
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
            </a>
            
            <div class="flex flex-col items-center sm:items-start mt-4">
              <span class="text-xs text-white uppercase font-bold">Saídas diárias</span>
              <span class="text-lg font-bold text-slate-800 italic">Vagas limitadas!</span>
            </div>
          </div>

        </div>
      </div>
      
    </div>
  </section>
</template>