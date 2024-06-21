import { createRouter, createWebHistory } from "vue-router";

import Home from "@/views/home.vue";
import Profile from "@/views/profile.vue";
import Layanan from "@/views/layanan.vue";
import JadwalDokter from "@/views/jadwaldokter.vue";

import igd from "@/views/layanan/igd.vue";
import rawatjalan from "@/views/layanan/rawatjalan.vue";
import rawatinap from "@/views/layanan/rawatinap.vue";
import farmasi from "@/views/layanan/farmasi.vue";
import radiologi from "@/views/layanan/radiologi.vue";
import laboratorium from "@/views/layanan/laboratorium.vue";
import kamarbersalin from "@/views/layanan/kamarbersalin.vue";
import bedahsentral from "@/views/layanan/bedahsentral.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: "link-active",
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/home",
      name: "home",
      component: Home,
    },
    {
      path: "/profil",
      name: "profil",
      component: Profile,
    },
    {
      path: "/layanan",
      name: "layanan",
      component: Layanan,
    },
    {
      path: "/jadwaldokter",
      name: "jadwaldokter",
      component: JadwalDokter,
    },
    {
      path: "/layanan/igd",
      name: "igd",
      component: igd,
    },
    {
      path: "/layanan/rawatjalan",
      name: "rawatjalan",
      component: rawatjalan,
    },
    {
      path: "/layanan/rawatinap",
      name: "rawatinap",
      component: rawatinap,
    },
    {
      path: "/layanan/farmasi",
      name: "farmasi",
      component: farmasi,
    },
    {
      path: "/layanan/radiologi",
      name: "radiologi",
      component: radiologi,
    },
    {
      path: "/layanan/laboratorium",
      name: "laboratorium",
      component: laboratorium,
    },
    {
      path: "/layanan/kamarbersalin",
      name: "kamarbersalin",
      component: kamarbersalin,
    },
    {
      path: "/layanan/bedahsentral",
      name: "bedahsentral",
      component: bedahsentral,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
});

export default router;
