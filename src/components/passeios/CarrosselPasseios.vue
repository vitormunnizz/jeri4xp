<template>
  <section>

    <swiper
      :modules="modules"
      :slides-per-view="1"
      :loop="true"
      :autoplay="{ delay: 60000, disableOnInteraction: false }"
      class="meu-swiper"
    >
      <swiper-slide>
        <PasseioLeste />
      </swiper-slide>

      <swiper-slide>
        <PasseioOeste />
      </swiper-slide>

      <swiper-slide>
        <PasseioExtremo />
      </swiper-slide>
    </swiper>

  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'

import 'swiper/css'

import PasseioLeste from '@/components/passeios/PasseioLeste.vue'
import PasseioOeste from '@/components/passeios/PasseioOeste.vue'
import PasseioExtremo from '@/components/passeios/PasseioExtremo.vue'

const modules = [Autoplay]
</script>