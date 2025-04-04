<template>
  <div class="flex flex-col">
    <div
      class="flex h-max px-20 py-10 gap-10 bg-gradient-to-b from-white to-gray-400">
      <div class="flex flex-col w-1/4 gap-4">
        <img :src="Logo" class="w-9/12" />
        <div
          v-for="item in footerData"
          :key="item.index"
          class="flex gap-2 items-center">
          <font-awesome-icon
            :icon="item.icon"
            class="text-primary-green text-xl" />
          <p>{{ item.text }}</p>
        </div>
      </div>
      <div class="flex flex-col w-1/4">
        <p class="text-3xl mb-8">Hubungi Kami</p>
        <div
          v-for="item in hubungiKami"
          :key="item.index"
          class="flex items-center gap-2 mb-2">
          <font-awesome-icon
            :icon="['fas','caret-right']"
            class="text-primary-green text-xl" />
          <a :href="item.link">
            {{ item.text }}
          </a>
        </div>
      </div>
      <div class="flex flex-col w-1/4">
        <p class="text-3xl mb-8">Tentang Kami</p>
        <div
          v-for="item in tentangKami"
          :key="item.index"
          class="flex items-center gap-2 mb-2">
          <font-awesome-icon
            :icon="['fas','caret-right']"
            class="text-primary-green text-xl" />
          <a :href="item.link">
            {{ item.text }}
          </a>
        </div>
      </div>
      <div class="flex flex-col w-1/4">
        <p class="text-3xl mb-8">Quick Link</p>
        <div
          v-for="item in quickLink"
          :key="item.index"
          class="flex items-center gap-2 mb-2">
          <font-awesome-icon
            :icon="['fas','caret-right']"
            class="text-primary-green text-xl" />
          <a :href="item.link">
            {{ item.text }}
          </a>
        </div>
      </div>
    </div>
    <div
      class="flex h-8 justify-center items-center bg-primary-green text-white">
      <p class="text-sm">© Copyright 2025 | RS PKU Muhammadiyah Sleman</p>
    </div>
  </div>
</template>

<script>
import Logo from "@/assets/images/logo.png";
export default {
  data() {
    return {
      Logo: Logo,
      footerData: [
        {
          icon: ["fas", "location-dot"],
          text: "Jl. Pendowoharjo, Sawahan, Pandowoharjo, Kec. Sleman, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55512",
        },
        { icon: ["fas", "at"], text: "pkusleman@gmail.com" },
        { icon: ["fas", "phone"], text: "(0274) 7778610" },
      ],
      hubungiKami: [
        {
          text: "Emergency Call (24 Jam)",
          link: "tel:0881010888119",
        },
        {
          text: "Call Center (24 Jam)",
          link: "tel:02747778610",
        },
        {
          text: "Whatsapp",
          link: "https://wa.me/6281333315119",
        },
      ],
      tentangKami: [
        {
          text: "Profile",
          link: "/profile",
        },
        {
          text: "Sejarah",
          link: "/sejarah",
        },
        {
          text: "Visi - Misi",
          link: "/profile",
        },
      ],
      quickLink: [
        {
          text: "Jadwal Dokter",
          link: "/jadwaldokter",
        },
        {
          text: "Daftar Online",
          link: "/daftaronline",
        },
        {
          text: "Promo Spesial",
          link: "#",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
