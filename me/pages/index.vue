<template>
  <div>
    <Hero v-if="!isMobile()" />
    <MobileHero v-else />
    <Summary />
    <Clients />
    <Services />
  </div>
</template>
<script setup>
import isMobile from '@/lib/screen';
</script>
