<template>
  <div class="flex flex-col px-4 md:px-20 mt-10 min-h-screen">
    <div class="flex flex-col w-max mx-auto gap-2">
      <p class="text-4xl text-center text-gray-800">Layanan Radiologi</p>
      <div class="h-[2px] bg-primary-green w-full" />
    </div>
    <ExpandGallery class="w-11/12 md:w-2/3 h-64 mx-auto mt-10" :images="image" />
    <div v-if="loaded">
      <div class="flex flex-col rounded-lg shadow-lg mt-10">
        <p class="bg-primary-green rounded-t-lg text-white font-semibold p-2">
          Layanan {{ data[0].nama_poli }}
        </p>
        <div class="p-2" v-html="data[0].deskripsi" />
      </div>
      <div class="flex flex-col rounded-lg shadow-lg my-10">
        <p class="bg-primary-green rounded-t-lg text-white font-semibold p-2">
          Layanan Pemeriksaan {{ data[0].nama_poli }}
        </p>
        <div
          class="flex flex-col gap-2 p-2 list-class"
          v-html="data[0].daftar_layanan" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ExpandGallery from "@/components/inspira-ui/ExpandableGallery.vue";
export default {
  components: {
    ExpandGallery,
  },
  data() {
    return {
      data: [],
      image: [],
      loaded: false,
    };
  },
  methods: {
    async getRad() {
      try {
        const data = await axios.get(
          "https://apiweb.pkusleman.com/api/layanan/rad"
        );
        this.data = data.data;
        this.image = JSON.parse(this.data[0].gambar).map(
          (item) => "https://apiweb.pkusleman.com" + item
        );
        this.loaded = true;
      } catch (err) {
        console.log(err);
      }
    },
  },
  mounted() {
    this.getRad();
  },
};
</script>

<style scoped>
.list-class {
  list-style-image: url(../../assets/icons/Check.svg);
}
</style>
