<template>
  <div class="flex flex-col px-20 mt-10">
    <p class="text-4xl text-center text-gray-800">Para Dokter Kami.</p>
    <p class="text-gray-800 text-center mb-10">
      Para dokter kami yang selalu siaga dan berusaha memberikan pelayanan terbaik untuk membantu kesehatan Anda.
    </p>
    <div class="flex">
      <FlipCard v-for="item in dokter" :key="item.index" class="mr-6">
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
                item.gelar_depan + " " + item.nama + ", " + item.gelar_belakang
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
        console.log(this.dokter);
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
