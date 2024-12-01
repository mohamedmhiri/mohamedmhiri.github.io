<template>
  <nav class="bg-background sticky top-0 z-50 shadow-md">
    <div class="container mx-auto px-4">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <NuxtLink to="/" class="text-xl md:text-2xl font-bold">
          Mohamed Mhiri
        </NuxtLink>
        <!-- Desktop Navigation -->
        <div class="hidden md:flex space-x-4">
          <NuxtLink v-for="linkItem in links.slice(1)" :key="linkItem.label" :to="linkItem.link"
            class="text-foreground hover:text-primary transition-colors">
            {{ linkItem.label }}
          </NuxtLink>
        </div>

        <!-- Mobile Hamburger Button -->
        <button @click="isSidebarOpen = true" class="md:hidden text-foreground hover:text-primary">
          <MenuIcon class="w-6 h-6" />
        </button>
      </div>
    </div>

    <!-- Mobile Sidebar -->
    <Transition name="slide">
      <div v-if="isSidebarOpen" class="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm">
        <div class="fixed inset-y-0 right-0 w-64 bg-background shadow-lg p-6">
          <div class="flex justify-between items-center mb-6">
            <span class="text-xl font-bold text-primary">Menu</span>
            <button @click="isSidebarOpen = false" class="text-foreground hover:text-primary">
              <XIcon class="w-6 h-6" />
            </button>
          </div>
          <div class="flex flex-col space-y-4">
            <a v-for="linkItem in links" :key="linkItem.label" @click="isSidebarOpen = false" :href="linkItem.link"
              class="text-foreground hover:text-primary transition-colors">
              {{ linkItem.label }}
            </a>
          </div>
        </div>
      </div>
    </Transition>
  </nav>
</template>
<script setup>
import { MenuIcon, XIcon } from 'lucide-vue-next';

const goTo = (evt, selector) => {
  evt.preventDefault();
  const el = document.querySelector(selector);

  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
};
const links = [
  {
    label: 'Home',
    link: '/',
  },
  {
    label: 'About',
    link: '/about',
  },
  {
    label: 'Clients',
    link: '/#clients',
    fn: (evt) => goTo(evt, '#clients'),
  },
  {
    label: 'Services',
    link: '/#services',
    fn: (evt) => goTo(evt, '#services'),
  },
  {
    label: 'Posts',
    link: '/posts',
    fn: (evt) => goTo(evt, '#posts'),
  },
  {
    label: 'Contact',
    link: '#contact',
    fn: (evt) => goTo(evt, '#contact'),
  },
];
const isSidebarOpen = ref(false);
</script>
<style scoped>
a {
  cursor: pointer;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease-in-out;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}

.slide-enter-to,
.slide-leave-from {
  transform: translateX(0);
}
</style>