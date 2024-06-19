<template>
  <div class="flex flex-col w-full mt-0">
    <img :src="profileImage" class="brightness-75" />
    <div class="my-6 bg-[#0A6E45] h-2 w-3/4 mx-auto"></div>
    <div class="flex h-max">
      <div class="flex w-1/2 justify-center">
        <img :src="logoCenter" class="h-1/2" />
      </div>
      <div class="w-1/2">
        <div class="w-2/3 text-justify">
          <p>
            RS PKU Muhammadiyah Sleman merupakan pengembangan dari RS PKU
            Muhammadiyah Gamping, yang berkedudukan di Jl. Pendowoharjo,
            Sawahan, Pandowoharjo, Kec. Sleman, Kabupaten Sleman, Daerah
            Istimewa Yogyakarta 55512. RS PKU Muhammadiyah Sleman milik
            Persyarikatan Muhammadiyah yang dikelola oleh Pimpinan Pusat
            Muhammadiyah.
          </p>
          <p>
            Rumah sakit ini berdiri pada tanggal Februari 2022. Pada tanggal
            Maret 2023 Rumah Sakit mendapatkan ijin operasional dari Dinas
            Kesehatan Kabupaten Sleman
          </p>
        </div>
      </div>
    </div>
    <div class="my-6 bg-[#0A6E45] h-2 w-3/4 mx-auto"></div>
  </div>
</template>

<script>
import profileImage from "@/assets/images/profile.jfif";
import logoCenter from "@/assets/images/logo_center.png";
export default {
  data() {
    return {
      profileImage: profileImage,
      logoCenter: logoCenter,
    };
  },
};
</script>

<style lang="scss" scoped></style>
