<template>
  <div
    @scroll="handleScroll()"
    class="flex w-full h-max top-0 fixed z-10 px-28 pt-4 pb-2 transition ease-in-out duration-700"
    :class="isScrolled ? 'bg-white' : 'bg-white/60'">
    <div class="flex flex-col w-1/2 gap-4">
      <img :src="logo" class="w-1/2" />
      <div class="flex font-bold text-[#0A6E45] gap-6 px-6">
        <div v-for="item in links" :key="item.index">
          <RouterLink :to="item.link">{{ item.title }}</RouterLink>
        </div>
      </div>
    </div>
    <div class="flex w-1/2 items-center justify-end">
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
      ],
      isScrolled: false,
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

<style lang="scss" scoped></style>
