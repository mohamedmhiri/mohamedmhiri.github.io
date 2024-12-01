<template>
  <section class="py-16">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl font-bold mb-8 text-center">About Me</h1>
        <div class="flex flex-col md:flex-row items-start justify-between">
          <div class="md:w-1/3 mb-6 md:mb-0">
            <NuxtImg src="/me_04_2023.jpg" alt="Mohamed Mhiri"
              class="rounded-lg w-full max-w-md mx-auto object-cover shadow-lg" loading="eager" preload />
          </div>
          <div class="md:w-2/3 md:pl-8">
            <h2 class="text-2xl font-semibold mb-4">My Journey</h2>
            <p class="text-lg text-muted-foreground mb-4">
              My journey in technology began with a passion for mathematics, where I consistently ranked in the top three during my early studies, and discovered my love for programming through my first Pascal program in elementary school.
              <br>The pivotal moment came when I was accepted into INSAT, my first university choice, a moment so exciting that I couldn't sleep and received my first personal laptop simultaneously.
              <br>Despite initially feeling overwhelmed—repeatedly asking myself "what am I doing here!" during the first challenging lectures in mathematics, electrostatics, and algorithmic classes—I persevered.
              <br>My first 2 years at university was marked by a consistent ranking in the bottom of the top three<Laugh class="inline-block ml-2" />, yet I developed a deep fascination with subjects like programming in C, C++, Java, C#, Javascript, algebra, Unix, software design, web and mobile development.
              <br>Beyond academics, I enriched my experience through professional internships and active participation in social clubs like Netlinks and Securinets where I was an organizer and participant in various programs and challenges.
              <br>Parallel to my studies, I ventured into freelancing, delivering software solutions to clients like Aloulou Optic and Dorr-Yakout Nursery, experiencing the joy of professional accomplishment.
              <br>My academic journey culminated in an internship entitled "Orchestrated choreography in a micro-services architecture".
              <br>Post-graduation, I began developing my own JavaScript library for building SPAs, that I used to build Aloulou Optic optician software.
              <br>And shortly after graduation, I transitioned into a professional role at Mantu, joining their software architecture team.
              <br>—a testament to my growth from a curious student to a budding software professional.
            </p>
            <h2 class="text-2xl font-semibold mb-4">My Approach</h2>
            <p class="text-lg text-muted-foreground mb-4">
              My professional journey reflects a strategic evolution from being initially captivated by cutting-edge technologies and complex solutions to developing a more client-centric perspective.
              <br>I've transitioned towards prioritizing simplicity and practical value, focusing on delivering solutions that directly address client needs rather than getting carried away by technological complexity.
            </p>
            <h2 class="text-2xl font-semibold mb-4">Technical Expertise</h2>
            <ul class="list-disc list-inside text-lg text-muted-foreground mb-4">
              <li>Software architecture and design</li>
              <li>Full-stack web development</li>
              <li>Mobile development</li>
              <li>Software testing and quality assurance</li>
              <li>Infrastructure setup and management</li>
              <li>Database design and optimization (SQL and NoSQL)</li>
              <li>API development and integration</li>
              <li>Performance optimization and scalability</li>
            </ul>
            <h2 class="text-2xl font-semibold mb-4">Let's Connect</h2>
            <p class="text-lg text-muted-foreground mb-4">
              I'm always excited to take on new challenges and collaborate on innovative projects. Whether you're a
              startup looking to build your MVP or an established company aiming to modernize your tech stack, I'm here
              to help turn your vision into reality.
            </p>
            <NuxtLink to="#contact"
              class="inline-block bg-primary text-primary-foreground py-2 px-4 rounded hover:bg-primary/90 transition-colors">
              Get in Touch
            </NuxtLink>
          </div>
        </div>
    </div>
  </section>
</template>
<script setup>
import { Laugh } from "lucide-vue-next";
</script>