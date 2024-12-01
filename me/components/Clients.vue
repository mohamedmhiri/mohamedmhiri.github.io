<template>
  <section id="clients" class="py-16 bg-background">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold mb-8">I've worked with</h2>
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div
          v-for="(client, index) in clients"
          :key="client.name"
          class="relative aspect-square bg-slate-300 rounded-lg shadow-md overflow-hidden cursor-pointer"
          @mouseenter="hoveredIndex = index"
          @mouseleave="hoveredIndex = null"
        >
          <NuxtImg
            :src="client.logo"
            :alt="client.name"
            class="object-contain p-4 w-full h-full"
            format="webp"
            loading="lazy"
            placeholder
          />
          <Transition name="fade">
            <div
              v-if="hoveredIndex === index"
              class="absolute inset-0 bg-primary bg-opacity-90 flex flex-col justify-center items-center p-4 text-center"
            >
              <h3 class="text-lg font-semibold text-primary-foreground mb-2">{{ client.name }}</h3>
              <p class="text-sm text-primary-foreground">{{ client.description }}</p>
            </div>
          </Transition>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
const clients = [
  { name: 'Leadfox', logo: '/leadfox.png' },
  { name: 'Dayshape', logo: '/dayshape.png' },
  { name: 'Mantu', logo: '/mantu.png' },
  { name: 'Amaris', logo: '/amaris.png' },
  { name: 'Proxify', logo: '/proxify.svg'},
  { name: 'Tunpack Machinery', logo: '/tunpackmachinery.png' },
  { name: 'Tunpack Paper', logo: '/tunpackpaper.png' },
  { name: 'Expertify', logo: '/expertify.webp' },
  { name: 'High Education Ministry', logo: '/ministry.png' },
  { name: 'Formation & Consulting Information Technology', logo: '/fcit.png' },
  { name: 'New Technologies', logo: '/new-technologies.svg' },
  { name: 'Parenin', logo: '/parenin.png' },
  { name: 'Kyalis Tech', logo: '/Kyalis-Tech.jpg' },
  { name: 'Placeholder Apps', logo: '/placeholder.png' },
  { name: 'Dorr & Yakout', logo: '/dorr-yakout.jpg' },
  { name: 'AlgerieDok', logo: '/algerie-dok.png' },
  /* { name: 'Auto Ecole Mehdi Zghal', logo: 'https://scontent.ftun14-1.fna.fbcdn.net/v/t1.6435-9/49152997_299072130743224_4020962010446430208_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=vUX3uAFl_iEQ7kNvgF9PjGW&_nc_zt=23&_nc_ht=scontent.ftun14-1.fna&_nc_gid=AIVG_rL-X6fKtnUJ6bxSa_c&oh=00_AYBvwVdlyT79qIKbX9NKRn0RudeZGog1XPL_zP1LM8w9YQ&oe=6767A8D8' },
  { name: 'Aloulou OPTIC', logo: 'https://omarmhiri.onrender.com/images/algeriDok.png' }, */
];

const hoveredIndex = ref(null);
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>