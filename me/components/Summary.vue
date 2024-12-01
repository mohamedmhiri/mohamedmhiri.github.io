<template>
  <section id="summary" class="py-16 bg-muted">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold mb-6 md:w-1/2">About Me</h2>
      <div class="flex flex-col md:flex-row items-center justify-between">
        <div class="md:w-1/2 mb-6 md:mb-0" v-if="isMobile() === false">
          <Code2 class="rounded-full md:w-48 md:h-48 sm:w-32 sm:h-32 mx-auto md:mx-0 object-cover shadow-2xl" />
        </div>
        <div class="md:w-1/2">
          <p v-for="item in summary" :key="item" class="text-lg text-muted-foreground mb-4">
            {{item}}
          </p>
          <NuxtLink to="/about" class="inline-block bg-primary text-primary-foreground py-2 px-4 rounded hover:bg-primary/90 transition-colors">
            Learn more about me
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { Code2 } from "lucide-vue-next";
import isMobile from "~/lib/screen";
const summary = [
  "A passionate full-stack software engineer with over 6 years of experience in building digital solutions.",
  "Whether as a consultant, contractor, or team member, I'm dedicated to delivering impactful solutions in full-time, part-time, and freelance roles.",
  "I can contribute to all phases of software development, starting from design and prototyping, through development, implementation, testing, deployment, and extending to maintenance and support.",
  /* "My goal is to help businesses transform their ideas into robust, scalable, and efficient software solutions.",
  "From concept discussion to deployment and maintenance, I'm here to guide you through every step of the development process.", */
];
</script>