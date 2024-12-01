<template>
  <section id="experience" class="py-16">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold mb-8">Experience</h2>
      <div class="space-y-8">
        <Card v-for="experience in experiences" :key="experience.title + experience.company"
          class="flex flex-col md:flex-row">
          <CardHeader class="md:w-1/4">
            <CardTitle>{{ experience.title }}</CardTitle>
            <p class="text-sm text-muted-foreground">{{ experience.company }} - {{ experience.employmentType }}</p>
            <p class="text-sm text-muted-foreground">{{ experience.period }} {{ experience.period === 1 ? 'month' : 'months' }}</p>
          </CardHeader>
          <CardContent class="md:w-3/4 p-6">
            <ul class="mb-4">
              <li v-for="item in experience.descriptions">- {{ item }}</li>
            </ul>
            <div>
              <h4 class="text-sm font-semibold mb-2">Skills & Technologies:</h4>
              <div class="flex flex-wrap gap-2">
                <Badge v-for="skill in experience.skills" :key="skill" variant="secondary">
                  {{ skill }}
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
</template>
<script setup>
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import experiences from "../experience.json";
</script>