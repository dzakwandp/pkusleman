<template>
  <div class="flex flex-col px-4 md:px-20 mt-10 min-h-screen">
    <div class="flex flex-col w-max mx-auto gap-2 mb-10">
      <p class="text-4xl text-center text-gray-800">Layanan Rawat Inap</p>
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
            <p class="font-semibold">{{ item.nama_ruangan }}</p>
          </div>
        </template>
        <template #accordion-content>
          <div class="flex flex-col p-4">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="flex flex-col">
                <img
                  v-for="item in JSON.parse(item.gambar)"
                  :key="item.index"
                  :src="item" />
              </div>
              <div class="flex flex-col px-2 gap-3">
                <p class="text-2xl font-semibold">{{ item.nama_ruangan }}</p>
                <div v-html="item.deskripsi" />
              </div>
            </div>
            <div class="flex flex-col rounded-lg shadow-xl mt-10">
              <p
                class="bg-primary-green rounded-t-lg text-white font-semibold p-2">
                Fasilitas {{ item.nama_poli }}
              </p>
              <div class="flex flex-col md:flex-row my-4 md:my-0 gap-4 md:gap-0">
                <div
                  class="flex flex-col md:w-1/2 text-wrap gap-2 p-2 list-class"
                  :class="getFasilitasClass(item.fasilitas)"
                  v-html="getFasilitas(item.fasilitas)" />
                <div class="flex flex-col md:w-1/2 items-center justify-center">
                  <p class="text-xl font-bold text-gray-800">
                    {{
                      Intl.NumberFormat("id-ID", {
                        style: "currency",
                        currency: "IDR",
                        maximumSignificantDigits: 1,
                      }).format(item.harga)
                    }}
                    <span class="text-sm font-bold text-gray-500">/hari</span>
                  </p>
                  <a href="https://wa.me/6281333315119" target="_blank">
                    <HoverButton
                      :icon="['fab', 'whatsapp']"
                      text="Hubungi Pendaftaran"
                      class="w-72" />
                  </a>
                </div>
              </div>
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
import HoverButton from "@/components/inspira-ui/InteractiveHoverButton.vue";
export default {
  components: {
    Accordion,
    AccordionItem,
    HoverButton,
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
          "https://apiweb.pkusleman.com/api/layanan/ranap"
        );
        this.data = data.data;
        this.data.forEach((obj) => {
          let gambarArray = JSON.parse(obj.gambar); // parse string to array
          let updated = gambarArray.map(
            (img) => "https://apiweb.pkusleman.com" + img
          ); // modify each string
          obj.gambar = JSON.stringify(updated); // convert back to string
        });
        console.log(this.data);
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
        return;
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
