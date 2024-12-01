<template>
  <main class="min-h-screen bg-background">
    <TheNavBar />
    <NuxtPage />
    <Contact />
  </main>
</template>
<script setup>
useSeoMeta({
  title: 'Mohamed Mhiri',
  ogTitle: 'Mohamed Mhiri',
  description: 'Mohamed Mhiri\'s portfolio.',
  ogDescription: 'Mohamed Mhiri\'s portfolio.',
  ogImage: 'https://mohamedmhiri.onrender.com/me_04_2023.jpg',
});
useJsonld(() => ({
  '@context': 'https://mohamedmhiri.onrender.com',
  '@type': 'Article',
  name: 'Mohamed Mhiri',
}));
</script>
