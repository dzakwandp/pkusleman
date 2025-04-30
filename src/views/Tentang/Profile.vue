<template>
  <div class="flex flex-col px-4 md:px-20 my-10">
    <div class="md:h-[60vh]">
      <ImageSlider :images="images" autoplay class="rounded-xl" />
    </div>
    <div class="flex flex-col md:flex-row items-center gap-10 mt-10">
      <img :src="Logo" class="md:w-1/4" />
      <p class="text-gray-800">
        RS PKU Muhammadiyah Sleman adalah rumah sakit milik Persyarikatan
        Muhammadiyah. Pendirian Rumah Sakit diinisiasi oleh Pimpinan Daerah
        Muhammadiyah Sleman. Rumah sakit mulai operasional tanggal 23 Februari
        2024. Dalam operasional bersinergi dengan RS PKU Muhammadiyah Gamping.
      </p>
    </div>
    <div
      class="flex flex-col items-start mt-10"
      data-aos="fade-up"
      data-aos-duration="1000">
      <p class="text-4xl text-gray-800">Visi</p>
      <p class="text-gray-800">
        Menjadi rumah sakit yang unggul dengan mengedepankan nilai-nilai
        pelayanan yang Islami, Handal, Safety, Akurat dan Nyaman (IHSAN).
      </p>
    </div>
    <div
      class="flex flex-col items-start mt-10"
      data-aos="fade-up"
      data-aos-duration="1000">
      <p class="text-4xl text-gray-800">Misi</p>
      <ul class="text-gray-800 list-decimal ml-4">
        <li>
          Mewujudkan pelayanan rumah sakit secara komprehensif berbasis pada
          penerapan nilai - nilai Al Islam dan kemuhammadiyah serta
          prinsip-prinsip keselamatan pasien.
        </li>
        <li>
          Menerapkan sistem manajemen berbasis teknologi informasi yang efektif,
          efisien, transparan, dan akuntabel
        </li>
        <li>
          Meningkatkan kompetensi sumber daya insani dan standardisasi sarana
          dan prasarana.
        </li>
        <li>
          Mewujudkan lingkungan rumah sakit yang nyaman baik secara fisik maupun
          secara psikologis.
        </li>
      </ul>
    </div>
    <div
      class="flex flex-col items-start mt-10"
      data-aos="fade-up"
      data-aos-duration="1000">
      <p class="text-4xl text-gray-800">Tujuan</p>
      <ul class="text-gray-800 list-decimal ml-4">
        <li>
          Meningkatkan kuantitas tenaga medis spesialistik dan tenaga kesehatan
          lain disertai dengan peningkatan kualitas pendidikan dan pelatihan
        </li>
        <li>
          Mengembangkan, menambah dan memelihara sarana dan prasarana peralatan
          medis (medical equipment)
        </li>
        <li>
          Meningkatkan pelayanan dengan membuka spesialis/sub spesialis dan
          melengkapi sarana dan prasarana secara mencukupi
        </li>
        <li>Peningkatan kecepatan, ketepatan, keramahan dan efisiensi</li>
        <li>
          Melakukan efisiensi dan efektifitas pelayanan pada semua unit kerja
          dan unit kegiatan
        </li>
        <li>
          Melaksanakan akuntabilitas pelayanan dengan secara berkesinambungan
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import ImageSlider from "@/components/inspira-ui/ImageSlider.vue";
import image1 from "@/assets/images/profile/1.jpeg";
import image2 from "@/assets/images/profile/2.jpeg";
import image3 from "@/assets/images/profile/3.jpeg";
import image4 from "@/assets/images/profile/4.jpeg";
import image5 from "@/assets/images/profile/4.jpeg";
import Logo from "@/assets/images/logo_center.png";
export default {
  components: {
    ImageSlider,
  },
  data() {
    return {
      Logo: Logo,
      images: [image1, image2, image3, image4, image5],
    };
  },
};
</script>

<style lang="scss" scoped></style>
