<template>
  <div class="flex flex-col w-full">
    <img :src="rawatinap" class="brightness-75" />
    <div class="my-6 bg-[#0A6E45] h-2 w-3/4 mx-auto"></div>
    <div class="flex flex-col w-3/4 mx-auto gap-4">
      <div class="text-2xl font-bold text-[#0A6E45]">
        Instalasi Rawat Inap
      </div>
      <div>
        Kami memiliki 100 total bed rawat inap untuk memastikan pasien
        mendapatkan tempat perawatan terbaik
      </div>
    </div>
    <div class="my-6 bg-[#0A6E45] h-2 w-3/4 mx-auto"></div>
  </div>
</template>

<script>
import rawatinap from "@/assets/images/rawatinap.jpeg";
export default {
  data() {
    return {
      rawatinap: rawatinap,
    };
  },
};
</script>

<style lang="scss" scoped></style>
