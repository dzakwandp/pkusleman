<template>
  <div class="flex flex-col px-20 mt-10 min-h-screen">
    <p class="text-4xl text-center text-gray-800">Para Dokter Kami.</p>
    <p class="text-gray-800 text-center">
      Para dokter kami yang selalu siaga dan berusaha memberikan pelayanan
      terbaik untuk membantu kesehatan Anda.
    </p>
    <p class="text-gray-800 italic mb-10 text-center text-sm">
      *Untuk jadwal dokter secara lengkap dapat dilihat
      <a
        class="underline"
        href="https://daftar.pkusleman.com/jadwal-dokter/"
        target="_blank">
        disini
      </a>
    </p>
    <div class="flex flex-col gap-6">
      <div
        v-for="spesial in spesialisasi"
        :key="spesial.index"
        class="flex gap-6">
        <div class="flex flex-col w-1/4">
          <p class="text-gray-800 text-3xl">{{ spesial.text }}</p>
          <div class="w-full h-[2px] bg-primary-green"></div>
        </div>
        <div class="flex flex-wrap w-3/4">
          <div v-for="item in dokter" :key="item.index">
            <FlipCard v-if="spesial.text === item.group" class="mr-6 mt-6">
              <template #default>
                <div
                  class="flex h-full items-end"
                  :style="{ backgroundImage: `url(${bgDokter})` }"
                  style="background-size: cover">
                  <img :src="'https://apiweb.pkusleman.com/' + item.gambar" />
                </div>
              </template>
              <template #back>
                <div>
                  <p>
                    {{
                      item.gelar_depan +
                      " " +
                      item.nama +
                      ", " +
                      item.gelar_belakang
                    }}
                  </p>
                  <div class="h-max w-max px-1 bg-white rounded-md">
                    <p class="text-sm font-semibold mt-2 text-primary-green">
                      {{ item.spesialisasi }}
                    </p>
                  </div>
                  <div class="h-[2px] w-full bg-white my-2" />
                  <p class="text-xs">{{ item.tentang }}</p>
                </div>
              </template>
            </FlipCard>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import FlipCard from "@/components/inspira-ui/FlipCard.vue";
import bgDokter from "@/assets/images/bg_dokter.jpg";
export default {
  components: {
    FlipCard,
  },
  data() {
    return {
      spesialisasi: [],
      dokter: [],
      bgDokter: bgDokter,
    };
  },
  methods: {
    async getDokter() {
      try {
        const dokter = await axios.get(
          "https://apiweb.pkusleman.com/api/dokter"
        );
        this.dokter = dokter.data;
        this.spesialisasi = [
          ...new Set(this.dokter.map((item) => item.group)),
        ]
          .sort((a, b) => a.localeCompare(b))
          .map((item) => ({ text: item }));
        console.log(this.spesialisasi);
      } catch (err) {
        console.log(err);
      }
    },
  },
  mounted() {
    this.getDokter();
  },
};
</script>

<style lang="scss" scoped></style>
