<template>
  <div class="flex flex-col w-full">
    <img :src="kamarbersalin" class="brightness-75" />
    <div class="my-6 bg-[#0A6E45] h-2 w-3/4 mx-auto"></div>
    <div class="flex flex-col w-3/4 mx-auto gap-4">
      <div class="text-2xl font-bold text-[#0A6E45]">Kamar Bersalin</div>
      <div>
        Layanan kamar bersalin RS PKU Muhammadiyah Sleman dilakukan oleh dokter
        spesialis obstetri gynekologi dan bidan yang terlatih dan berpengalaman.
        <br />Ruang bersalin terdiri dari ruang observasi, ruang persalinan dan
        ruang nifas.
      </div>
    </div>
    <div class="my-6 bg-[#0A6E45] h-2 w-3/4 mx-auto"></div>
  </div>
</template>

<script>
import kamarbersalin from "@/assets/images/kamarbersalin.jpeg";
export default {
  data() {
    return {
      kamarbersalin: kamarbersalin,
    };
  },
};
</script>

<style lang="scss" scoped></style>
