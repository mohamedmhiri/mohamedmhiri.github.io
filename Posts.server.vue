<template>
  <section id="posts" class="py-16">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold mb-8">Posts</h2>
      <div class="mb-6 flex items-center">
        <Input type="text" placeholder="Search blog posts..." v-model="searchTerm" class="max-w-sm mr-2" />
        <Button variant="outline" size="icon">
          <Search class="h-4 w-4" />
          <span class="sr-only">Search</span>
        </Button>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        <a v-for="post in posts" :key="post.id" :href="post.link">
          <Card>
            <CardHeader>
              <CardTitle>{{ post.name }}</CardTitle>
            </CardHeader>
            <CardContent>
              <h1>{{ post.content }}</h1>
            </CardContent>
          </Card>
        </a>
      </div>
     <div class="text-center mt-8">
        <p class="text-muted-foreground mb-4">
          Showing {{ displayedPosts.length }} of {{ filteredPosts.length }} posts
        </p>
        <Button v-if="visiblePosts < filteredPosts.length" @click="loadMore" disabled="isLoading">
          <template v-if="isLoading === true">
            <Loader2 class="mr-2 h-4 w-4 animate-spin" />
            Loading...
          </template>
          <template v-else>Load More</template>
        </Button>
      </div>
      <div :ref="loadMoreRef" aria-hidden="true" />
    </div>
  </section>
</template>
<script setup>
import { ref } from 'vue';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/toast';
import { Search, Loader2 } from 'lucide-vue-next';

const posts = ref([]);
const filteredPosts = ref([]);
const displayedPosts = ref([]);
const searchTerm = ref('');
const visiblePosts = ref(9);
const isLoading = ref(false);
const loadMoreRef = ref(null);

try {
  const data = await $fetch(
    'https://public.api.bsky.app/xrpc/app.bsky.feed.searchPosts?q=learningtocode&author=did:plc:wmb4sxnvam6jav6s7scgdawc&tag=learningtocode', {
    method: 'GET',
    immediate: true,
    watch: true,
  });
  posts.value = data.posts.map((post) => { return { content: post.record.text, link: `${post.uri}`, name: post.author.displayName } });

} catch (e) {
  console.log(e);
}

/* filteredPosts.value = posts.value.filter(post =>
  post.title.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
  post.content.toLowerCase().includes(searchTerm.value.toLowerCase())
);

displayedPosts.value = filteredPosts.value.slice(0, visiblePosts.value);

const loadMore = async () => {
  isLoading.value = true;
  try {
    visiblePosts.value = Math.min(visiblePosts.value + 9, filteredPosts.value.length);

    // Scroll to newly loaded content
    setTimeout(() => {
      loadMoreRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100)
  } catch (error) {
    toast({
      title: "Error",
      description: "Failed to load more posts. Please try again.",
      variant: "destructive",
    });
  } finally {
    isLoading.value = false;
  }
} */

</script> 