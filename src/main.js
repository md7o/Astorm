import { createApp } from "vue";
import App from "./App.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import router from "./router";
import store from "./store";
import "normalize.css";
import "./assets/index.css";

library.add(fas, far, fab);

createApp(App)
  .use(store)
  .use(router)
  .component("FontAwesome", FontAwesomeIcon)
  .mount("#app");
