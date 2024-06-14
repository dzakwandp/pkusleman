<template>
  <div class="flex flex-col">
    <div class="flex w-full gap-2 px-4 my-10">
      <!-- right section -->
      <div class="flex flex-col w-1/3 px-20 gap-4">
        <img :src="logo" class="w-max" />
        <div class="flex items-center gap-4">
          <font-awesome-icon icon="location-dot" size="xl" color="#0A6E45" />
          <div>
            Jl. Pendowoharjo, Sawahan, Pandowoharjo, Kec. Sleman, Kabupaten
            Sleman, Daerah Istimewa Yogyakarta 55512
          </div>
        </div>
        <div class="flex items-center gap-4">
          <font-awesome-icon icon="envelope" size="xl" color="#0A6E45" />
          <div>pkusleman@gmail.com</div>
        </div>
        <div class="flex items-center gap-4">
          <font-awesome-icon icon="phone" size="xl" color="#0A6E45" />
          (0274) 7778610
        </div>
      </div>

      <!-- center section -->
      <div class="flex flex-col w-1/3 px-20 gap-4">
        <div class="text-3xl font-semibold text-slate-900">Links</div>
        <div
          v-for="item in links"
          :key="item.index"
          class="flex gap-2 items-center">
          <font-awesome-icon icon="caret-right" color="#0A6E45" />
          <router-link :to="item.link" class="text-slate-900 font-semibold">{{
            item.title
          }}</router-link>
        </div>
      </div>

      <!-- right section -->
      <div class="flex flex-col w-1/3 px-20 gap-4">
        <div class="text-3xl font-semibold text-slate-900">Hubungi Kami</div>
        <div class="flex items-center gap-4">
          <font-awesome-icon icon="envelope" size="xl" color="#0A6E45" />
          <div>pkusleman@gmail.com</div>
        </div>
        <div class="flex items-center gap-4">
          <font-awesome-icon icon="phone" size="xl" color="#0A6E45" />
          (0274) 7778610
        </div>
        <div class="flex items-center gap-5">
          <font-awesome-icon
            icon="fa-brands fa-whatsapp"
            size="xl"
            color="#0A6E45" />
          +62 813-3331-5119
        </div>
      </div>
    </div>
    <div class="flex w-full h-10 bg-[#0A6E45] items-center justify-center">
      <div class="text-white text-xs">
        Copyright ©2024 RS PKU Muhammadiyah Sleman. All Rights Reserved
      </div>
    </div>
  </div>
</template>

<script>
import logo from "@/assets/images/logo.png";
export default {
  data() {
    return {
      logo: logo,
      links: [
        { title: "Home", link: "/" },
        { title: "Profil", link: "/profil" },
        { title: "Layanan", link: "/layanan" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
