<template>
  <section class="fixed inset-0 flex items-center justify-center backdrop-blur">
    <article class="p-6 md:p-10 lg:p-12 bg-woes-dark border-8 border-woes-medium w-[90vw] h-[90vh] md:w-[80vw] max-h-[600px] grid grid-cols-1 md:grid-cols-[1fr_2fr] md:grid-rows-[32px,minmax(0,1fr),32px] gap-y-4 md:gap-6">
      <NuxtLink to="/" class="col-span-2 block text-right">
        <ion-icon name="close-outline" size="large"></ion-icon>
      </NuxtLink>
      <figure class="row-start-2">
        <img height="300" width="300" class="mx-auto w-32 md:w-full" src="https://static.wikia.nocookie.net/snicket/images/9/9c/StephanoPortrait.png" />
        <figcaption class="text-center">
          <h3 class="text-2xl md:text-4xl">{{ slide.character?.name }}</h3>
        </figcaption>
      </figure>
      <div class="row-start-3 md:row-start-2 grid grid-cols-2 auto-rows-min gap-4 overflow-y-auto">
        <h2 class="font-bold text-4xl lg:text-6xl col-span-2">{{ slide.title }}</h2>
        <p class="col-span-2">{{ slide.description }}</p>
        <div class="flex flex-col gap-2">
          <h4 class="text-3xl">Benefit</h4>
          <ul>
            <li v-for="benefit in slide.benefits">{{ benefit.name }}</li>
          </ul>
        </div>
        <div class="flex flex-col gap-2">
          <h4 class="text-3xl">Drawbacks</h4>
          <ul>
            <li v-for="drawback in slide.drawbacks">{{ drawback.name }}</li>
          </ul>
        </div>
      </div>
      <footer class="col-span-2 flex justify-end gap-4">
        <NuxtLink v-if="prevSlide" :to="`/slide/${prevSlide}`" class="col-span-2 block text-right">
          <ion-icon name="arrow-back-outline" size="large"></ion-icon>
        </NuxtLink>
        <NuxtLink v-if="nextSlide" :to="`/slide/${nextSlide}`" class="col-span-2 block text-right">
          <ion-icon name="arrow-forward-outline" size="large"></ion-icon>
        </NuxtLink>
      </footer>
    </article>
  </section>
</template>

<script setup>
import { webRendering } from '@/assets/data/rendering-modes.json'
const { params } = useRoute()

const slide = ref(webRendering.filter(item => item.slug === params.slideSlug)[0] || {})

const slideIndex = ref(webRendering.findIndex(item => item.slug === params.slideSlug))
const prevSlide = ref()
const nextSlide = ref()

if (slideIndex.value > 0) {
  prevSlide.value = webRendering[slideIndex.value - 1].slug
}
if (slideIndex.value < webRendering.length - 1) {
  nextSlide.value = webRendering[slideIndex.value + 1].slug
}

onMounted(() => {
  document.body.style.overflowY = "hidden";
})
onBeforeUnmount(() => {
  document.body.style.overflowY = "auto";
})
</script>
