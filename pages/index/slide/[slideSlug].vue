<template>
  <section
    @keyup.esc="navigateTo(`/#${slide.slug}`)"
    class="fixed inset-0 flex flex-col items-center justify-center backdrop-blur"
  >
    <article
      ref="mainSection"
      tabindex="-1"
      @keyup.left="goToPrevSlide"
      @keyup.right="goToNextSlide"
      class="slide p-6 md:p-10 lg:p-12 bg-woes-dark border-8 border-woes-light w-screen h-screen md:w-[80vw] md:max-h-[600px] md:max-w-[1200px] grid grid-cols-1 md:grid-cols-[1fr_2fr] md:grid-rows-[32px,minmax(0,1fr),32px] gap-y-4 md:gap-6 focus-visible:outline-none focus-visible:border-white"
    >
      <div class="col-span-2 text-right">
        <NuxtLink :to="`/#${slide.slug}`" class="focus-visible:outline-none focus-visible:text-white">
          <ion-icon name="close-outline" size="large"></ion-icon>
        </NuxtLink>
      </div>
      <figure class="row-start-2">
        <img
          v-if="slide.character?.illustration"
          height="300"
          width="300"
          class="mx-auto z-0 h-60 max-w-full md:h-auto"
          :src="slide.character?.illustration"
          :alt="`${slide.character?.name} illustration`"
        />
        <figcaption class="-mt-4 flex justify-center">
          <h3
            :class="slide.type === 'rendering-woe' ? 'bg-woes-red' : 'bg-woes-light'"
            class="relative text-xl md:text-2xl md:leading-normal px-3 text-woes-dark"
          >{{ slide.character?.name }}</h3>
        </figcaption>
      </figure>
      <div class="row-start-3 md:row-start-2 grid grid-cols-2 auto-rows-min gap-4 overflow-y-auto">
        <header class="col-span-2">
          <h2 class="font-bold text-4xl lg:text-6xl">{{ slide.title }}</h2>
          <h3 class="text-2xl uppercase flex gap-2">
            <span v-if="slide.acronym">
              {{ slide.acronym }}<span class="pl-2">|</span>
            </span>
            <span>{{ slide.type.replace('-', ' ') }}</span>
          </h3>
        </header>
        <p class="col-span-2">{{ slide.description }}</p>
        <div v-if="slide.benefits" class="flex flex-col gap-2 col-span-2 md:col-span-1">
          <h4 class="text-3xl text-woes-green">Benefit</h4>
          <ul>
            <li v-for="benefit in slide.benefits">{{ benefit.name }}</li>
          </ul>
        </div>
        <div v-if="slide.drawbacks" class="flex flex-col gap-2 col-span-2 md:col-span-1">
          <h4 class="text-3xl text-woes-red">Drawbacks</h4>
          <ul>
            <li v-for="drawback in slide.drawbacks">{{ drawback.name }}</li>
          </ul>
        </div>
      </div>
      <footer class="col-span-2 flex justify-end gap-4">
        <div class="col-span-2 block text-right w-8">
          <NuxtLink v-if="prevSlide" :to="`/slide/${prevSlide}`" class="w-full focus-visible:outline-none focus-visible:text-white">
            <ion-icon name="arrow-back-outline" size="large"></ion-icon>
          </NuxtLink>
        </div>
        <div class="col-span-2 block text-right w-8">
          <NuxtLink v-if="nextSlide" :to="`/slide/${nextSlide}`" class="w-full focus-visible:outline-none focus-visible:text-white">
            <ion-icon name="arrow-forward-outline" size="large"></ion-icon>
          </NuxtLink>
        </div>
      </footer>
    </article>
  </section>
</template>

<script setup>
import { webRendering } from '@/assets/data/rendering-modes.json';
const { afterEach } = useRouter();
const { params } = useRoute();

const mainSection = ref();
const slide = ref(webRendering.filter(item => item.slug === params.slideSlug)[0] || {});

const slideIndex = ref(webRendering.findIndex(item => item.slug === params.slideSlug));
const prevSlide = ref();
const nextSlide = ref();

if (slideIndex.value > 0) {
  prevSlide.value = webRendering[slideIndex.value - 1].slug;
}
if (slideIndex.value < webRendering.length - 1) {
  nextSlide.value = webRendering[slideIndex.value + 1].slug;
}

onMounted(() => {
  document.body.style.overflowY = "hidden";
  setTimeout(() => {
    mainSection.value.focus();
  }, 300);
});

onBeforeUnmount(() => {
  document.body.style.overflowY = "auto";
});

const goToPrevSlide = () => {
  (!prevSlide.value) ? '' : navigateTo(`/slide/${prevSlide.value}`)
}
const goToNextSlide = () => {
  (!nextSlide.value) ? '' : navigateTo(`/slide/${nextSlide.value}`)
}

useHead({
  title: slide.value.title
})

definePageMeta({
  pageTransition: {
    name: 'slide-right',
    mode: 'out-in'
  },
  middleware(to, from) {
    to.meta.pageTransition.name = webRendering.findIndex(item => item.slug === to.params.slideSlug) > webRendering.findIndex(item => item.slug === from.params.slideSlug) ? 'slide-left' : 'slide-right'
  }
})
</script>

<style>
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all .2s;
}

.slide-left-enter-from, .slide-right-leave-to {
  transform: translate(100px, 0);
}

.slide-left-leave-to, .slide-right-enter-from {
  transform: translate(-100px, 0);
}
</style>