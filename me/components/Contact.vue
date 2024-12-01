<template>
  <section id="contact" class="py-16">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold mb-8">Contact Me</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <form class="space-y-4">
          <Input v-model="name" type="text" placeholder="Your Name" />
          <Input v-model="email" type="email" placeholder="Your Email" />
          <Textarea v-model="text" placeholder="Your Message" />
          <Button v-if="isLoading === true" type="button">
            <Loader2 class="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </Button>
          <Button v-else-if="isSuccess === true" type="button">
            <CheckCircle class="mr-2 h-4 w-4" />
            Sent!
          </Button>
          <Button v-else-if="isError === true" type="button">
            <XCircle class="mr-2 h-4 w-4" />
            Error
          </Button>
          <Button v-else type="button" @click="contactMe">Send Message</Button>
        </form>
        <div class="space-y-4">
          <h1 class="w-full">
            Have an idea you'd like to bring to life? Let's collaborate to transform your vision into reality. Get in touch, and let's create something remarkable together! <br>
          </h1>
          <h1 class="w-full">
            Searching for a software engineer to elevate your team? Look no further! With a proven track record in building reliable and innovative software solutions, I'm ready to bring my expertise and passion to your projects.
          </h1>
          <a href="/mohamed mhiri.pdf" download="mohamed_mhiri.pdf" class="my-1 w-full">
            <Button class="my-3 w-full">Download Resume</Button>
          </a>
          <div class="flex justify-center space-x-4">
            <a href="https://github.com/mohamedmhiri" class="text-muted-foreground hover:text-primary">
              <Github size="24" />
            </a>
            <a href="https://www.linkedin.com/in/mhiri-5" class="text-muted-foreground hover:text-primary">
              <Linkedin size="24" />
            </a>
            <a href="https://x.com/mohamedmhiri5" class="text-muted-foreground hover:text-primary">
              <Twitter size="24" />
            </a>
            <a href="mailto:mohamad.elmhiri@gmail.com" class="text-muted-foreground hover:text-primary">
              <Mail size="24" />
            </a>
            <a href="https://bsky.app/profile/mmhiri.bsky.social" class="text-muted-foreground hover:text-primary">
              <Hash size="24" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref, computed } from "vue";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Github, Linkedin, Twitter, Mail, Hash, Loader2, CheckCircle, XCircle } from 'lucide-vue-next';

const name = ref('');
const email = ref('');
const text = ref('');

const body = computed(() => ({
  chat_id: 1146516014,
  text: `${email.value} ${name.value}\n${text.value}`
}));

const isLoading = ref(false);
const isSuccess = ref(false);
const isError = ref(false);

const { data, error, execute } = useFetch(
  'https://api.telegram.org/bot7593973013:AAFbyM3W6P2RsAkuwqC_IzIi6ycbEnKXdcQ/sendMessage', {
  method: 'POST',
  body,
  immediate: false,
  watch: false,
  onResponse() {
    isLoading.value = false;
  }
}
);

async function contactMe() {
  isLoading.value = true;
  await execute();
  if (!error.value && data.value.ok === true) { isSuccess.value = true; }
  else { isError.value = true; }

  name.value = '';
  email.value = '';
  text.value = '';
}
</script>