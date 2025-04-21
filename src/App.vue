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
export default {
  components: {
    Navbar,
    Footer,
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
