<template>
  <section class="min-h-[calc(100vh-4rem)] flex items-center">
    <div class="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
      <div class="md:w-1/2 mb-8 md:mb-0 sm:mb-1" >
        <span class="flex items-center sm:my-4">
          <Handshake class="w-10 h-10" /><h1 class="text-3xl md:text-6xl font-bold mb-4">, I am Mohamed Mhiri</h1>
        </span>
        <!-- TODO add continuously learning for my mistakes and bugs -->          
        <!-- Full-stack software engineer with over 6 years of experience in full-time, part-time, and freelance roles. -->
        <!-- <br> Whether as a consultant, contractor, or team member, I'm dedicated to delivering impactful solutions. -->
        <!-- as well as 1+ year as a product architect assistant. -->
        <!-- <br> I can contribute to all phases of software development, starting from design and prototyping, through
        development, implementation, testing, deployment, and extending to maintenance and support. -->
          <!-- <br>Possessing extensive knowledge of various technologies including Javascript, Vue.js, Nodejs, C#, .NET, MongoDB, SQL. -->
        <Button size="lg" @click="goToContact">Get in touch</Button>
      </div>
      <div class="md:w-1/2 flex justify-center">
        <NuxtImg src="/me_04_2023.jpg" alt="Mohamed Mhiri" width="400" class="rounded-full" loading="eager" preload />
      </div>
    </div>
  </section>
</template>
<script setup>
import { Button } from "@/components/ui/button";
import { Handshake } from "lucide-vue-next";
function goToContact() {
  const el = document.querySelector("#contact");

  if (el) {
    // Use el.scrollIntoView() to instantly scroll to the element
    el.scrollIntoView({ behavior: 'smooth' });
  }
}
</script>