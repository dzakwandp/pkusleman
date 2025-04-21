<template>
  <div class="flex flex-col px-20 mt-10">
    <p class="text-4xl text-center text-gray-800">Promo Layanan</p>
    <p class="text-gray-800 text-center">
      Berbagai promo layanan menarik untuk kebutuhan kesehatan anda.
    </p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      promo: [],
    };
  },
  methods: {
    async getPromo() {
      try {
        const promo = await axios.get("https://apiweb.pkusleman.com/api/promo");
        this.promo = promo.data;
      } catch (err) {
        console.log(err);
      }
    },
  },
  mounted() {
    this.getPromo();
  },
};
</script>

<style lang="scss" scoped></style>
