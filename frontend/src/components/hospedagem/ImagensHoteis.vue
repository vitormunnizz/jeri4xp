<template>
  <section id="galeria" class="bg-orange-600 py-16 px-4 font-sans">
    <div class="max-w-6xl mx-auto">

      <h2 class="text-3xl md:text-5xl font-extrabold text-center mb-4 text-white">
        Inspire-se para sua estadia
      </h2>

      <p class="text-center text-orange-100 max-w-2xl mx-auto mb-12 text-lg">
        Conheça ambientes aconchegantes e opções de hospedagem para tornar sua experiência em Jeri ainda mais especial.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-4 gap-4">

        <!-- imagem destaque -->
        <div class="md:col-span-2 md:row-span-2 relative overflow-hidden rounded-3xl group">
          <img
            src="../../assets/logo_jeri4xp.png"
            alt="Hospedagem em Jericoacoara"
            class="w-full h-full object-cover transition duration-500 group-hover:scale-105"
          />
          <div class="absolute inset-0 bg-black/40 flex items-end p-6">
            <span class="text-white text-2xl font-bold">Jericoacoara</span>
          </div>
        </div>

        <!-- Preá -->
        <div class="relative overflow-hidden rounded-3xl group">
          <img
            src="../../assets/logo_jeri4xp.png"
            alt="Hospedagem em Preá"
            class="w-full h-64 md:h-full object-cover transition duration-500 group-hover:scale-105"
          />
          <div class="absolute inset-0 bg-black/30 flex items-end p-4">
            <span class="text-white font-semibold">Preá</span>
          </div>
        </div>

        <!-- Tatajuba -->
        <div class="relative overflow-hidden rounded-3xl group">
          <img
            src="../../assets/logo_jeri4xp.png"
            alt="Hospedagem em Tatajuba"
            class="w-full h-64 md:h-full object-cover transition duration-500 group-hover:scale-105"
          />
          <div class="absolute inset-0 bg-black/30 flex items-end p-4">
            <span class="text-white font-semibold">Tatajuba</span>
          </div>
        </div>

        <!-- Piscina -->
        <div class="relative overflow-hidden rounded-3xl group">
          <img
            src="../../assets/logo_jeri4xp.png"
            alt="Piscina e lazer"
            class="w-full h-64 md:h-full object-cover transition duration-500 group-hover:scale-105"
          />
          <div class="absolute inset-0 bg-black/30 flex items-end p-4">
            <span class="text-white font-semibold">Piscina & Lazer</span>
          </div>
        </div>

        <!-- Quarto -->
        <div class="relative overflow-hidden rounded-3xl group">
          <img
            src="../../assets/logo_jeri4xp.png"
            alt="Quarto confortável"
            class="w-full h-64 md:h-full object-cover transition duration-500 group-hover:scale-105"
          />
          <div class="absolute inset-0 bg-black/30 flex items-end p-4">
            <span class="text-white font-semibold">Conforto</span>
          </div>
        </div>

      </div>

      <div class="text-center mt-12">
        <a
          href="https://wa.me/5588999999999?text=Olá! Quero ajuda para escolher minha hospedagem."
          target="_blank"
          class="inline-block bg-white text-orange-600 px-8 py-4 rounded-full font-bold uppercase text-sm tracking-wider hover:bg-orange-100 transition"
        >
          Quero ajuda para escolher
        </a>
      </div>

    </div>
  </section>
</template>