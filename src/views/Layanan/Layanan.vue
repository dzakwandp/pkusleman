<template>
  <div class="flex flex-col p-4 md:px-20 mt-10 min-h-screen">
    <p class="text-4xl text-center text-gray-800">Layanan Kami.</p>
    <p class="text-gray-800 text-center">
      Seluruh layanan kami guna menunjang kesehatan Anda.
    </p>
    <div class="flex flex-wrap justify-center mt-10 gap-8">
      <div v-for="item in layanan" :key="item.id">
        <p class="flex md:hidden text-xl font-semibold">{{ item.nama_layanan }}</p>
        <CardHover
          :imageUrl="item.image"
          class="size-52 2xl:size-80 aspect-square cursor-pointer"
          @click="this.$router.push(item.route)">
          <HoverButton
            :text="item.nama_layanan"
            class="rounded-md h-max text-xs p-1"
            @click="this.$router.push(item.route)"></HoverButton>
        </CardHover>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

import CardHover from "@/components/inspira-ui/DirectionAwareHover.vue";
import HoverButton from "@/components/inspira-ui/InteractiveHoverButton.vue";
export default {
  components: {
    CardHover,
    HoverButton,
  },
  data() {
    return {
      layanan: [],
    };
  },
  methods: {
    async getLayanan() {
      try {
        const layan = await axios.get(
          "https://apiweb.pkusleman.com/api/layanan"
        );
        this.layanan = layan.data.map((item) => ({
          ...item,
          image: `https://apiweb.pkusleman.com${item.image}`,
        }));
      } catch (err) {
        console.log(err);
      }
    },
  },
  mounted() {
    this.getLayanan();
  },
};
</script>

<style lang="scss" scoped></style>
