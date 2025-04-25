<template>
  <div class="flex flex-col top-0 sticky z-50">
    <!-- top navbar -->
    <div
      class="hidden md:flex justify-between items-center h-10 w-full md:px-20 bg-primary-green">
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
      class="flex justify-between items-center h-16 w-full px-5 md:px-20 border-b-[1px] bg-white border-b-gray-300">
      <img
        :src="Logo"
        class="h-full py-2 cursor-pointer"
        @click="this.$router.push('/')" />
      <!-- Menu Button (Visible on Mobile) -->
      <button @click="mobileIsOpen = !mobileIsOpen" class="md:hidden">
        <Transition name="rotate-fade" mode="out-in">
          <font-awesome-icon
            :key="mobileIsOpen"
            :icon="mobileIsOpen ? ['fas', 'xmark'] : ['fas', 'bars']"
            class="text-2xl text-primary-green" />
        </Transition>
      </button>
      <!-- desktop nav -->
      <nav class="hidden md:flex items-center h-full">
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
      <!-- Mobile Menu Overlay -->
    </div>
  </div>
  <Transition name="slide-down">
    <div
      v-if="mobileIsOpen"
      class="fixed inset-0 bg-white z-10 flex flex-col items-center justify-center gap-6 p-8">
      <a href="#" class="text-xl font-semibold">Home</a>
      <a href="#" class="text-xl font-semibold">About</a>
      <a href="#" class="text-xl font-semibold">Services</a>
      <a href="#" class="text-xl font-semibold">Contact</a>
    </div>
  </Transition>
</template>

<script>
import "font-awesome-animation/css/font-awesome-animation.min.css";
import Logo from "@/assets/images/logo.png";
import axios from "axios";
export default {
  data() {
    return {
      mobileIsOpen: false,
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
          "https://apiweb.pkusleman.com/api/layanan"
        );
        this.links[1].child.push(
          ...layan.data.map((item) => ({
            text: item.nama_layanan,
            location: item.route,
          }))
        );
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

<style scoped>
.rotate-fade-enter-active {
  animation: spin-in 0.4s ease forwards;
}

.rotate-fade-leave-active {
  opacity: 0;
  transition: opacity 0.2s ease;
}

@keyframes spin-in {
  from {
    opacity: 0;
    transform: rotate(-180deg) scale(0.8);
  }
  to {
    opacity: 1;
    transform: rotate(0deg) scale(1);
  }
}

.slide-down-enter-active {
  animation: slideIn 0.4s ease-out forwards;
}
.slide-down-leave-active {
  animation: slideOut 0.4s ease-in forwards;
}

@keyframes slideIn {
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0%);
    opacity: 1;
  }
}

@keyframes slideOut {
  from {
    transform: translateY(0%);
    opacity: 1;
  }
  to {
    transform: translateY(-100%);
    opacity: 0;
  }
}
</style>
