<template>
  <div class="flex flex-col -mt-24">
    <div
      class="flex h-screen bg-gray-300"
      :style="{ backgroundImage: `url(${mainImage})` }"
      style="background-size: cover">
      <div
        class="flex flex-col self-center ml-20"
        data-aos="fade-up"
        data-aos-duration="1000">
        <p class="text-gray-800 font-bold">Selamat Datang di</p>
        <p class="text-gray-800 text-5xl text-wrap w-1/2">
          Rumah Sakit PKU Muhammadiyah Sleman
        </p>
        <p class="text-gray-800 text-wrap w-1/2">
          Kami berkomitmen memberikan layanan profesional yang islami dengan
          kenyamanan menjadi prioritas.
        </p>
      </div>
    </div>
    <Blur :delay="0.2" :duration="0.75" class="flex mx-auto -mt-20">
      <RouterLink v-for="link in mainMenu" :key="index" :to="link.link">
        <Button
          class="rounded-lg w-52 mx-5"
          :text="link.text"
          :icon="link.icon"></Button>
      </RouterLink>
    </Blur>
    <div class="flex h-20 mt-9 bg-gray-300">
      <div
        v-for="item in counts"
        :key="item.index"
        class="flex items-center justify-center w-1/4">
        <NumberTicker
          class="text-primary-green text-5xl"
          :value="item.text"
          :delay="500"
          :duration="2000"
          :decimalPlaces="0" />
        <p class="text-primary-green text-5xl mr-2">{{ item.plus }}</p>
        <p class="text-gray-800 font-semibold">{{ item.subText }}</p>
      </div>
    </div>
    <div class="flex h-[90vh]">
      <div
        class="flex flex-col justify-center items-start w-1/3 px-20"
        data-aos="fade-up"
        data-aos-duration="1000">
        <p class="text-4xl text-gray-800">Dengan Setulus Hati Melayani.</p>
        <p class="text-gray-800">
          Kami berkomitmen untuk selalu memberikan pelayanan kesehatan unggulan
          dengan mengutamakan kenyamanan Anda.
        </p>
      </div>
      <div class="flex items-center w-2/3 pr-20">
        <Gallery :images="images" />
      </div>
    </div>
    <div class="flex h-max py-10">
      <div
        class="grid grid-cols-4 w-2/3 justify-center items-center pl-20 gap-2">
        <CardHover
          v-for="item in layanan"
          :key="item.index"
          :imageUrl="item.image"
          class="size-50 2xl:size-72">
          <p class="w-28 rounded-md text-white">{{ item.text }}</p>
        </CardHover>
      </div>
      <div
        class="flex flex-col w-1/3 justify-center items-start px-20"
        data-aos="fade-up"
        data-aos-duration="1000">
        <p class="text-4xl text-gray-800">Layanan Lengkap.</p>
        <p class="text-gray-800">
          Kami hadir sebagai solusi kesehatan Anda dengan berbagai fasilitas
          kesehatan yang Anda butuhkan.
        </p>
        <Button
          text="Selengkapnya"
          class="rounded-xl w-48 text-gray-800 mt-2"
          @click="this.$router.push('/layanan')"></Button>
      </div>
    </div>
    <div class="flex h-[90vh] items-center bg-gray-300">
      <div
        class="flex flex-col w-1/3 pl-20"
        data-aos="fade-up"
        data-aos-duration="1000">
        <p class="text-4xl text-gray-800">Kami Hadir Untuk Anda.</p>
        <p class="text-gray-800">
          Para dokter dengan berbagai spesialisasi siap untuk membantu dan
          mendampingi dalam memberikan pelayanan kesehatan untuk Anda.
        </p>
        <Button
          text="Dokter"
          class="rounded-xl w-48 text-gray-800 mt-2"
          @click="this.$router.push('/dokter')"></Button>
      </div>
      <div class="w-2/3 px-20">
        <img :src="doctor" class="" />
      </div>
    </div>
    <div class="flex h-[90vh] py-10">
      <div class="flex w-2/3 pl-20 items-center">
        <Testimonial
          :testimonials="testimoni"
          autoplay
          :duration="10000"></Testimonial>
      </div>
      <div
        class="flex flex-col justify-center w-1/3 px-20"
        data-aos="fade-up"
        data-aos-duration="1000">
        <p class="text-4xl text-gray-800">Testimoni.</p>
        <p class="text-gray-800">
          Beberapa review dari para pengunjung yang telah memanfaatkan layanan
          di RS PKU Muhammadiyah Sleman
        </p>
        <span class="text-xs text-gray-600 mt-4"
          >*Review diambil dari Ulasan pada Google Maps</span
        >
      </div>
    </div>
    <div class="flex flex-col h-max pt-10 pb-20 px-20 gap-4 items-center">
      <p class="text-4xl text-gray-800">Rekanan dan Mitra Asuransi.</p>
      <p class="text-gray-800">
        Kami telah berkerjasama dengan beberapa mitra dan asuransi untuk
        memastikan Anda mendapatkan layanan kesehatan yang mudah dan nyaman.
      </p>
      <Marquee pause-on-hover class="[--duration:20s]">
        <img
          v-for="item in mitra"
          :key="item.index"
          :src="'https://apiweb.pkusleman.com' + item.image"
          class="h-12 mx-2" />
      </Marquee>
      <Marquee pause-on-hover reverse class="[--duration:20s]">
        <img
          v-for="item in mitra"
          :key="item.index"
          :src="'https://apiweb.pkusleman.com' + item.image"
          class="h-12 mx-2" />
      </Marquee>
      <Button class="w-48 rounded-xl text-gray-800" text="Selengkapnya" />
    </div>
  </div>
