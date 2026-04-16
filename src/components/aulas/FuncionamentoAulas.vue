<template>
  <section id="funcionamento"
    class="bg-orange-600 min-h-screen p-8 flex items-center justify-center font-sans text-white">

    <div class="max-w-5xl mx-auto w-full">

      <h1 class="text-3xl md:text-5xl font-extrabold mb-12 text-center">
        Como Funcionam as Aulas
      </h1>
      <div class="grid grid-cols-1 gap-5">

        <div v-for="(item, index) in etapas" :key="index"
          class="flex gap-5 bg-white rounded-2xl p-4 shadow-md items-center hover:shadow-xl transition">
          <div
            class="w-14 h-14 flex items-center justify-center rounded-full bg-orange-600 text-white text-xl font-bold">
            {{ index + 1 }}
          </div>

          <div>
            <h3 class="text-xl font-bold text-gray-800 mb-1.5">
              {{ item.titulo }}
            </h3>
            <p class="text-gray-800 text-sm">
              {{ item.descricao }}
            </p>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
const etapas = [
  {
    titulo: "Escolha da Modalidade",
    descricao:
      "Escolha entre kitesurf, windsurf, surf ou stand up paddle. Nossa equipe pode ajudar você a definir a melhor opção de acordo com seu perfil e objetivo.",
  },
  {
    titulo: "Agendamento da Aula",
    descricao:
      "Definimos o melhor horário considerando vento, maré e clima para garantir a melhor experiência.",
  },
  {
    titulo: "Avaliação e Planejamento",
    descricao:
      "O instrutor avalia seu nível e adapta a aula para garantir aprendizado seguro e eficiente.",
  },
  {
    titulo: "Estrutura Completa",
    descricao:
      "Equipamentos inclusos e revisados, com orientações completas para sua segurança.",
  },
  {
    titulo: "Prática e Evolução",
    descricao:
      "Prática com acompanhamento próximo para evolução contínua e mais confiança.",
  },
];
</script>