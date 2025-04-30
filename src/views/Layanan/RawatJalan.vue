<template>
  <div class="flex flex-col px-4 md:px-20 mt-10 min-h-screen">
    <div class="flex flex-col w-max mx-auto gap-2 mb-10">
      <p class="text-4xl text-center text-gray-800">Layanan Rawat Jalan</p>
      <div class="h-[2px] bg-primary-green w-full" />
    </div>
    <Accordion>
      <AccordionItem v-for="item in data" :key="item.index">
        <template #accordion-trigger>
          <div class="flex items-center gap-2">
            <div class="w-12">
              <font-awesome-icon
                :icon="JSON.parse(item.icon)"
                class="text-xl" />
            </div>
            <p class="font-semibold">{{ item.nama_poli }}</p>
          </div>
        </template>
        <template #accordion-content>
          <div class="flex flex-col p-4">
            <div v-html="item.deskripsi" class="p-2" />
            <div class="flex flex-col rounded-lg shadow-xl mt-10">
              <p
                class="bg-primary-green rounded-t-lg text-white font-semibold p-2">
                Fasilitas {{ item.nama_poli }}
              </p>
              <div
                class="flex flex-col text-wrap gap-2 p-2 list-class"
                :class="getFasilitasClass(item.daftar_layanan)"
                v-html="getFasilitas(item.daftar_layanan)" />
            </div>
          </div>
        </template>
      </AccordionItem>
    </Accordion>
  </div>
</template>

<script>
import axios from "axios";

import Accordion from "@/components/accordion/Accordion.vue";
import AccordionItem from "@/components/accordion/AccordionItem.vue";
export default {
  components: {
    Accordion,
    AccordionItem,
  },
  data() {
    return {
      data: [],
    };
  },
  methods: {
    async getData() {
      try {
        const data = await axios.get(
          "https://apiweb.pkusleman.com/api/layanan/poli"
        );
        this.data = data.data;
      } catch (err) {
        console.log(err);
      }
    },
    getFasilitas(fasil) {
      if (fasil === null) {
        return "-";
      } else {
        return fasil;
      }
    },
    getFasilitasClass(fasil) {
      if (fasil === null) {
        return
      } else {
        return "ml-10";
      }
    },
  },
  mounted() {
    this.getData();
  },
};
</script>

<style scoped>
.list-class {
  list-style-image: url(../../assets/icons/Check.svg);
}
</style>
