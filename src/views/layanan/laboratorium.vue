<template>
  <div class="flex flex-col w-full">
    <img :src="laboratorium" class="brightness-75" />
    <div class="my-6 bg-[#0A6E45] h-2 w-3/4 mx-auto"></div>
    <div class="flex flex-col w-3/4 mx-auto gap-4">
      <div class="text-2xl font-bold text-[#0A6E45]">
        Instalasi Laboratorium
      </div>
      <div>Pemeriksaan laboratorium yang dapat dilakukan di PKU Sleman</div>
      <ul class="list-disc ml-5">
        <li>Darah Rutin</li>
        <li>Urin Rutin</li>
        <li>Paket Napza (AMP, BZO, COC, MER, MOP, THC)</li>
        <li>HbsAg (Hepatitis B)</li>
        <li>HIV Rapid</li>
        <li>IgG/IgM Dengue</li>
        <li>NS 1</li>
        <li>HCV Rapid (Hepatitis C)</li>
        <li>Golongan Darah</li>
      </ul>
    </div>
    <div class="my-6 bg-[#0A6E45] h-2 w-3/4 mx-auto"></div>
  </div>
</template>

<script>
import laboratorium from "@/assets/images/laboratorium.jpeg";
export default {
  data() {
    return {
      laboratorium: laboratorium,
    };
  },
};
</script>

<style lang="scss" scoped></style>
