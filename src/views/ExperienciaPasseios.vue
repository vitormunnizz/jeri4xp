<template>
    <MenuPasseios />
    <ResumoPasseios />
    <VeiculosPasseios />
    <CarrosselPasseios />
    <DuvidasPasseios />
    <ContatoApp />
    <WhatsAppButton />
</template>

<script setup>
import WhatsAppButton from '@/components/WhatsAppButton.vue';
import MenuPasseios from '@/components/passeios/MenuPasseios.vue';
import ContatoApp from '@/components/ContatoApp.vue';
import VeiculosPasseios from '@/components/passeios/VeiculosPasseios.vue';
import ResumoPasseios from '@/components/passeios/ResumoPasseios.vue';
import CarrosselPasseios from '@/components/passeios/CarrosselPasseios.vue';
import DuvidasPasseios from '@/components/passeios/DuvidasPasseios.vue';
</script>