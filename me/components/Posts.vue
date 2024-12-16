<template>
  <section id="posts" class="py-16 bg-muted">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold mb-8">Posts</h2>
      <div class="mb-6 flex items-center" v-if="filteredPosts.length > 0">
        <Input type="text" placeholder="Search posts..." v-model="searchTerm" class="max-w-sm mr-2" />
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8" v-if="filteredPosts.length > 0">
        <a v-for="post in displayedPosts" :key="post.id" :href="post.link">
          <Card>
            <CardHeader>
              <CardTitle>
                <a :href="post.link" target="_blank" rel="noopener noreferrer"
                  class="flex items-center hover:underline">
                  Mohamed Mhiri
                  <ExternalLink class="ml-2 h-4 w-4" />
                </a>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>{{ post.content }}</p>
            </CardContent>
          </Card>
        </a>
      </div>
      <div class="text-center mt-8" v-if="filteredPosts.length > 0">
        <p class="text-muted-foreground mb-4">
          Showing {{ displayedPosts.length }} of {{ filteredPosts.length }} posts
        </p>
        <Button v-if="visiblePosts < filteredPosts.length" @click="loadMore" :disabled="isLoadingMore">
          <template v-if="isLoadingMore === true">
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
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/toast';
import { Loader2, ExternalLink } from 'lucide-vue-next';

const posts = ref([]);
const filteredPosts = ref([]);
const displayedPosts = ref([]);
const searchTerm = ref('');
const visiblePosts = ref(9);
const isLoadingMore = ref(false);
const loadMoreRef = ref(null);

const config = useRuntimeConfig();
const publicApiUrl = config.public.publicApiUrl;

const emit = defineEmits(['loaded']);

const URIToURL = (uri) => {
  const splitted = uri.split('/');
  const did = splitted[2];
  const rKey = splitted[4];
  return `https://bsky.app/profile/${did}/post/${rKey}`;
}

try {
  const data = await $fetch(
    publicApiUrl, {
    method: 'GET',
    immediate: true,
    watch: true,
  });
  const { query } = useRoute().query;
  if (query) {
    searchTerm.value = query;
  }
  posts.value = data.posts.map((post) => {
    return {
      content: post.record.text,
      link: URIToURL(post.uri),
      name: post.author.displayName,
      id: post.cid
    }
  });
  emit('loaded');
} catch (e) {
  console.log(e);
}

watchEffect(() => {
  filteredPosts.value = posts.value.filter(post =>
    post.content.toLowerCase().includes(searchTerm.value.toLowerCase())
  );
});

watchEffect(() => {
  displayedPosts.value = filteredPosts.value.slice(0, visiblePosts.value);
});

const loadMore = async () => {
  isLoadingMore.value = true;
  try {
    await new Promise(resolve => setTimeout(resolve, 200));
    visiblePosts.value = Math.min(visiblePosts.value + 9, filteredPosts.value.length);
    filteredPosts.value = posts.value.filter(post =>
      post.content.toLowerCase().includes(searchTerm.value.toLowerCase())
    );

    displayedPosts.value = filteredPosts.value.slice(0, visiblePosts.value);

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
    isLoadingMore.value = false;
  }
}

</script>