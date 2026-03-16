<template>
  <div>
    <Navbar />
    <RouterView class="router-view" v-slot="{ Component }">
      <Transition name="fade" mode="out-in" @before-enter="handleAfterEnter">
        <component :is="Component" />
      </Transition>
    </RouterView>
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import { useHead } from "@unhead/vue";

export default {
  components: {
    Navbar,
    Footer,
  },
  setup() {
    useHead({
      titleTemplate: "%s - RS PKU Muhammadiyah Sleman",
      title: "Beranda",
      meta: [
        {
          name: "description",
          content: "Situs resmi Rumah Sakit PKU Muhammadiyah Sleman. Temukan informasi layanan kesehatan terbaik untuk Anda dan keluarga.",
        },
        {
          property: "og:title",
          content: "RS PKU Muhammadiyah Sleman",
        },
        {
          property: "og:description",
          content: "Situs resmi Rumah Sakit PKU Muhammadiyah Sleman.",
        },
        {
          property: "og:type",
          content: "website",
        },
      ],
    });
  },
  methods: {
    handleAfterEnter() {
      window.scrollTo({ top: 0 });
    },
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
