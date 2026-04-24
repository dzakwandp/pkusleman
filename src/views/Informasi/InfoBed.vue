<template>
  <div class="flex flex-col px-4 md:px-20 mb-10 min-h-screen">
    <div class="flex flex-col mt-10 w-max mx-auto gap-2">
      <p class="text-3xl md:text-4xl text-gray-800">Informasi Tempat Tidur</p>
      <div class="h-[3px] bg-primary-green"></div>
    </div>
    <div
      class="flex gap-4 md:justify-center sticky top-[4rem] md:top-[6.5rem] z-10 bg-white py-2 mt-10 px-2 md:px-0 overflow-auto text-nowrap">
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
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 w-full mt-10">
      <div
        v-for="item in filteredTTidur"
        :key="item.index"
        class="flex flex-col w-full h-full p-4 shadow-lg text-gray-800 rounded-xl hover:bg-primary-green hover:text-white transition duration-500">
        <img :src="getImage(item.KELAS)" class="rounded-xl mb-2" />
        <p class="text-sm font-bold">{{ getKelas(item.KELAS) }}</p>
        <p class="font-semibold">{{ item.FS_NM_KAMAR }}</p>
        <div class="flex justify-between text-sm">
          <p>Tersedia: {{ item.KAMAR_KOSONG }}</p>
          <p>Kapasitas: {{ item.KAMAR_KAPASITAS }}</p>
        </div>
        <p class="text-xs mt-2">
          Terakhir Update: <br />{{ moment().format("DD-MM-YYYY HH:mm:s") }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";
import hcu from "@/assets/images/bed/hcu.jpg";
import icu from "@/assets/images/bed/icu.jpg";
import isolasi from "@/assets/images/bed/isolasi.jpg";
import kelas1 from "@/assets/images/bed/kelas1.jpg";
import kelas2 from "@/assets/images/bed/kelas2.jpg";
import kelas3 from "@/assets/images/bed/kelas3.jpg";
import nicu from "@/assets/images/bed/nicu.jpg";
import nonkelas from "@/assets/images/bed/nonkelas.jpg";

export default {
  setup() {
    return { moment };
  },
  data() {
    return {
      ttidur: [],
      filteredTTidur: [],
      image: [hcu, icu, isolasi, kelas1, kelas2, kelas3, nicu, nonkelas],
      kelas: [
        { kode: "KLAS I", text: "Kelas 1" },
        { kode: "KLAS II", text: "Kelas 2" },
        { kode: "KLAS III", text: "Kelas 3" },
        { kode: "NICU", text: "NICU" },
        { kode: "KBY", text: "KBY" },
        { kode: "ISOLASI", text: "Isolasi" },
        { kode: "ICU", text: "ICU" },
        { kode: "HCU", text: "HCU" },
        { kode: "KLAS VIP ", text: "VIP" },
      ],
      selectedFilters: [],
    };
  },
  methods: {
    async getTTidur() {
      try {
        const tidur = await axios.get(
          "https://apiweb.pkusleman.com/api/tempat-tidur",
        );
        this.ttidur = tidur.data.recordset;
        this.filteredTTidur = this.ttidur;
        console.log(this.ttidur);
      } catch (err) {
        console.log(err);
      }
    },
    getKelas(kode) {
      switch (kode) {
        case "ISOLASI":
          return "Isolasi";
          break;
        case "ICU":
          return "ICU";
          break;
        case "NICU":
          return "NICU";
          break;
        case "HCU":
          return "HCU";
          break;
        case "KLAS I":
          return "Kelas 1";
          break;
        case "KLAS II":
          return "Kelas 2";
          break;
        case "KLAS III":
          return "Kelas 3";
          break;
        case "KLAS VIP ":
          return "VIP";
          break;
        case "KBY":
          return "KBY";
          break;
        default:
          return "Non Kelas";
      }
    },
    getImage(kode) {
      switch (kode) {
        case "ISOLASI":
          return this.image[2];
          break;
        case "ICU":
          return this.image[1];
          break;
        case "NICU":
          return this.image[6];
          break;
        case "HCU":
          return this.image[0];
          break;
        case "KLAS I":
          return this.image[3];
          break;
        case "KLAS II":
          return this.image[4];
          break;
        case "KLAS III":
          return this.image[5];
          break;
        case "KLAS VIP ":
          return this.image[7];
          break;
        case "KBY":
          return this.image[7];
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
            this.selectedFilters.includes(kelas.KELAS),
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
