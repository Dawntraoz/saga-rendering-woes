<template>
  <article :id="item.slug" class="flex flex-wrap gap-4 py-8 items-center justify-center">
    <figure class="w-full md:w-2/4">
      <img
        v-if="item.character?.illustration"
        height="250"
        width="250"
        class="mx-auto w-1/2 md:w-auto"
        :src="item.character.illustration"
        :alt="`${item.character.name} illustration`"
        loading="lazy"
      />
    </figure>
    <h2 class="w-5/6 md:w-2/5 text-2xl md:text-4xl flex flex-col items-center md:items-start gap-4">
      {{ item.title }}
      <NuxtLink :to="`/slide/${item.slug}`">
        <ion-icon name="duplicate-outline" size="large"></ion-icon>
      </NuxtLink>
    </h2>
  </article>
</template>

<script setup>
defineProps({
  item: Object
})
</script>

<style scoped>
.left-line {
  @apply md:before:absolute md:before:left-1/2 md:before:w-12 md:before:h-1 md:before:bg-woes-light md:before:rounded-full;
}

.right-line {
  @apply md:after:absolute md:after:right-1/2 md:after:w-12 md:after:h-1 md:after:bg-woes-light md:after:rounded-full;
}
</style>