<template>
    <!-- Fundo laranja principal -->
    <section
        class="relative bg-orange-600 min-h-screen w-full p-4 font-sans flex flex-col items-center justify-center overflow-hidden mt-6 md:mt-0">

        <!-- Cabeçalho Lado Oeste -->
        <div class="text-center mb-8 relative z-10 mt-6 md:mt-2">
            <span
                class="inline-block px-5 py-1.5 rounded-full bg-white text-orange-600 text-sm md:text-xs font-black uppercase tracking-widest m-2 shadow-lg">
                Roteiro Lado Oeste
            </span>

            <h2 class="text-white text-4xl md:text-5xl font-black tracking-tighter leading-none mb-2 drop-shadow-md">
                Dunas <span class="text-slate-800">Gigantes</span> & Mangue <span class="text-slate-800">Selvagem</span>
            </h2>

            <p class="text-white text-base font-medium tracking-wide mx-auto leading-relaxed">
                Dos cavalos-marinhos no Rio Guriú ao relaxo total nas redes da Lagoa da Torta.
            </p>
        </div>

        <!-- Card Lado Oeste (Imagem na Direita) -->
        <div class="max-w-5xl mx-auto relative z-10 w-full">

            <!-- flex-row-reverse coloca a imagem na direita no desktop -->
            <div
                class="bg-white rounded-4xl shadow-2xl overflow-hidden flex flex-col md:flex-row-reverse border border-white/20">

                <!-- Lado da Imagem (Direita) -->
                <div class="md:w-5/12 relative min-h-64 md:min-h-full">
                    <img src="../../assets/jeri1.webp" alt="Passeio Lado Oeste Jericoacoara"
                        class="absolute inset-0 w-full h-full object-cover" />
                </div>

                <!-- Lado do Conteúdo (Esquerda) -->
                <div class="md:w-7/12 p-8 md:p-10 lg:p-12 flex flex-col justify-center">

                    <div class="mb-5">
                        <h3 class="text-2xl md:text-3xl font-black text-slate-800 leading-tight">
                            O que esperar deste <span class="text-orange-600">Passeio</span>
                        </h3>
                    </div>

                    <div class="text-slate-600 mb-6 text-sm md:text-base leading-relaxed space-y-4">
                        <p>
                            Explore o lado mais selvagem de Jeri! Iniciamos pelo <strong
                                class="text-slate-800 font-bold">Rio Guriú</strong>, onde visitamos o berçário dos
                            cavalos-marinhos e o cenário exótico do <strong class="text-slate-800 font-bold">Mangue
                                Seco</strong>.
                        </p>
                        <p>
                            A jornada segue com aventura pelas dunas de <strong
                                class="text-slate-800 font-bold">Tatajuba</strong>, finalizando com o relaxo total nas
                            redes dentro d'água na famosa <strong class="text-slate-800 font-bold">Lagoa da
                                Torta</strong>.
                        </p>
                    </div>

                    <!-- Grid de Pontos Oeste -->
                    <div class="grid grid-cols-2 gap-3 mb-8">
                        <div v-for="item in ['Mangue Seco', 'Rio Guriú', 'Dunas de Tatajuba', 'Lagoa da Torta']"
                            :key="item" class="flex items-center gap-2 group">
                            <div class="p-1.5 rounded-lg transition-colors duration-300">
                                <svg class="w-3.5 h-3.5 text-orange-600 " fill="currentColor" viewBox="0 0 24 24">
                                    <path
                                        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                                </svg>
                            </div>
                            <span class="font-bold text-slate-700 text-xs md:text-sm tracking-tight">{{ item }}</span>
                        </div>
                    </div>

                    <!-- Rodapé do Card -->
                    <div class="flex flex-col sm:flex-row items-center gap-6 pt-6 border-t border-slate-100">
                        <a href="https://wa.me/5585999001339" target="_blank"
                            class="bg-orange-600 hover:bg-slate-800 text-white font-black px-8 py-4 rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto text-center flex items-center justify-center gap-3">
                            Reservar agora
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>

                        <div class="flex flex-col items-center sm:items-start">
                            <span
                                class="text-xs uppercase font-bold tracking-tighter text-orange-600">Disponibilidade</span>
                            <span class="text-sm font-black text-slate-800">Saídas Diárias</span>
                        </div>
                    </div>

                </div>
            </div>

        </div>
        
        <button class="absolute left-5 top-1/2 -translate-y-1/2 text-white text-5xl z-20 hover:cursor-pointer">‹</button>
        <button class="absolute right-5 top-1/2 -translate-y-1/2 text-white text-5xl z-20 hover:cursor-pointer">›</button>
    </section>
</template>