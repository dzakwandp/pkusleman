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
            <a href="tel:0881010888119">0881-0108-88-119</a>
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
      <div class="flex h-full gap-10">
        <RouterLink
          v-for="link in links"
          :key="index"
          :to="link.location"
          class="flex items-center h-full hover:border-b-2 border-b-primary-green"
          activeClass="border-b-2 border-b-primary-green">
          <div class="font-light">{{ link.text }}</div>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "@/assets/images/logo.png";
export default {
  data() {
    return {
      Logo: Logo,
      links: [
        { text: "Profile Kami", location: "/jadwaldokter" },
        { text: "Dokter", location: "/dokter" },
        { text: "Layanan Kesehatan", location: "/layanan" },
        { text: "Pusat Informasi", location: "/daftaronline" },
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
};
</script>

<style lang="scss" scoped></style>
