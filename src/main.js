import { createApp } from "vue";
import "./style.css";
import router from "./router";
import AOS from "aos";
import "aos/dist/aos.css";
import App from "./App.vue";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import {
  faInstagram,
  faWhatsapp,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faTruckMedical,
  faLocationDot,
  faHospital,
  faUserDoctor,
  faClipboardList,
  faArrowLeft,
  faArrowRight,
  faPhone,
  faAt,
  faCaretRight,
  faChevronDown,
  faChildReaching,
  faBone,
  faBed,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
/* add icons to the library */
library.add(
  faWhatsapp,
  faInstagram,
  faYoutube,
  faTruckMedical,
  faEnvelope,
  faLocationDot,
  faHospital,
  faUserDoctor,
  faClipboardList,
  faPhone,
  faAt,
  faCaretRight,
  faArrowLeft,
  faArrowRight,
  faChevronDown,
  faChildReaching,
  faBone,
  faBed,
  faBars,
  faXmark
);

AOS.init();

createApp(App)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
