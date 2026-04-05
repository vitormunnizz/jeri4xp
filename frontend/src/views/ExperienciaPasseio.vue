<template>
    <MenuPasseios />
    <ResumoPasseio/>
    <VeiculosCards/>
    <PasseioLeste/>
    <DuvidaPagina/>
    <ContatoApp/>
    <WhatsAppButton/>
</template>

<script setup>
    import WhatsAppButton from '@/components/WhatsAppButton.vue';
    import MenuPasseios from '@/components/passeios/MenuPasseios.vue';
    import ContatoApp from '@/components/ContatoApp.vue';
    import ResumoPasseio from '@/components/passeios/ResumoPasseio.vue';
    import VeiculosCards from '@/components/passeios/VeiculosCards.vue';
    import DuvidaPagina from '@/components/passeios/DuvidaPagina.vue';
    import PasseioLeste from '@/components/passeios/PasseioLeste.vue';
</script>