<template>
  <section class="min-h-[calc(100vh-4rem)] flex items-center">
    <div class="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
      <div class="md:w-1/2 flex justify-center mb-8 md:mb-0 sm:mb-1">
        <NuxtImg src="/me_04_2023.jpg" alt="Mohamed Mhiri" width="400" class="rounded-full" loading="eager" preload />
      </div>
      <div class="md:w-1/2 mb-8 md:mb-0 sm:mb-1" >
        <Button size="lg" @click="goToContact">Get in touch</Button>
      </div>
    </div>
  </section>
</template>
<script setup>
import { Button } from "@/components/ui/button";
function goToContact() {
  const el = document.querySelector("#contact");

  if (el) {
    // Use el.scrollIntoView() to instantly scroll to the element
    el.scrollIntoView({ behavior: 'smooth' });
  }
}
</script>