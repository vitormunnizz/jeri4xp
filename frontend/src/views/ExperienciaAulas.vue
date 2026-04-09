<template>
    <MenuAulas />
    <ResumoAulas />
    <ReservasAulas />
    <BeneficosAulas/>
    <DuvidaAulas />
    <ContatoApp />
    <WhatsAppButton />
</template>

<script setup>
import WhatsAppButton from '@/components/WhatsAppButton.vue';
import ContatoApp from '@/components/ContatoApp.vue';
import MenuAulas from '@/components/aulas/MenuAulas.vue';
import DuvidaAulas from '@/components/aulas/DuvidaAulas.vue';
import ReservasAulas from '@/components/aulas/ReservasAulas.vue';
import ResumoAulas from '@/components/aulas/ResumoAulas.vue';
import BeneficosAulas from '@/components/aulas/BeneficosAulas.vue';
</script>