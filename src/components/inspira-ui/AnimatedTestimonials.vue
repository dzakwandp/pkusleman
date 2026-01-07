<template>
  <div
    class="mx-auto max-w-sm px-4 py-20 font-sans antialiased lg:px-12 md:max-w-4xl md:px-8">
    <div
      v-if="props.testimonials && props.testimonials.length"
      class="relative grid grid-cols-1 gap-20 md:grid-cols-2">
      <div>
        <div class="relative h-80 w-full">
          <Motion
            v-for="(testimonial, index) in props.testimonials"
            :key="testimonial.id || index"
            as="div"
            :initial="{
              opacity: 0,
              scale: 0.9,
              z: -100,
              rotate: randomRotateY(),
              y: [0],
            }"
            :animate="{
              opacity: isActive(index) ? 1 : 0.7,
              scale: isActive(index) ? 1 : 0.95,
              z: isActive(index) ? 0 : -100,
              rotate: isActive(index) ? 0 : randomRotateY(),
              zIndex: isActive(index) ? 40 : testimonials.length + 2 - index,
              y: isActive(index) ? [0, -80, 0] : [0],
            }"
            :exit="{
              opacity: 0,
              scale: 0.9,
              z: 100,
              rotate: randomRotateY(),
              y: [0],
            }"
            :transition="{
              duration: 0.4,
              ease: 'easeInOut',
            }"
            class="absolute inset-0 origin-bottom">
            <img
              :src="getImage(testimonial.image)"
              :alt="testimonial.name"
              width="500"
              height="500"
              :draggable="false"
              class="size-full rounded-3xl object-cover object-center" />
          </Motion>
        </div>
      </div>
      <div class="flex flex-col justify-between py-4">
        <Motion
          :key="active"
          as="div"
          :initial="{
            y: 20,
            opacity: 0,
          }"
          :animate="{
            y: 0,
            opacity: 1,
          }"
          :exit="{
            y: -20,
            opacity: 0,
          }"
          :transition="{
            duration: 0.2,
            ease: 'easeInOut',
          }">
          <h3 class="text-2xl font-bold text-black dark:text-white">
            {{ props.testimonials[active].name }}
          </h3>
          <p class="text-sm text-gray-500 dark:text-neutral-500">
            {{ props.testimonials[active].designation }}
          </p>
          <Motion
            as="p"
            class="mt-8 text-sm text-gray-500 dark:text-neutral-300">
            <Motion
              v-for="(word, index) in activeTestimonialQuote"
              :key="index"
              as="span"
              :initial="{
                filter: 'blur(10px)',
                opacity: 0,
                y: 5,
              }"
              :animate="{
                filter: 'blur(0px)',
                opacity: 1,
                y: 0,
              }"
              :exit="{
                filter: 'blur(10px)',
                opacity: 0,
                y: 5,
              }"
              :transition="{
                duration: 0.2,
                ease: 'easeInOut',
                delay: 0.02 * index,
              }"
              class="inline-block">
              {{ word }}&nbsp;
            </Motion>
          </Motion>
        </Motion>
        <div class="flex gap-4 pt-12 md:pt-0">
          <button
            class="group/button flex size-7 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800"
            @click="handlePrev">
            <font-awesome-icon
              :icon="['fas', 'arrow-left']"
              class="size-5 text-black transition-transform duration-300 group-hover/button:rotate-12 dark:text-neutral-400" />
          </button>
          <button
            class="group/button flex size-7 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800"
            @click="handleNext">
            <font-awesome-icon
              :icon="['fas', 'arrow-right']"
              class="size-5 text-black transition-transform duration-300 group-hover/button:-rotate-12 dark:text-neutral-400" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import { Motion } from "motion-v";

import avaMale from "@/assets/images/ava_male.jpg";
import avaFemale from "@/assets/images/ava_female.jpg";

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  designation: string;
  image: string;
}
interface Props {
  testimonials?: Testimonial[];
  autoplay?: boolean;
  duration?: number;
}

const props = withDefaults(defineProps<Props>(), {
  testimonials: () => [],
  autoplay: () => false,
  duration: 5000,
});

const active = ref(0);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const interval = ref<any>();

const activeTestimonialQuote = computed(() => {
  if (!props.testimonials || props.testimonials.length === 0) return [];
  const testimonial = props.testimonials[active.value];
  return testimonial ? testimonial.quote.split(" ") : [];
});

onMounted(() => {
  if (props.autoplay) {
    startAutoplay();
    document.addEventListener("visibilitychange", handleVisibilityChange);
  }
});

onUnmounted(() => {
  stopAutoplay();
  document.removeEventListener("visibilitychange", handleVisibilityChange);
});

function startAutoplay() {
  if (!interval.value) {
    interval.value = setInterval(handleNext, props.duration);
  }
}

function stopAutoplay() {
  if (interval.value) {
    clearInterval(interval.value);
    interval.value = null;
  }
}

function handleVisibilityChange() {
  if (document.hidden) {
    stopAutoplay();
  } else {
    startAutoplay();
  }
}

function getImage(gender: string) {
  if (gender === "male") {
    return avaMale;
  } else {
    return avaFemale;
  }
}

function handleNext() {
  if (!props.testimonials || props.testimonials.length === 0) return;
  active.value = (active.value + 1) % props.testimonials.length;
}

function handlePrev() {
  if (!props.testimonials || props.testimonials.length === 0) return;
  active.value =
    (active.value - 1 + props.testimonials.length) % props.testimonials.length;
}

function isActive(index: number) {
  return active.value === index;
}

function randomRotateY() {
  return Math.floor(Math.random() * 21) - 10;
}
</script>
