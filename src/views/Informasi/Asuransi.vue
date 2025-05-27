<template>
  <div class="flex flex-col px-4 md:px-20 my-10 min-h-screen">
    <p class="text-4xl text-center text-gray-800">Asuransi dan Rekanan.</p>
    <p class="text-gray-800 text-center">
      Kami telah melakukan kerjasama dengan beberapa rekanan dan asuransi demi
      kemudahan akses pada kesehatan Anda.
    </p>
    <input
      class="outline outline-1 rounded-sm p-1 text-sm outline-gray-300 my-10 focus:outline-primary-green"
      placeholder="Cari Asuransi/Rekanan"
      v-model="asurSearch" />
    <div class="grid grid-cols-3 md:grid-cols-7 2xl:grid-cols-8 gap-4">
      <a
        v-for="item in filteredMitra"
        :key="item.index"
        :href="item.link"
        target="_blank"
        class="flex flex-col shadow-lg items-center p-2 h-40 2xl:h-52 rounded-xl hover:bg-gray-300 transition duration-500">
        <div class="flex flex-1 items-center text-gray-800">
          <img
            :src="'https://apiweb.pkusleman.com' + item.gambar"
            class="w-24 2xl:w-32 h-max" />
        </div>
        <p class="text-xs text-center">{{ item.nama }}</p>
      </a>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      mitra: [],
      filteredMitra: [],
      asurSearch: "",
    };
  },
  methods: {
    async getMitra() {
      try {
        const mitra = await axios.get(
          "https://apiweb.pkusleman.com/api/asuransi"
        );
        this.mitra = mitra.data;
        this.filteredMitra = this.mitra;
      } catch (err) {
        console.log(err);
      }
    },
  },
  watch: {
    asurSearch: {
      handler() {
        if (this.asurSearch.length === 0) {
          this.filteredMitra = this.mitra;
        } else {
          this.filteredMitra = this.mitra.filter((asur) =>
            asur.nama.toLowerCase().includes(this.asurSearch.toLowerCase())
          );
        }
      },
      deep: true,
    },
  },
  mounted() {
    this.getMitra();
  },
};
</script>

<style lang="scss" scoped></style>
