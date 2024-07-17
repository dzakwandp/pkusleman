<template>
  <div
    @scroll="handleScroll()"
    class="flex w-full h-max top-0 fixed z-10 px-4 md:px-28 pt-4 pb-2 transition ease-in-out duration-700"
    :class="isScrolled ? 'bg-white' : 'bg-white/60'">
    <div
      class="flex flex-row md:flex-col w-full md:w-1/2 justify-between md:justify-normal gap-4">
      <img :src="logo" class="w-1/2" />
      <font-awesome-icon
        icon="fa-solid fa-bars"
        size="xl"
        class="md:hidden text-[#0A6E45]"
        @click="showMobileMenu = !showMobileMenu"></font-awesome-icon>
      <div class="hidden md:flex font-bold text-[#0A6E45] gap-6 px-6">
        <div v-for="item in links" :key="item.index">
          <RouterLink :to="item.link">{{ item.title }}</RouterLink>
        </div>
      </div>
    </div>
    <div class="hidden md:flex w-1/2 items-center justify-end">
      <a
        href="https://wa.me/6281333315119"
        target="_blank"
        class="flex bg-[#0A6E45] text-white text-xs p-2 h-max rounded-md gap-2">
        <font-awesome-icon
          icon="fa-brands fa-whatsapp"
          size="xl"></font-awesome-icon>
        Chat Dengan Kami
      </a>
    </div>

    <!-- mobile menu -->
    <Transition name="slide">
      <div
        v-if="showMobileMenu"
        class="w-screen h-screen flex flex-col absolute top-0 left-0 z-20 bg-white">
        <font-awesome-icon
          icon="fa-solid fa-x"
          size="xl"
          class="self-end mr-4 mt-4 text-[#0A6E45]"
          @click="showMobileMenu = !showMobileMenu" />
        <img :src="logo" class="w-1/2 mx-auto mt-4" />
        <div
          class="flex flex-col mt-10 mx-auto gap-4 text-[#0A6E45] font-bold text-xl">
          <div v-for="items in links" :key="items.index">
            <RouterLink
              :to="items.link"
              @click="showMobileMenu = !showMobileMenu"
              >{{ items.title }}</RouterLink
            >
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script>
import logo from "@/assets/images/logo.png";
import { RouterLink } from "vue-router";
export default {
  data() {
    return {
      logo: logo,
      links: [
        { title: "Home", link: "/" },
        { title: "Profil", link: "/profil" },
        { title: "Layanan", link: "/layanan" },
        { title: "Jadwal Dokter", link: "/jadwaldokter" },
        { title: "Informasi Bed", link: "/informasibed" },
      ],
      isScrolled: false,
      showMobileMenu: false,
    };
  },
  methods: {
    handleScroll(event) {
      if (window.scrollY > 145) {
        this.isScrolled = true;
      }
      if (window.scrollY < 145) {
        this.isScrolled = false;
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s;
}
.slide-enter-from {
  transform: translateY(100%);
}
.slide-leave-to {
  transform: translateY(100%);
}
</style>
