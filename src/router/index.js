import { createRouter, createWebHistory } from "vue-router";

import Home from "@/views/Home.vue";
import Layanan from "@/views/Layanan/Layanan.vue";
import Dokter from "@/views/Dokter/Dokter.vue";

import Profile from "@/views/Tentang/Profile.vue";
import Contact from "@/views/Tentang/Contact.vue";
import History from "@/views/Tentang/History.vue";

import InfoBed from "@/views/Informasi/InfoBed.vue";
import Asuransi from "@/views/Informasi/Asuransi.vue";
import Promo from "@/views/Informasi/Promo.vue";
import ArtikelBerita from "@/views/Informasi/ArtikelBerita.vue";
import ArtikelDetail from "@/views/Informasi/ArtikelDetail.vue";

import Redir from "@/views/Redir.vue";
import NotFound from "@/views/404.vue";

import LayananIGD from "@/views/Layanan/IGD.vue";
import RawatJalan from "@/views/layanan/RawatJalan.vue";
import LayanLab from "@/views/layanan/Laborat.vue";
import LayanRad from "@/views/layanan/Radiologi.vue";
import LayanFarmasi from "@/views/layanan/Farmasi.vue";
import RawatInap from "@/views/layanan/RawatInap.vue";
import BedahSentral from "@/views/layanan/BedahSentral.vue";
import RehabMedik from "@/views/layanan/RehabMedik.vue";
import RehabTumbuhKembang from "@/views/layanan/RehabTumbuhKembang.vue";
// import farmasi from "@/views/layanan/farmasi.vue";
// import radiologi from "@/views/layanan/radiologi.vue";
// import laboratorium from "@/views/layanan/laboratorium.vue";
// import kamarbersalin from "@/views/layanan/kamarbersalin.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: "link-active",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/redir",
      name: "redir",
      component: Redir,
    },
    {
      path: "/jadwaldokter",
      name: "jadwaldokter",
      beforeEnter(to, from, next) {
        console.log(from);
        if (!from.name) {
          router.push({ name: "redir", query: { from: "jadwaldokter" } });
        } else {
          window
            .open(
              "https://app.pkusleman.com/pendaftaran/?p=view_jadwal_dokter",
              "_blank",
            )
            .focus();
        }
      },
    },
    {
      path: "/daftaronline",
      name: "daftaronline",
      beforeEnter(to, from, next) {
        if (!from.name) {
          router.push({ name: "redir", query: { from: "daftaronline" } });
        } else {
          window.open("https://daftar.pkusleman.com/", "_blank").focus();
        }
      },
    },
    {
      path: "/layanan",
      name: "layanan",
      component: Layanan,
    },
    {
      path: "/layanan-igd",
      name: "layanan-igd",
      component: LayananIGD,
    },
    {
      path: "/layanan-rawat-jalan",
      name: "layanan-rawat-jalan",
      component: RawatJalan,
    },
    {
      path: "/layanan-laboratorium",
      name: "layanan-laboratorium",
      component: LayanLab,
    },
    {
      path: "/layanan-radiologi",
      name: "layanan-radiologi",
      component: LayanRad,
    },
    {
      path: "/layanan-farmasi",
      name: "layanan-farmasi",
      component: LayanFarmasi,
    },
    {
      path: "/layanan-rawat-inap",
      name: "layanan-rawat-inap",
      component: RawatInap,
    },
    {
      path: "/layanan-bedah-sentral",
      name: "layanan-bedah-sentral",
      component: BedahSentral,
    },
    {
      path: "/layanan-rehab-medik",
      name: "layanan-rehab-medik",
      component: RehabMedik,
    },
    {
      path: "/layanan-rehab-tumbuh-kembang",
      name: "layanan-rehab-tumbuh-kembang",
      component: RehabTumbuhKembang,
    },
    {
      path: "/dokter",
      name: "dokter",
      component: Dokter,
    },
    {
      path: "/profile",
      name: "profile",
      component: Profile,
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact,
    },
    {
      path: "/history",
      name: "history",
      component: History,
    },
    {
      path: "/informasi-tempat-tidur",
      name: "informasi-tempat-tidur",
      component: InfoBed,
    },
    {
      path: "/asuransi",
      name: "asuransi",
      component: Asuransi,
    },
    {
      path: "/promo",
      name: "promo",
      component: Promo,
    },
    {
      path: "/artikel-berita",
      name: "artikel-berita",
      component: ArtikelBerita,
    },
    {
      path: "/artikel/:slug",
      name: "artikel-detail",
      component: ArtikelDetail,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "404",
      component: NotFound,
    },
  ],
  scrollBehavior() {
    return false;
  },
});

export default router;