</template>

<script>
import mainImage from "@/assets/images/main_image.png";
import Button from "@/components/inspira-ui/InteractiveHoverButton.vue";
import NumberTicker from "@/components/inspira-ui/NumberTicker.vue";
import Gallery from "@/components/inspira-ui/ExpandableGallery.vue";
import Blur from "@/components/inspira-ui/BlurReveal.vue";
import CardHover from "@/components/inspira-ui/DirectionAwareHover.vue";
import Testimonial from "@/components/inspira-ui/AnimatedTestimonials.vue";
import Marquee from "@/components/inspira-ui/Marquee.vue";
import image1 from "@/assets/images/homePage/1.jpeg";
import image2 from "@/assets/images/homePage/2.jpg";
import image3 from "@/assets/images/homePage/3.jpeg";
import image4 from "@/assets/images/homePage/4.jpg";
import igd from "@/assets/images/homePage/igd.jpeg";
import laboratorium from "@/assets/images/homePage/laboratorium.jpeg";
import radiologi from "@/assets/images/homePage/radiologi.jpeg";
import rawatjalan from "@/assets/images/homePage/rawatjalan.jpeg";
import doctor from "@/assets/images/homePage/doctor.png";
import avaMale from "@/assets/images/ava_male.jpg";
import avaFemale from "@/assets/images/ava_female.jpg";
import moment from "moment";
import axios from "axios";
export default {
  components: {
    Button,
    NumberTicker,
    Gallery,
    Blur,
    CardHover,
    Testimonial,
    Marquee,
  },
  data() {
    return {
      mainImage: mainImage,
      doctor: doctor,
      mainMenu: [
        { text: "Layanan", icon: ["fas", "hospital"], link: "/layanan" },
        {
          text: "Jadwal Dokter",
          icon: ["fas", "user-doctor"],
          link: "/jadwaldokter",
        },
        {
          text: "Daftar Online",
          icon: ["fas", "clipboard-list"],
          link: "/daftaronline",
        },
      ],
      counts: [
        {
          text: moment().diff("2023-02-23", "years"),
          plus: "",
          subText: "Tahun Melayani",
        },
        { text: 120, plus: "+", subText: "Tenaga Medis" },
        { text: 2500, plus: "+", subText: "Pasien Terlayani" },
        { text: 20, plus: "+", subText: "Mitra Asuransi" },
      ],
      images: [image1, image2, image3, image4],
      layanan: [
        { image: igd, text: "IGD" },
        { image: radiologi, text: "Radiologi" },
        { image: laboratorium, text: "Laboratorium" },
        { image: rawatjalan, text: "Rawat Jalan" },
      ],
      testimoni: [
        {
          name: "Fillia Afiani Setyaningsih",
          quote:
            "Rekomendasi rumah sakit di Jogja dengan petugas2 yang handal dan profesional. Dokternya dokter-dokter terbaikk. Sukses selalu untuk PKU Muhammadiyah Slemann ✨🙌🏼",
          image: avaFemale,
          designation: "",
        },
        {
          name: "Sobran Jamil",
          quote:
            "Rumah sakit baru dengan fasilitas yg memadai. Ruangan bersih dan Asri. Dengan pemandangan gunung merapi yg indah di pagi hari, Luar biasa",
          image: avaMale,
          designation: "",
        },
        {
          name: "Yustina Wulandari",
          quote:
            "Pertama kali periksa di RS PKU ini. Bangunannya bagus dan bersih. Mau masuk di sambut oleh satpam dan diarahkan di pendaftaran. Bagian pendaftaran cepat, setelah itu ditensi oleh ibuk2 yg ramah.. Tidak begitu antri karena masih sepi. Saya ditangani dr. Fajar dan kakak perawatnya. Dr dan kakak perawat nya baik & ramah, sdh keluar dari ruang dokter. Kakak perawatnya masih ramah dan semangat mengingatkan untuk perawatan dirumah sesuai anjuran dokter. Pengambilan obat juga cepat dan dijelaskan dg ramah. Terimakasih PKU. Semoga sukses dan bermanfaat bagi semua orang. Amin",
          image: avaFemale,
          designation: "",
        },
        {
          name: "Iswanto Arkan",
          quote:
            "Pelayanan sangat prima/baik, mulai dari security, pendaftaran, perawat, dokternya, hingga ke apoteknya. Komunikatif, ramah, murah senyum, santun. Tempatnya juga bersih, rapi dan nyaman. Prosesnya juga cepat dari pendaftaran, periksa, sampai penyerahan obat. Mungkin karena masih belum terlalu banyak pasiennya, harapan kedepannya semoga bisa tetap seperti ini meskipun banyak pasiennya. Aamiin",
          image: avaMale,
          designation: "",
        },
      ],
      mitra: [],
    };
  },
  methods: {
    async getMitra() {
      try {
        const mitra = await axios.get(
          "https://apiweb.pkusleman.com/api/asuransi"
        );
        this.mitra = mitra.data;
      } catch (err) {
        console.log(err);
      }
    },
  },
  mounted() {
    this.getMitra();
  },
};
</script>

<style lang="scss" scoped></style>
