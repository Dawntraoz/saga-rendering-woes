<template>
  <h1 class="flex flex-col text-3xl font-medium uppercase text-center pb-8">
    A saga of
    <span class="font-extrabold text-6xl md:text-8xl">web rendering woes</span>
  </h1>
  <section class="grid grid-cols-[1fr_8px_1fr] gap-x-8">
    <article
      v-for="(rendering, index) in webRendering"
      class="p-2 flex flex-wrap"
      :class="`${index % 2 === 0 ? 'col-start-3' : 'col-start-1'} row-start-${index+1}`"
    >
      <figure class="w-1/4">
        <img height="150" width="150" src="https://static.wikia.nocookie.net/snicket/images/9/9c/StephanoPortrait.png" />
        <figcaption class="text-center">
          <h3 class="text-xl">{{ rendering.character.name }}</h3>
        </figcaption>
      </figure>
      <h2 class="w-2/4 text-4xl pb-2">{{ rendering.title }}</h2>
      <NuxtLink :to="`/slide/${rendering.slug}`">
        <ion-icon name="duplicate-outline" size="large"></ion-icon>
      </NuxtLink>
    </article>
    <span class="col-start-2 col-end-2 row-span-14 bg-woes-light rounded-full"></span>
  </section>
    <NuxtPage />
</template>

<script setup>
import { webRendering } from '@/assets/data/rendering-modes.json'
</script>