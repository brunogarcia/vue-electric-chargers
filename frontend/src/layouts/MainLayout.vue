<template>
  <div class="app">
    <header>
      <div class="section">
        <div class="columns">
          <div class="col-6">
            <p>Knowledge Frontend Test</p>
          </div>
          <div class="col-6 text-align-right">
            <p>
              <img :src="LargeWallboxIcon" alt="Wallbox" class="hide-small" />
              <img :src="SmallWallboxIcon" alt="Wallbox" class="hide-large" />
            </p>
          </div>
        </div>
      </div>
    </header>
    <main>
      <slot />
    </main>
    <footer>
      <div class="section">
        <div class="columns">
          <div class="col-6 hide-small">
            <p>Bruno Garcia</p>
          </div>
          <div class="col-6 text-align-right">
            <p class="footer--nav">
              <a href="mailto:bruno.garcia.echegaray@gmail.com">
                bruno.garcia.echegaray@gmail.com
              </a>
              <a href="https://github.com/brunogarcia/">
                <img :src="GithubIcon" alt="Github" />
              </a>
              <a href="https://www.linkedin.com/in/bruno-garcia-echegaray/">
                <img :src="LinkedinIcon" alt="Linkedin" />
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LargeWallboxIcon from "@/assets/icons/large_wallbox.svg";
import SmallWallboxIcon from "@/assets/icons/small_wallbox.svg";
import GithubIcon from "@/assets/icons/github.svg";
import LinkedinIcon from "@/assets/icons/linkedin.svg";

export default defineComponent({
  name: "MainLayout",

  setup() {
    return {
      LargeWallboxIcon,
      SmallWallboxIcon,
      GithubIcon,
      LinkedinIcon,
    };
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
  font-family: "Roboto", Helvetica, Arial, sans-serif;
  font-weight: 500;
}

@media screen and (min-width: 640px) {
  .hide-large {
    display: none;
  }
}

@media screen and (max-width: 640px) {
  .hide-small {
    display: none;
  }
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
    padding-bottom: 50px;
    background-color: var(--main-bg-color);
  }

  footer {
    flex: 0 0 var(--footer-height);
    a {
      color: var(--color-white);
      text-decoration: none;
    }
    .footer--nav {
      a {
        margin-left: 26px;
      }
    }
  }

  header,
  footer {
    background-color: var(--dark-bg-color);
    color: var(--color-white);
    font-size: 20px;
    line-height: 28px;
  }

  .columns {
    display: flex;
    flex-direction: row;
  }

  .col-6 {
    width: 50%;
  }

  .text-align-right {
    text-align: right;
  }
}
</style>
