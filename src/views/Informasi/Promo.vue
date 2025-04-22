<template>
  <div class="flex flex-col px-20 mt-10 min-h-screen">
    <p class="text-4xl text-center text-gray-800">Promo Layanan.</p>
    <p class="text-gray-800 text-center">
      Berbagai promo layanan menarik untuk kebutuhan kesehatan anda.
    </p>
    <div class="grid grid-cols-5 mt-10">
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
  </div>
</template>

<script>
import { defineComponent } from "vue";
import "viewerjs/dist/viewer.css";
import { component as VueViewer } from "v-viewer";
import axios from "axios";

export default defineComponent({
  components: {
    VueViewer,
  },
  data() {
    return {
      promo: [],
    };
  },
  methods: {
    async getPromo() {
      try {
        const promo = await axios.get("https://apiweb.pkusleman.com/api/promo");
        this.promo = promo.data.map((data) => ({
          ...data,
          image: `https://apiweb.pkusleman.com${data.image}`,
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
