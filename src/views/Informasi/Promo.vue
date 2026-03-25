<template>
  <div class="flex flex-col px-4 md:px-20 mt-10 min-h-screen">
    <p class="text-4xl text-center text-gray-800">Promo Layanan.</p>
    <p class="text-gray-800 text-center">
      Berbagai promo layanan menarik untuk kebutuhan kesehatan anda.
    </p>
    <div
      v-if="promo.length > 0"
      class="grid grid-cols-2 md:grid-cols-5 mt-10 gap-2">
      <div
        v-for="item in promo"
        :key="item.index"
        class="shadow-xl rounded-lg hover:outline hover:outline-1 hover:outline-primary-green p-2">
        <VueViewer :images="item.image">
          <p class="text-center font-semibold mb-2">{{ item.nama_promo }}</p>
          <img class="w-11/12 cursor-pointer mx-auto" :src="item.image" />
        </VueViewer>
      </div>
    </div>
    <div v-else class="flex justify-center items-center h-96">
      <p class="text-gray-800 text-center">
        <img :src="notFound" alt="" class="w-3/4 mx-auto mt-0 md:mt-32" />
        <span class="text-gray-800 text-center"
          >Mohon maaf, promo belum tersedia</span
        >
      </p>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import "viewerjs/dist/viewer.css";
import { component as VueViewer } from "v-viewer";
import axios from "axios";
import notFound from "@/assets/images/404.gif";

export default defineComponent({
  components: {
    VueViewer,
  },
  data() {
    return {
      promo: [],
      notFound: notFound,
    };
  },
  methods: {
    async getPromo() {
      try {
        const promo = await axios.get("https://apiweb.pkusleman.com/api/promo");
        this.promo = promo.data.map((data) => ({
          ...data,
          image: `https://apiweb.pkusleman.com${data.gambar}`,
        }));
        console.log(this.images);
      } catch (err) {
        console.log(err);
      }
    },
  },
  mounted() {
    this.getPromo();
  },
});
</script>

<style lang="scss" scoped></style>
