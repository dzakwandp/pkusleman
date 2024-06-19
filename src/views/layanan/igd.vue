<template>
  <div class="flex flex-col w-full">
    <img :src="igd" class="brightness-75" />
    <div class="my-6 bg-[#0A6E45] h-2 w-3/4 mx-auto"></div>
    <div class="flex flex-col w-3/4 mx-auto gap-4">
      <div class="text-2xl font-bold text-[#0A6E45]">
        Instalasi Gawat Darurat
      </div>
      <div>
        Unit Gawat Darurat adalah salah satu unit dalam rumah sakit yang
        menyediakan penanganan awal pasien, sesuai dengan tingkat kegawatannya.
        <br />Sistem pelayanan yang diberikan menggunakan sistem triage, dimana
        pelayanan diutamakan bagi pasien dalam keadaan darurat (emergency) bukan
        berdasarkan antrian.
      </div>
      <div class="text-xl font-bold text-[#0A6E45]">Layanan</div>
      <ul class="list-disc ml-5">
        <li>Ambulance 24 Jam</li>
        <li>Ruang Triage</li>
        <li>Ruang Resusitasi</li>
        <li>Ruang Tindakan</li>
        <li>Ruang Observasi</li>
        <li>Ruang Bedah Minor</li>
      </ul>
    </div>
    <div class="my-6 bg-[#0A6E45] h-2 w-3/4 mx-auto"></div>
  </div>
</template>

<script>
import igd from "@/assets/images/igd.jpeg";
export default {
  data() {
    return {
      igd: igd,
    };
  },
};
</script>

<style lang="scss" scoped></style>
