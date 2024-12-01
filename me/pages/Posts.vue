<template>
  <div>
    <Posts v-if="isLoading === false" @loaded="isLoading = false" />
    <Loader2 class="animate-spin" v-else />
  </div>
</template>
<script setup>
import { Loader2 } from 'lucide-vue-next';
const isLoading = ref(false);
</script>
