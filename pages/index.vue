<template>
  <div class="container p-12 md:p-20">
    <h1 class="flex flex-col text-3xl font-medium uppercase text-center pb-8">
      A saga of
      <span class="font-extrabold text-6xl md:text-8xl">web rendering woes</span>
    </h1>
    <section class="pb-12">
      <article class="flex flex-col gap-6 items-center">
        <figure>
          <img height="338" width="500" src="/illustrations/baudelaires.svg" alt="The Baudelaires illustration" />
        </figure>
        <h2 class="text-5xl uppercase">The website</h2>
      </article>
    </section>
    <section class="grid grid-cols-1 md:grid-cols-[1fr_4px_1fr] md:gap-x-10">
      <TimelineItem
        v-for="(rendering, index) in webRendering"
        :key="`timeline-item-${index}`"
        :class="`${index % 2 === 0 ? 'md:col-start-3 left-line' : 'md:col-start-1 right-line'} row-start-${index+1}`"
        :item="rendering"
      />
      <span class="col-start-2 col-end-2 row-span-14 bg-woes-light rounded-full"></span>
    </section>
    <NuxtPage />
  </div>
</template>

<script setup>
import { webRendering } from '@/assets/data/rendering-modes.json'
</script>