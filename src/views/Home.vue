<template>
  <div class="flex flex-col md:-mt-24">
    <div
      class="flex h-[40vh] md:h-screen bg-gray-300 bg-cover"
      :style="{ backgroundImage: `url(${mainImage})` }">
      <div
        class="flex flex-col self-center ml-5 md:ml-20"
        data-aos="fade-up"
        data-aos-duration="1000">
        <p class="text-gray-800 font-bold text-sm md:text-base">
          Selamat Datang di
        </p>
        <p class="text-gray-800 text-2xl md:text-5xl text-wrap w-1/2">
          Rumah Sakit PKU Muhammadiyah Sleman
        </p>
        <p class="hidden md:block text-gray-800 text-wrap w-1/2">
          Kami berkomitmen memberikan layanan profesional yang islami dengan
          kenyamanan menjadi prioritas.
        </p>
      </div>
    </div>
    <Blur :delay="0.2" :duration="0.75" class="flex mx-auto mt-5 md:-mt-20">
      <RouterLink v-for="link in mainMenu" :key="link.index" :to="link.link">
        <Button
          class="rounded-lg w-28 md:w-52 mx-2 md:mx-5 text-xs md:text-base"
          :text="link.text"
          :icon="link.icon"></Button>
      </RouterLink>
    </Blur>
    <div class="flex h-24 md:h-20 mt-9 bg-gray-300">
      <div
        v-for="item in counts"
        :key="item.index"
        class="flex flex-col md:flex-row items-center justify-center w-1/4">
        <div class="flex">
          <NumberTicker
            class="text-primary-green text-2xl md:text-5xl"
            :value="item.text"
            :delay="500"
            :duration="2000"
            :decimalPlaces="0" />
          <p class="text-primary-green text-2xl md:text-5xl md:mr-2">
            {{ item.plus }}
          </p>
        </div>
        <p class="text-gray-800 font-semibold text-center">
          {{ item.subText }}
        </p>
      </div>
    </div>
    <div
      class="flex flex-col md:flex-row h-max md:h-[90vh] mt-10 md:mt-0 gap-8 md:gap-0">
      <div
        class="flex flex-col justify-center items-start md:w-1/3 px-4 md:px-20"
        data-aos="fade-up"
        data-aos-duration="1000">
        <p class="text-4xl text-gray-800">Dengan Setulus Hati Melayani.</p>
        <p class="text-gray-800">
          Kami berkomitmen untuk selalu memberikan pelayanan kesehatan unggulan
          dengan mengutamakan kenyamanan Anda.
        </p>
      </div>
      <div class="flex items-center md:w-2/3 px-4 md:pr-20">
        <Gallery :images="images" />
      </div>
    </div>
    <div
      class="flex flex-col-reverse md:flex-row h-max md:py-10 mt-10 md:mt-0 gap-8 md:gap-0">
      <div
        class="grid grid-cols-2 md:grid-cols-4 md:w-2/3 justify-center items-center px-4 md:pl-20 gap-2">
        <CardHover
          v-for="item in layanan"
          :key="item.index"
          :imageUrl="item.image"
          class="size-50 2xl:size-72">
          <p class="w-28 rounded-md text-white">{{ item.text }}</p>
        </CardHover>
      </div>
      <div
        class="flex flex-col md:w-1/3 justify-center items-start px-4 md:px-20"
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
    <div
      class="flex flex-col md:flex-row h-max md:h-[90vh] items-center bg-gray-300 mt-10 pt-10 md:mt-0 md:pt-0">
      <div
        class="flex flex-col md:w-1/3 px-4 md:pl-20"
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
      <div class="md:w-2/3 px-4 md:px-20 mt-10 md:mt-0">
        <img :src="doctor" class="" />
      </div>
    </div>
    <div
      v-if="testimoniLoad"
      class="flex flex-col-reverse md:flex-row h-max md:h-[90vh] py-10">
      <div class="flex md:w-2/3 px-10 md:pl-20 items-center">
        <Testimonial
          :testimonials="testimoni"
          :autoplay="true"
          :duration="10000"></Testimonial>
      </div>
      <div
        class="flex flex-col justify-center md:w-1/3 px-4 md:px-20"
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
    <div
      class="flex flex-col h-max md:pt-10 pb-20 px-4 md:px-20 gap-4 items-center">
      <p class="text-4xl text-gray-800">Rekanan dan Mitra Asuransi.</p>
      <p class="text-gray-800">
        Kami telah berkerjasama dengan beberapa mitra dan asuransi untuk
        memastikan Anda mendapatkan layanan kesehatan yang mudah dan nyaman.
      </p>
      <div class="flex flex-wrap gap-2 items-center justify-center md:hidden">
        <img
          v-for="item in mitra"
          :key="item.index"
          :src="'https://apiweb.pkusleman.com' + item.image"
          class="w-1/5" />
      </div>
      <Marquee pause-on-hover class="[--duration:20s] hidden md:flex">
        <img
          v-for="item in mitra"
          :key="item.index"
          :src="'https://apiweb.pkusleman.com' + item.image"
          class="h-12 mx-2" />
      </Marquee>
      <Marquee pause-on-hover reverse class="[--duration:20s] hidden md:flex">
        <img
          v-for="item in mitra"
          :key="item.index"
          :src="'https://apiweb.pkusleman.com' + item.image"
          class="h-12 mx-2" />
      </Marquee>
      <Button
        class="w-48 rounded-xl text-gray-800"
        text="Selengkapnya"
        @click="this.$router.push('/asuransi')" />
    </div>
  </div>
</template>

<script>
import mainImage from "@/assets/images/main_image.webp";
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
      testimoni: [],
      testimoniLoad: false,
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
    async getReview() {
      try {
        const review = await axios.get(
          "https://apiweb.pkusleman.com/api/review"
        );
        this.testimoni = review.data;
        this.testimoniLoad = true;
      } catch (err) {
        console.log(err);
      }
    },
  },
  mounted() {
    this.getMitra();
    this.getReview();
  },
};
</script>

<style lang="scss" scoped></style>
