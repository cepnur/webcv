import { createApp } from "vue";
import "./style.css";
import "./custom.css";
import App from "./App.vue";
import AOS from "aos";

// Import Font Awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faEnvelope, faPhone, faMapLocationDot, faCopyright, faDatabase, faCaretRight, faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import { faVuejs, faHtml5, faPhp, faCss3Alt, faSquareInstagram, faJs, faGitAlt, faBootstrap, faWhatsapp, faGithub } from "@fortawesome/free-brands-svg-icons";

library.add(faVuejs, faHtml5, faPhp, faCss3Alt, faJs, faGitAlt, faSquareInstagram, faBootstrap, faPhone, faEnvelope, faCaretLeft, faMapLocationDot, faCaretRight, faCopyright, faDatabase, faWhatsapp, faGithub);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
AOS.init();
