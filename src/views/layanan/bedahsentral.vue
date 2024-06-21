<template>
  <div class="flex flex-col w-full">
    <img :src="bedahsentral" class="brightness-75" />
    <div class="my-6 bg-[#0A6E45] h-2 w-3/4 mx-auto"></div>
    <div class="flex flex-col w-3/4 mx-auto gap-4">
      <div class="text-2xl font-bold text-[#0A6E45]">
        Instalasi Bedah Sentral
      </div>
      <div>
        Kami memilki kamar operasi yang terstandar, dirancang dengan sistem
        Modular Operation Theatre (MOT). MOT adalah sistem terintegrasi yang
        digunakan untuk ruang operasi sehingga pelaksanaan operasi dapat
        berjalan secara aman, efektif dan efisien.
      </div>
    </div>
    <div class="my-6 bg-[#0A6E45] h-2 w-3/4 mx-auto"></div>
  </div>
</template>

<script>
import bedahsentral from "@/assets/images/bedahsentral.jpeg";
export default {
  data() {
    return {
      bedahsentral: bedahsentral,
    };
  },
};
</script>

<style lang="scss" scoped></style>
