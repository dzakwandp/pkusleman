<template>
  <div class="flex flex-col px-20 mb-10 min-h-screen">
    <div class="flex flex-col mt-10 w-max mx-auto gap-2">
      <p class="text-4xl text-gray-800">Informasi Tempat Tidur</p>
      <div class="h-[3px] bg-primary-green"></div>
    </div>
    <div
      class="flex gap-4 justify-center sticky top-[6.5rem] z-10 bg-white py-2 mt-10">
      <div
        v-for="item in kelas"
        :key="item.index"
        @click="toggleFilter(item.kode)"
        class="p-2 cursor-pointer outline outline-1 outline-primary-green rounded-xl text-sm hover:bg-primary-green hover:text-white transition"
        :class="{
          'bg-primary-green text-white': selectedFilters.includes(item.kode),
          'bg-white text-gray-800': !selectedFilters.includes(item.kode),
        }">
        {{ item.text }}
      </div>
    </div>
    <div class="grid grid-cols-4 gap-4 w-full mt-10">
      <div
        v-for="item in filteredTTidur"
        :key="item.index"
        class="flex flex-col w-full h-full p-4 shadow-lg text-gray-800 rounded-xl hover:bg-primary-green hover:text-white transition duration-500">
        <img :src="getImage(item.kodekelas)" class="rounded-xl mb-2" />
        <p class="text-sm">{{ getKelas(item.kodekelas) }}</p>
        <p class="font-semibold">{{ item.namaruang }}</p>
        <div class="flex justify-between text-sm">
          <p>Tersedia: {{ item.tersedia }}</p>
          <p>Kapasitas: {{ item.kapasitas }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import hcu from "@/assets/images/bed/hcu.jpg";
import icu from "@/assets/images/bed/icu.jpg";
import isolasi from "@/assets/images/bed/isolasi.jpg";
import kelas1 from "@/assets/images/bed/kelas1.jpg";
import kelas2 from "@/assets/images/bed/kelas2.jpg";
import kelas3 from "@/assets/images/bed/kelas3.jpg";
import nicu from "@/assets/images/bed/nicu.jpg";
import nonkelas from "@/assets/images/bed/nonkelas.jpg";

export default {
  data() {
    return {
      ttidur: [],
      filteredTTidur: [],
      image: [hcu, icu, isolasi, kelas1, kelas2, kelas3, nicu, nonkelas],
      kelas: [
        { kode: "KL1", text: "Kelas 1" },
        { kode: "KL2", text: "Kelas 2" },
        { kode: "KL3", text: "Kelas 3" },
        { kode: "NON", text: "Non Kelas" },
        { kode: "NIC", text: "NICU" },
        { kode: "ISO", text: "Isolasi" },
        { kode: "ICU", text: "ICU" },
        { kode: "HCU", text: "HCU" },
      ],
      selectedFilters: [],
    };
  },
  methods: {
    async getTTidur() {
      try {
        const tidur = await axios.get(
          "https://apiweb.pkusleman.com/api/tempat-tidur"
        );
        this.ttidur = tidur.data;
        this.filteredTTidur = this.ttidur;
        console.log(this.ttidur);
      } catch (err) {
        console.log(err);
      }
    },
    getKelas(kode) {
      switch (kode) {
        case "ISO":
          return "Isolasi";
          break;
        case "ICU":
          return "ICU";
          break;
        case "NIC":
          return "NICU";
          break;
        case "HCU":
          return "HCU";
          break;
        case "KL1":
          return "Kelas 1";
          break;
        case "KL2":
          return "Kelas 2";
          break;
        case "KL3":
          return "Kelas 3";
          break;
        default:
          return "Non Kelas";
      }
    },
    getImage(kode) {
      switch (kode) {
        case "ISO":
          return this.image[2];
          break;
        case "ICU":
          return this.image[1];
          break;
        case "NIC":
          return this.image[6];
          break;
        case "HCU":
          return this.image[0];
          break;
        case "KL1":
          return this.image[3];
          break;
        case "KL2":
          return this.image[4];
          break;
        case "KL3":
          return this.image[5];
          break;
        default:
          return this.image[7];
      }
    },
    toggleFilter(kelas) {
      const index = this.selectedFilters.indexOf(kelas);
      if (index === -1) {
        this.selectedFilters.push(kelas);
      } else {
        this.selectedFilters.splice(index, 1);
      }
    },
  },
  watch: {
    selectedFilters: {
      handler() {
        if (this.selectedFilters.length === 0) {
          this.filteredTTidur = this.ttidur;
        } else {
          this.filteredTTidur = this.ttidur.filter((kelas) =>
            this.selectedFilters.includes(kelas.kodekelas)
          );
        }
      },
      deep: true,
    },
  },
  mounted() {
    this.getTTidur();
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  @apply transition-all duration-300;
}
.fade-enter-from,
.fade-leave-to {
  @apply opacity-0 translate-y-4;
}
</style>
