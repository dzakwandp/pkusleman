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
      <div class="flex gap-4 justify-center sticky top-[6.5rem] z-10 bg-white py-2">
        <div
          v-for="item in spesialisasi"
          :key="item.index"
          @click="toggleFilter(item.text)"
          class="p-2 cursor-pointer outline outline-1 outline-primary-green rounded-xl text-sm hover:bg-primary-green hover:text-white transition"
          :class="{
            'bg-primary-green text-white': selectedFilters.includes(item.text),
            'bg-white text-gray-800': !selectedFilters.includes(item.text),
          }">
          {{ item.text }}
        </div>
      </div>
      <TransitionGroup name="fade" tag="div">
        <div
          v-for="spesial in filteredSpesialisasi"
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
      </TransitionGroup>
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
      selectedFilters: [],
      filteredSpesialisasi: [],
    };
  },
  methods: {
    async getDokter() {
      try {
        const dokter = await axios.get(
          "https://apiweb.pkusleman.com/api/dokter"
        );
        this.dokter = dokter.data;
        this.spesialisasi = [...new Set(this.dokter.map((item) => item.group))]
          .sort((a, b) => a.localeCompare(b))
          .map((item) => ({ text: item }));
        this.filteredSpesialisasi = this.spesialisasi;
      } catch (err) {
        console.log(err);
      }
    },
    toggleFilter(spesialis) {
      const index = this.selectedFilters.indexOf(spesialis);
      if (index === -1) {
        this.selectedFilters.push(spesialis);
      } else {
        this.selectedFilters.splice(index, 1);
      }
    },
  },
  watch: {
    selectedFilters: {
      handler() {
        if (this.selectedFilters.length === 0) {
          this.filteredSpesialisasi = this.spesialisasi;
        } else {
          this.filteredSpesialisasi = this.spesialisasi.filter((doc) =>
            this.selectedFilters.includes(doc.text)
          );
        }
      },
      deep: true,
    },
  },
  mounted() {
    this.getDokter();
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  @apply transition-all duration-300;
}
.fade-enter-from,
.fade-leave-to {
  @apply opacity-0 translate-y-4;
}
</style>
