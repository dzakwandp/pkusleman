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

import Redir from "@/views/Redir.vue";
import NotFound from "@/views/404.vue";

import LayananIGD from "@/views/Layanan/IGD.vue";
import RawatJalan from "@/views/layanan/RawatJalan.vue";
// import rawatinap from "@/views/layanan/rawatinap.vue";
// import farmasi from "@/views/layanan/farmasi.vue";
// import radiologi from "@/views/layanan/radiologi.vue";
// import laboratorium from "@/views/layanan/laboratorium.vue";
// import kamarbersalin from "@/views/layanan/kamarbersalin.vue";
// import bedahsentral from "@/views/layanan/bedahsentral.vue";

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
            .open("https://daftar.pkusleman.com/jadwal-dokter/", "_blank")
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
      component: LayananIGD
    },
    {
      path: "/layanan-rawat-jalan",
      name: "layanan-rawat-jalan",
      component: RawatJalan
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
