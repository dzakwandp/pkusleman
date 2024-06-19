<template>
  <div class="flex flex-col w-full">
    <img :src="farmasi" class="brightness-75" />
    <div class="my-6 bg-[#0A6E45] h-2 w-3/4 mx-auto"></div>
    <div class="flex flex-col w-3/4 mx-auto gap-4">
      <div class="text-2xl font-bold text-[#0A6E45]">
        Instalasi Farmasi
      </div>
      <div>
        Instalasi Farmasi kami didukung dengan E-prescribing merupakan perangkat
        lunak untuk memudahkan pelayanan peresepan obat.

        <br />E-prescribing bermanfaat mengurangi risiko terjadinya kesalahan
        membaca dan menerjemahkan resep, meningkatkan akurasi dosis dan indikasi
        obat, mempercepat tahapan input data, memudahkan proses administrasi dan
        pencatatan sejarah penggunaan obat pasien
      </div>
    </div>
    <div class="my-6 bg-[#0A6E45] h-2 w-3/4 mx-auto"></div>
  </div>
</template>

<script>
import farmasi from "@/assets/images/farmasi.jpeg";
export default {
  data() {
    return {
      farmasi: farmasi,
    };
  },
};
</script>

<style lang="scss" scoped></style>
