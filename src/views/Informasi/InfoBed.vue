<template>
  <div class="flex flex-col px-20 mb-10 min-h-screen">
    <div class="flex flex-col mt-10 w-max mx-auto gap-2">
      <p class="text-4xl text-gray-800">Informasi Tempat Tidur</p>
      <div class="h-[3px] bg-primary-green"></div>
    </div>
    <div class="grid grid-cols-4 gap-4 w-full mt-10">
      <div
        v-for="item in ttidur"
        :key="item.index"
        class="flex flex-col w-full h-full p-4 shadow-lg text-gray-800 rounded-xl hover:bg-primary-green hover:text-white transition duration-500">
        <img :src="imageTTidur" class="rounded-xl mb-2">
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
import imageTTidur from "@/assets/images/tempat_tidur.jpg";

export default {
  data() {
    return {
      ttidur: [],
      imageTTidur: imageTTidur,
    };
  },
  methods: {
    async getTTidur() {
      try {
        const tidur = await axios.get(
          "https://apiweb.pkusleman.com/api/tempat-tidur"
        );
        this.ttidur = tidur.data;
        console.log(this.ttidur);
      } catch (err) {
        console.log(err);
      }
    },
    getKelas(kode) {
      switch (kode) {
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
  },
  mounted() {
    this.getTTidur();
  },
};
</script>

<style lang="scss" scoped></style>
