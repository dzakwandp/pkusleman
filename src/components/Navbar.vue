<template>
  <div class="flex flex-col top-0 sticky z-50">
    <!-- top navbar -->
    <div
      class="flex justify-between items-center h-10 w-full px-20 bg-primary-green">
      <div class="flex gap-3 items-center">
        <a
          v-for="item in socials"
          :key="item.index"
          class="flex items-center justify-center size-6 rounded-full bg-white"
          :href="item.location"
          target="_blank">
          <font-awesome-icon
            :icon="item.icons"
            class="text-primary-green text-lg" />
        </a>
      </div>
      <div class="flex gap-5 items-center text-white">
        <a
          class="flex gap-1"
          href="https://wa.me/6281333315119"
          target="_blank">
          <font-awesome-icon :icon="['fab', 'whatsapp']" class="text-xl" />
          <p class="text-sm">WhatsApp</p>
        </a>
        <div class="flex gap-1 items-center">
          <div
            class="flex items-center justify-center size-6 rounded-full bg-white">
            <font-awesome-icon
              :icon="['fas', 'truck-medical']"
              class="text-red-500 text-sm animate-pulse" />
          </div>
          <div class="flex gap-1 items-baseline text-sm">
            <p>IGD:</p>
            <a href="tel:02747778610">(0274) 7778610</a>
          </div>
        </div>
        <div class="text-white text-xl">|</div>
        <a
          class="flex gap-1"
          href="https://daftar.pkusleman.com"
          target="_blank">
          <font-awesome-icon
            :icon="['fas', 'clipboard-list']"
            class="text-xl" />
          <p class="text-sm">Daftar Online</p>
        </a>
      </div>
    </div>
    <!-- main navbar -->
    <div
      class="flex justify-between items-center h-16 w-full px-20 border-b-[1px] bg-white border-b-gray-300">
      <img
        :src="Logo"
        class="h-full py-2 cursor-pointer"
        @click="this.$router.push('/')" />
      <nav class="flex items-center h-full">
        <ul class="flex font-medium text-gray-800 space-x-10 h-full">
          <li
            v-for="link in links"
            :key="link.text"
            class="flex relative group h-full items-center">
            <RouterLink
              v-if="!link.child"
              :to="link.location"
              class="hover:text-primary-green transition-colors">
              {{ link.text }}
            </RouterLink>

            <!-- Dropdown trigger -->
            <div
              v-else
              class="cursor-pointer hover:text-primary-green transition-colors">
              {{ link.text }}
              <font-awesome-icon
                :icon="['fas', 'chevron-down']"
                class="ml-1 inline text-sm transition-transform group-hover:rotate-180" />

              <!-- Dropdown menu -->
              <ul
                class="absolute right-0 z-10 mt-2 hidden w-max max-h-48 rounded-md bg-white p-2 shadow-lg group-hover:flex group-hover:flex-wrap group-hover:flex-col">
                <li v-for="child in link.child" :key="child.text">
                  <RouterLink
                    :to="child.location"
                    class="block rounded px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-primary-green">
                    {{ child.text }}
                  </RouterLink>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import Logo from "@/assets/images/logo.png";
import axios from "axios";
import { RouterLink } from "vue-router";
export default {
  data() {
    return {
      Logo: Logo,
      links: [
        {
          text: "Dokter",
          child: [
            { text: "Daftar Dokter", location: "/dokter" },
            { text: "Jadwal Dokter", location: "/jadwaldokter" },
          ],
        },
        {
          text: "Layanan Kesehatan",
          child: [{ text: "Layanan Kami", location: "/layanan" }],
        },
        {
          text: "Tentang Kami",
          child: [
            { text: "Profile", location: "/profile" },
            { text: "Sejarah", location: "/history" },
            { text: "Hubungi Kami", location: "/contact" },
          ],
        },
        {
          text: "Pusat Informasi",
          child: [
            {
              text: "Informasi Tempat Tidur",
              location: "/informasi-tempat-tidur",
            },
            {
              text: "Asuransi",
              location: "/asuransi",
            },
            {
              text: "Promo Layanan",
              location: "/promo",
            },
            {
              text: "Artikel & Berita",
              location: "/artikel-berita",
            },
          ],
        },
      ],
      socials: [
        {
          icons: ["fab", "instagram"],
          location: "https://instagram.com/rspkusleman",
        },
        {
          icons: ["far", "envelope"],
          location: "mailto:rspkusleman@gmail.com",
        },
        {
          icons: ["fas", "location-dot"],
          location: "https://maps.app.goo.gl/XNno7v5Uud271Cna6",
        },
        {
          icons: ["fab", "youtube"],
          location: "https://www.youtube.com/@PKUSleman",
        },
      ],
    };
  },
  methods: {
    async getLayanan() {
      try {
        const layan = await axios.get(
          "http://apiweb.pkusleman.com/api/layanan"
        );
        this.links[1].child.push(
          ...layan.data.map((item) => ({
            text: item.nama_layanan,
            location: item.route,
          }))
        );
        console.log(this.links[1].child);
      } catch (err) {
        console.log(err);
      }
    },
  },
  mounted() {
    this.getLayanan();
  },
};
</script>

<style lang="scss" scoped></style>
