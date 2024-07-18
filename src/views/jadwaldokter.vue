<template>
  <div class="flex flex-col w-full mt-32 md:mx-10">
    <div class="flex w-3/4 mx-auto">
      <div class="text-[#0A6E45] font-bold text-3xl">Jadwal Dokter</div>
    </div>
    <div class="my-6 bg-[#0A6E45] h-2 w-3/4 mx-auto"></div>
    <div v-for="src in images" :key="src" class="flex flex-col w-3/4 md:mt-4 mx-auto">
      <div class="text-[#0A6E45] text-xl font-bold mb-4">{{ src.title }}</div>
      <VueViewer :images="src.images">
        <img class="w-full md:w-1/3 cursor-pointer" :src="src.images" />
      </VueViewer>
    </div>
    <div class="text-sm mt-4 w-3/4 mx-auto italic underline">
      Demi kenyamanan anda silahkan menghubungi kami H-1 sebelum periksa
    </div>
    <div class="my-6 bg-[#0A6E45] h-2 w-3/4 mx-auto"></div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import "viewerjs/dist/viewer.css";
import { component as VueViewer } from "v-viewer";
import jadwalJuni from "@/assets/images/jadwal/jadwalJuni.jpeg";
import jadwalJuli from "@/assets/images/jadwal/jadwalJuli.jpg";
export default defineComponent({
  components: {
    VueViewer,
  },
  data() {
    return {
      images: [
        { title: "Juni 2024", images: jadwalJuni },
        { title: "Juli 2024", images: jadwalJuli },
      ],
    };
  },
  methods: {
    showPicture() {
      this.$viewerApi({
        images: this.images,
      });
    },
  },
});
</script>

<style scoped></style>
