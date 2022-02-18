import { createApp } from "vue";
import { FocusTrap } from "focus-trap-vue";

import App from "./App.vue";
import router from "./router";
import { store, key } from "./store";

createApp(App)
  .component("FocusTrap", FocusTrap)
  .use(store, key)
  .use(router)
  .mount("#app");
