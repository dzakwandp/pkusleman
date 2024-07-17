<template>
  <div class="flex flex-col w-full mt-0">
    <img :src="profileImage" class="brightness-75" />
    <div class="my-6 bg-[#0A6E45] h-2 w-3/4 mx-auto"></div>
    <div class="flex flex-col md:flex-row">
      <div class="flex md:size-1/2 justify-center">
        <img :src="logoCenter" class="size-1/2" />
      </div>
      <div class="md:w-1/2 h-max">
        <div class="w-3/4 md:w-2/3 h-max text-justify mx-auto mt-4 md:mt-0">
          <p>
            RS PKU Muhammadiyah Sleman adalah rumah sakit milik Persyarikatan
            Muhammadiyah. Pendirian Rumah Sakit diinisiasi oleh Pimpinan Daerah
            Muhammadiyah Sleman. Rumah sakit mulai operasional tanggal 23
            Februari 2024. Dalam operasional bersinergi dengan RS PKU
            Muhammadiyah Gamping.
          </p>
        </div>
      </div>
    </div>
    <div class="flex flex-col h-max w-3/4 mx-auto mt-10 gap-4 text-justify">
      <div>
        <div class="text-xl text-[#0A6E45] font-bold">Visi</div>
        <div>
          Menjadi rumah sakit yang unggul dengan mengedepankan nilai-nilai
          pelayanan yang Islami, Handal, Safety, Akurat dan Nyaman (IHSAN).
        </div>
      </div>
      <div>
        <div class="text-xl text-[#0A6E45] font-bold">Misi</div>
        <ol class="list-decimal ml-4">
          <li>
            Mewujudkan pelayanan rumah sakit secara komprehensif berbasis pada
            penerapan nilai - nilai Al Islam dan kemuhammadiyah serta
            prinsip-prinsip keselamatan pasien.
          </li>
          <li>
            Menerapkan sistem manajemen berbasis teknologi informasi yang
            efektif, efisien, transparan, dan akuntabel
          </li>
          <li>
            Meningkatkan kompetensi sumber daya insani dan standardisasi sarana
            dan prasarana.
          </li>
          <li>
            Mewujudkan lingkungan rumah sakit yang nyaman baik secara fisik
            maupun secara psikologis.
          </li>
        </ol>
      </div>
      <div>
        <div class="text-xl text-[#0A6E45] font-bold">Tujuan</div>
        <ol class="list-decimal ml-4">
          <li>
            Meningkatkan kuantitas tenaga medis spesialistik dan tenaga
            kesehatan lain disertai dengan peningkatan kualitas pendidikan dan
            pelatihan
          </li>
          <li>
            Mengembangkan, menambah dan memelihara sarana dan prasarana
            peralatan medis (medical equipment)
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
        </ol>
      </div>
      <div>
        <div class="text-xl text-[#0A6E45] font-bold">Motto</div>
        <div>
          <span class="text-[#0A6E45] font-bold">IHSAN</span> dalam pelayanan
        </div>
        <ol class="list-decimal ml-4">
          <li>Islami</li>
          <div>
            Pelayanan menggunakan sumber daya dan kegiatan pelayanan RS PKU
            Muhammadiyah Sleman selalu melekat nilai – nilai keislaman
          </div>
          <li>Handal</li>
          <div>
            Pelayanan diberikan oleh sumberdaya insani yang kompeten didukung
            fasilitas medis dan non medis modern serta dukungan teknologi
            informasi yang menjawab kebutuhan pelayanan.
          </div>
          <li>Safety</li>
          <div>
            Pelayanan yang dilakukan dalam kerangka sistem yang menjamin
            keselamatan pasien. Tolok ukurnya adalah rendahnya insiden
            keselamatan pasien.
          </div>
          <li>Akurat</li>
          <div>
            Pelayanan yang diberikan berbasis pada data dan informasi yang
            akurat, valid dan berbasis bukti (evidence) sehingga memberikan
            kepercayaan dan kemantapan yang tinggi pada pasien sekaligus
            memberikan teladan (uswah) bagi peserta didik.
          </div>
          <li>Nyaman</li>
          <div>
            Pelayanan rumah sakit yang didukung oleh suasana fisik yang bersih
            dan asri. Pelayanan yang memahami kebutuhan pasien sebagai makhluk
            sosial spiritual sehingga memberikan ketenangan psikologis dan
            spiritual.
          </div>
        </ol>
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
