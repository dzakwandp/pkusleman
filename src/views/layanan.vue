<template>
  <div class="flex flex-col w-full">
    <img :src="layananImage" class="brightness-75" />
    <div class="my-6 bg-[#0A6E45] h-2 w-3/4 mx-auto"></div>
    <div class="grid grid-cols-3 gap-4 w-3/4 mx-auto content-center">
      <RouterLink v-for="items in layanan" :key="items.index" :to="items.link">
        <div
          class="flex flex-col max-w-1/3 gap-4 aspect-square hover:bg-[#0A6E45]/40 shadow-md shadow-[#0A6E45] items-center justify-center outline outline-2 outline-[#0A6E45] rounded-md transition-colors duration-500 cursor-pointer">
          <img :src="items.image" class="w-1/3" />
          <div class="text-[#0A6E45] font-bold text-2xl">{{ items.title }}</div>
        </div>
      </RouterLink>
    </div>
    <div class="my-6 bg-[#0A6E45] h-2 w-3/4 mx-auto"></div>
  </div>
</template>

<script>
import layananImage from "@/assets/images/layanan.jpg";
import IGD from "@/assets/images/igd.png";
import IRJ from "@/assets/images/irj.png";
import IRNA from "@/assets/images/irna.png";
import Lab from "@/assets/images/lab.png";
import Radiologi from "@/assets/images/radiology.png";
import Farmasi from "@/assets/images/farmasi.png";
import KBer from "@/assets/images/kamar_bersalin.png";
import { RouterLink } from "vue-router";
export default {
  data() {
    return {
      layananImage: layananImage,
      layanan: [
        { title: "IGD", image: IGD, link: "/layanan/igd" },
        { title: "Rawat Jalan", image: IRJ, link: "/layanan/rawatjalan" },
        { title: "Rawat Inap", image: IRNA, link: "/layanan/rawatinap" },
        { title: "Laboratorium", image: Lab, link: "/layanan/laboratorium" },
        { title: "Radiologi", image: Radiologi, link: "/layanan/radiologi" },
        { title: "Farmasi", image: Farmasi, link: "/layanan/farmasi" },
        {
          title: "Kamar Bersalin",
          image: KBer,
          link: "/layanan/kamarbersalin",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
