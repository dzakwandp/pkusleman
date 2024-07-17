<template>
  <div class="flex flex-col w-full">
    <img :src="mainImage" class="brightness-75" />
    <div class="my-6 bg-[#0A6E45] h-2 w-3/4 mx-auto"></div>
    <div class="flex flex-col md:px-20 gap-4">
      <div class="text-2xl font-bold text-center md:text-left text-[#0A6E45]">
        Selamat Datang di RS PKU Muhammadiyah Sleman!
      </div>
      <carousel wrap-around :autoplay="2000">
        <slide v-for="items in carousel" :key="items.index">
          <img :src="items.image" />
        </slide>
      </carousel>
      <div class="grid grid-cols-2 gap-4 md:w-1/3 mx-4 md:mx-auto content-center">
        <RouterLink v-for="items in home" :key="items.index" :to="items.link">
          <div
            class="flex flex-col gap-4 aspect-square hover:bg-[#0A6E45]/40 shadow-md shadow-[#0A6E45] items-center justify-center outline outline-2 outline-[#0A6E45] rounded-md transition-colors duration-500 cursor-pointer">
            <img :src="items.image" class="w-1/3" />
            <div class="text-[#0A6E45] font-bold text-2xl">
              {{ items.title }}
            </div>
          </div>
        </RouterLink>
      </div>
    </div>
    <div class="my-6 bg-[#0A6E45] h-2 w-3/4 mx-auto"></div>
  </div>
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import mainImage from "@/assets/images/main_image.jpg";
import pic1 from "@/assets/images/farmasi.jpeg";
import pic2 from "@/assets/images/firdaus.jpeg";
import pic3 from "@/assets/images/igd.jpeg";
import pic4 from "@/assets/images/rawatinap.jpeg";
import pic5 from "@/assets/images/radiologi.jpeg";
import pic6 from "@/assets/images/kamarbersalin.jpeg";
import pic7 from "@/assets/images/nursestation.jpeg";
import pic8 from "@/assets/images/bedahsentral.jpeg";
import profil from "@/assets/images/profile.png";
import layanan from "@/assets/images/layanan.png";
import doctor from "@/assets/images/doctor.png";
export default {
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return {
      mainImage: mainImage,
      carousel: [
        { image: pic1 },
        { image: pic2 },
        { image: pic3 },
        { image: pic4 },
        { image: pic5 },
        { image: pic6 },
        { image: pic7 },
        { image: pic8 },
      ],
      home: [
        { title: "Profil", image: profil, link: "/profil" },
        { title: "Layanan", image: layanan, link: "/layanan" },
        // { title: "Jadwal Dokter", image: doctor, link: "/jadwaldokter" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
