<template>
  <div class="flex flex-col w-full">
    <img :src="rawatjalan" class="brightness-75" />
    <div class="my-6 bg-[#0A6E45] h-2 w-3/4 mx-auto"></div>
    <div class="flex flex-col w-3/4 mx-auto gap-4">
      <div class="text-2xl font-bold text-[#0A6E45]">Instalasi Rawat Jalan</div>
      <div class="text-xl font-bold text-[#0A6E45]">Layanan</div>
      <ul class="list-disc ml-5">
        <li>Poli Anak</li>
        <li>Poli Syaraf</li>
        <li>Poli Gigi</li>
        <li>Poli Mata</li>
        <li>Poli Kebidanan</li>
        <li>Poli Paru</li>
        <li>Poli Syaraf</li>
        <li>Poli THT-KL</li>
        <li>Poli Dalam</li>
        <li>Poli Bedah Umum</li>
        <li>Poli Bedah Mulut</li>
      </ul>
    </div>
    <div class="my-6 bg-[#0A6E45] h-2 w-3/4 mx-auto"></div>
  </div>
</template>

<script>
import rawatjalan from "@/assets/images/rawatjalan.jpeg";
export default {
  data() {
    return {
      rawatjalan: rawatjalan,
    };
  },
};
</script>

<style lang="scss" scoped></style>
