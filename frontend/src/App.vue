<template>
  <div class="app">
    <header>
      <div class="section">Header</div>
    </header>
    <main>
      <div class="section"><router-view /></div>
    </main>
    <footer>
      <div class="section">Footer</div>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import useAppInit from "@/composables/useAppInit";

export default defineComponent({
  name: "App",

  setup() {
    useAppInit();
  },
});
</script>

<style lang="scss">
:root {
  --main-bg-color: #f2f2f2;
  --dark-bg-color: #000000;
  --color-white: #ffffff;
  --app-height: 100vh;
  --header-height: 64px;
  --footer-height: 54px;
}

body,
html {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}

.app {
  align-items: center;
  background-color: var(--main-bg-color);
  display: flex;
  flex-direction: column;
  height: var(--app-height);

  header,
  footer,
  main {
    margin: auto;
    width: 100%;
  }

  header .section,
  footer .section,
  main .section {
    height: 100%;
    width: 80%;
    margin: auto;
  }

  header {
    flex: 0 0 var(--header-height);
  }

  main {
    flex: 1;
  }

  footer {
    flex: 0 0 var(--footer-height);
  }

  header,
  footer {
    background-color: var(--dark-bg-color);
    color: var(--color-white);
  }
}
</style>
