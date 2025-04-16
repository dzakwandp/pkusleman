<template>
  <div class="flex flex-col px-20 mb-20">
    <div class="h-[60vh] mt-20">
      <ImageSlider :images="images" autoplay class="rounded-xl" />
    </div>
    <div class="flex flex-col mt-10 text-center w-max mx-auto gap-2">
      <p class="text-4xl text-gray-800">Sejarah</p>
      <p class="text-sm text-gray-800">Berdirinya RS PKU Muhammadiyah Sleman</p>
      <div class="h-[3px] bg-primary-green"></div>
    </div>
    <Timeline :items="timeline">
      <template
        v-for="(item, index) in timeline"
        :key="item.id + 'template'"
        #[item.id]>
        <p
          className="text-gray-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          {{ item.text }}
        </p>
      </template>
    </Timeline>
  </div>
</template>

<script>
import ImageSlider from "@/components/inspira-ui/ImageSlider.vue";
import Timeline from "@/components/inspira-ui/Timeline.vue";
import image1 from "@/assets/images/history/1.jpg";
import image2 from "@/assets/images/history/2.jpg";
import image3 from "@/assets/images/history/3.jpg";
import image4 from "@/assets/images/history/3.jpg";
export default {
  components: {
    ImageSlider,
    Timeline,
  },
  data() {
    return {
      images: [image1, image2, image3, image4],
      timeline: [
        {
          id: 1,
          label: "15 Februari 1923",
          text: "Pendirian Balai Kesehatan (Poliklinik) PKU atas inisiatif K.H. Sudja' yang didukung sepenuhnya oleh K.H. Ahmad Dahlan. Awalnya bernama PKO (Penolong Kesengsaraan Oemoem) yang didirikan di kampung Jagang, Notoprajan, Yogyakarta dengan maksud menyediakan pelayanan kesehatan bagi kaum dhuafa’. Seiring berjalannya waktu, nama PKO berubah menjadi PKU (Pembina Kesejahteraan Umat).",
        },
        {
          id: 2,
          label: "1928",
          text: "Pada tahun 1928 Balai Kesehatan (Poliklinik) PKU Muhammadiyah pindah lokasi ke Jalan Ngabean No.12 B Yogyakarta (sekarang Jalan K.H. Ahmad Dahlan).",
        },
        {
          id: 3,
          label: "1936",
          text: "Pada tahun 1936 Balai Kesehatan (Poliklinik) PKU Muhammadiyah pindah lokasi lagi ke Jalan K.H. Dahlan No. 20 Yogyakarta hingga saat ini.",
        },
        {
          id: 4,
          label: "1970",
          text: "Pada tahun 1970-an status Balai Kesehatan (Poliklinik) berubah menjadi RS PKU Muhammadiyah Yogyakarta.",
        },
        {
          id: 5,
          label: "23 Februari 2024",
          text: "Pada tanggal 23 Februari 2024 RS PKU Muhammadiyah Sleman mendapatkan ijin operasional sebagai rumah sakit dengan klasifikasi kelas C dari Dinas Perijinan dan Penanaman Modal Pemerintah Daerah Daerah Istimewa Yogyakarta.",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
